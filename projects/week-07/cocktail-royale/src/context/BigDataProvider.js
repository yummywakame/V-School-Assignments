import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

const BigDataContext = React.createContext()
const apiBaseUrl = "https://www.thecocktaildb.com/api/json/v2/"
const apiKey = process.env.REACT_APP_API_KEY

let ingredientsResp
let nonAlcoholicResp
let popularResp
let recentResp
let cocktailResp
let cocktailsByIngResp
let cocktailsByStrResp

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
            cocktailsByIngList: [],
            cocktailsByStrList: [],
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
                ingredientsResp = await axios.get(`${apiBaseUrl}${apiKey}/list.php?i=list`)
                // Save ingredients list to state
                this.setState({
                    ingredientsList: ingredientsResp.data.drinks
                })
            }
            // Get Non-Alcoholic Drink List
            if (this.state.componentList.includes("nonalcoholic")) {
                nonAlcoholicResp = await axios.get(`${apiBaseUrl}${apiKey}/filter.php?a=Non_Alcoholic`)
                // Save Non-Alcoholic Drinks List to state
                this.setState({
                    nonAlcoholicList: nonAlcoholicResp.data.drinks
                })
            }
            // Get Popular Drink List
            if (this.state.componentList.includes("popular")) {
                popularResp = await axios.get(`${apiBaseUrl}${apiKey}/popular.php`)
                // Save Popular Drinks List to state
                this.setState({
                    popularList: popularResp.data.drinks
                })
            }
            // Get Recent Drink List
            if (this.state.componentList.includes("recent")) {
                recentResp = await axios.get(`${apiBaseUrl}${apiKey}/recent.php`)
                // Save Recent Drinks List to state
                this.setState({
                    recentList: recentResp.data.drinks
                })
            }
            // Get INDIVIDUAL Cocktail by ID
            if (this.state.searchType === "cocktail") {
                cocktailResp = await axios.get(`${apiBaseUrl}${apiKey}/lookup.php?i=${this.state.cocktailID}`)
                // Save SELECTED Cocktail to state
                this.setState({
                    cocktailDetail: cocktailResp.data.drinks
                }, () => this.props.history.push(`/cocktail/${this.state.cocktailID}`))
            }
            // Get INDIVIDUAL Cocktail by Random ID
            if (this.state.searchType === "random") {
                cocktailResp = await axios.get(`${apiBaseUrl}${apiKey}/random.php`)
                console.log("cocktailResp.data.drinks")
                console.log(cocktailResp.data.drinks)
                // Save SELECTED Cocktail to state
                this.setState({
                    cocktailDetail: cocktailResp.data.drinks,
                    cocktailID: this.state.cocktailDetail.idDrink
                }, () => this.props.history.push(`/cocktail/roulette`))
            }
            // Get all Cocktails by INGREDIENTS
            if (this.state.searchType === "ingredients" && this.state.searchIngredients) {
                cocktailsByIngResp = await axios.get(`${apiBaseUrl}${apiKey}/filter.php?i=${this.state.searchIngredients}`)
                // Save all cocktails by INGREDIENTS
                this.setState({
                    cocktailsByIngList: cocktailsByIngResp.data.drinks,
                    searchIngredients: ''
                })
            }
            // Get all Cocktails by COCKTAIL NAME string
            if (this.state.searchType === "string" && this.state.searchString) {
                cocktailsByStrResp = await axios.get(`${apiBaseUrl}${apiKey}/search.php?s=${this.state.searchString}`)
                // Save all cocktails found by NAME
                this.setState({
                    cocktailsByStrList: cocktailsByStrResp.data.drinks,
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
                searchIngredients: id
            }, () => this.getListData())
        }
        if (sType === "string") {
            this.setState({
                searchString: id
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
        this.setState({
            searchType: "random"
        }, () => this.getListData())
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