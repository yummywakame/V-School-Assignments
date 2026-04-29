import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

const BigDataContext = React.createContext()
const rawApiKey =
    (typeof import.meta !== "undefined" && import.meta.env && (import.meta.env.VITE_API_KEY || import.meta.env.REACT_APP_API_KEY))
    || (typeof process !== "undefined" && process.env && process.env.REACT_APP_API_KEY)
    || ""
const apiKey = String(rawApiKey).trim()
const apiRoot = apiKey
    ? `https://www.thecocktaildb.com/api/json/v2/${encodeURIComponent(apiKey)}`
    : "https://www.thecocktaildb.com/api/json/v1/1"

let ingredientsResp
let nonAlcoholicResp
let recentResp
let cocktailResp
let cocktailsByIngResp
let cocktailsByStrResp

const normalizeDrinks = (payload) => (Array.isArray(payload) ? payload : [])

/** The CocktailDB recent feed is capped (10 drinks on v2). We show this many rows when possible. */
const RECENT_LIST_TARGET = 20

/**
 * recent.php returns the authoritative “new” list (max ~10). latest.php returns the same set for
 * the test key — not more rows. To reach `targetCount`, append drinks from the alcoholic catalog
 * with the highest numeric idDrink that are not already in `recentDrinks`. Ordering of those extras
 * is a heuristic (newer-looking IDs first), not guaranteed to match the DB’s internal edit order.
 */
const augmentRecentListToTarget = (recentDrinks, alcoholicFilterDrinks, targetCount) => {
    const recent = normalizeDrinks(recentDrinks)
    const filter = normalizeDrinks(alcoholicFilterDrinks)
    if (!recent.length) {
        return filter
            .sort((a, b) => parseInt(String(b.idDrink), 10) - parseInt(String(a.idDrink), 10))
            .slice(0, targetCount)
    }
    if (recent.length >= targetCount) {
        return recent.slice(0, targetCount)
    }
    const seen = new Set(recent.map((d) => String(d.idDrink)))
    const extras = filter
        .filter((d) => !seen.has(String(d.idDrink)))
        .sort((a, b) => parseInt(String(b.idDrink), 10) - parseInt(String(a.idDrink), 10))
    return [...recent, ...extras].slice(0, targetCount)
}

/** Curated Popular list (order preserved). Each row is resolved with `search.php`. */
const CUSTOM_POPULAR_NAMES = [
    'Old Fashioned',
    'Margarita',
    'Negroni',
    'Espresso Martini',
    'Daiquiri',
    'Aperol Spritz',
    'Paloma',
    'Mojito',
    'Moscow Mule',
    'Whiskey Sour',
    'Long Island Iced Tea',
    'Dry Martini',
    'Manhattan',
    'Caipirinha',
    'White Russian',
]

const pickSearchHitForName = (drinksPayload, queryName) => {
    const list = normalizeDrinks(drinksPayload)
    if (!list.length) return null
    const q = queryName.trim().toLowerCase()
    const exact = list.find((d) => d.strDrink && d.strDrink.trim().toLowerCase() === q)
    return exact || list[0]
}

class BigDataProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            componentList: ["ingredients"],
            setComponentList: this.setComponentList,
            setSearchType: this.setSearchType,
            getCocktailDetails: this.getCocktailDetails,
            getRandomCocktailDetails: this.getRandomCocktailDetails,
            cocktailID: props.match.params._id || '',
            cocktailArrayIndex: 0,
            searchIngredients: props.match.params._id || '',
            searchString: props.match.params._id || '',
            cocktailDetail: [],
            ingredientsList: [],
            nonAlcoholicList: [],
            cocktailsByIngList: null,
            cocktailsByStrList: null,
            popularList: [],
            recentList: [],
            searchType: (typeof props.match.params._id === Number) ? 'cocktail' : (typeof props.match.params._id !== Number) ? 'string' : '',
            errMsg: ''
        }
    }

    getListData = async () => {
        this.setState({
            errMsg: ''
        })
        try {
            ////////////////////////////////////////////////////////////////////////////
            // GET THE DATA 

            // Get ingredients list
            if (this.state.componentList.includes("ingredients")) {
                ingredientsResp = await axios.get(`${apiRoot}/list.php?i=list`)
                // Save ingredients list to state
                this.setState({
                    ingredientsList: normalizeDrinks(ingredientsResp.data.drinks)
                })
            }
            // Get Non-Alcoholic Drink List
            if (this.state.componentList.includes("nonalcoholic")) {
                nonAlcoholicResp = await axios.get(`${apiRoot}/filter.php?a=Non_Alcoholic`)
                // Save Non-Alcoholic Drinks List to state
                this.setState({
                    nonAlcoholicList: normalizeDrinks(nonAlcoholicResp.data.drinks)
                })
            }
            // Get Popular Drink List (curated names → search.php, not CocktailDB popular.php)
            if (this.state.componentList.includes("popular")) {
                const hits = await Promise.all(
                    CUSTOM_POPULAR_NAMES.map((name) =>
                        axios
                            .get(`${apiRoot}/search.php?s=${encodeURIComponent(name)}`)
                            .then((r) => pickSearchHitForName(r.data.drinks, name))
                            .catch(() => null)
                    )
                )
                const popularSource = hits.filter(Boolean)
                this.setState({
                    popularList: popularSource,
                })
            }
            // Get Recent Drink List (official feed is short; see augmentRecentListToTarget)
            if (this.state.componentList.includes("recent")) {
                let recentSource = []
                try {
                    recentResp = await axios.get(`${apiRoot}/recent.php`)
                    recentSource = normalizeDrinks(recentResp.data.drinks)
                } catch (err) {
                    recentResp = null
                }
                if (recentSource.length < RECENT_LIST_TARGET) {
                    try {
                        const alcoholicForRecent = await axios.get(
                            `${apiRoot}/filter.php?a=Alcoholic`
                        )
                        recentSource = augmentRecentListToTarget(
                            recentSource,
                            alcoholicForRecent.data.drinks,
                            RECENT_LIST_TARGET
                        )
                    } catch (err) {
                        /* keep partial list from recent.php only */
                    }
                }
                this.setState({
                    recentList: recentSource,
                })
            }
            // Get INDIVIDUAL Cocktail by ID
            if (this.state.searchType === "cocktail") {
                cocktailResp = await axios.get(`${apiRoot}/lookup.php?i=${this.state.cocktailID}`)
                // Save SELECTED Cocktail to state
                this.setState({
                    cocktailDetail: normalizeDrinks(cocktailResp.data.drinks)
                }, () => this.props.history.push(`/cocktail/${this.state.cocktailID}`))
            }
            // Get INDIVIDUAL Cocktail by Random ID
            if (this.state.searchType === "random") {
                cocktailResp = await axios.get(`${apiRoot}/random.php`)
                const randomDrinks = normalizeDrinks(cocktailResp.data.drinks)
                const randomId = randomDrinks[0] ? randomDrinks[0].idDrink : this.state.cocktailID
                this.setState({
                    cocktailDetail: randomDrinks,
                    cocktailID: randomId,
                })
            }
            // Get all Cocktails by INGREDIENTS
            if (this.state.searchType === "ingredients" && this.state.searchIngredients) {
                cocktailsByIngResp = await axios.get(`${apiRoot}/filter.php?i=${this.state.searchIngredients}`)
                // Save all cocktails by INGREDIENTS
                this.setState({
                    cocktailsByIngList: normalizeDrinks(cocktailsByIngResp.data.drinks),
                    searchIngredients: ''
                })
            }
            // Get all Cocktails by COCKTAIL NAME string
            if (this.state.searchType === "string" && this.state.searchString) {
                cocktailsByStrResp = await axios.get(
                    `${apiRoot}/search.php?s=${encodeURIComponent(this.state.searchString)}`
                )
                // Save all cocktails found by NAME
                this.setState({
                    cocktailsByStrList: normalizeDrinks(cocktailsByStrResp.data.drinks),
                    searchString: ''
                })
            }

            ////////////////////////////////////////////////////////////////////////////
            // CLEAR STATE
            this.setState({
                searchType: '',
                componentList: ''
            })

        } catch (err) {
            // handle error thrown from ANY request in the TRY
            // if(!this.state.ingredientsList.length || !this.state.nonAlcoholicList.length){
            //     this.setState({
            //         errMsg: "The CocktailDB server is overloaded. Please try again later."
            //     })
            // }
            this.setState((prev) => ({
                cocktailsByStrList: Array.isArray(prev.cocktailsByStrList)
                    ? prev.cocktailsByStrList
                    : [],
                cocktailsByIngList: Array.isArray(prev.cocktailsByIngList)
                    ? prev.cocktailsByIngList
                    : [],
            }))
        }
    }

    setComponentList = (arr) => {
        this.setState({
            componentList: arr
        }, () => this.getListData())
    }

    setSearchType = (sType, id) => {
        this.setState({
            searchType: sType
        })
        if (sType === "ingredients") {
            this.setState({
                searchIngredients: id,
                cocktailsByIngList: null,
            }, () => this.getListData())
        }
        if (sType === "string") {
            this.setState({
                searchString: id,
                cocktailsByStrList: null,
            }, () => this.getListData())
        }
    }

    getCocktailDetails = (id) => {
        this.setState({
            searchType: "cocktail"
        })

        this.setState({
            cocktailID: id
        }, () => this.getListData())
    }
    
    getRandomCocktailDetails = () => {
        this.setState(
            {
                searchType: "random",
                cocktailDetail: [],
            },
            () => this.getListData()
        )
    }

    render() {
        return (
            <BigDataContext.Provider
                value={{
                    ...this.state,
                    getListData: this.getListData,
                    getCocktailDetails: this.getCocktailDetails,
                    getRandomCocktailDetails: this.getRandomCocktailDetails
                }}>
                {this.props.children}
            </BigDataContext.Provider>
        )
    }
}


export const withListData = C => props => (
    <BigDataContext.Consumer>
        {value => <C {...props} {...value} />}
    </BigDataContext.Consumer>
)

export default withRouter(BigDataProvider)