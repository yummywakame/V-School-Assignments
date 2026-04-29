import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import LoadOverlay from './components/LoadOverlay.js'
import WelcomeSplash from './components/WelcomeSplash.js'
import { withListData } from './context/BigDataProvider.js'
import TopMenu from './components/TopMenu.js'
import PopularList from './components/PopularList.js'
import RecentList from './components/RecentList.js'
import NonAlcoholicList from './components/NonAlcoholicList.js'
import DrinkDetail from './components/DrinkDetail.js'
import Roulette from './components/Roulette.js'
import SearchResultsIng from './components/SearchResultsIng.js'
import SearchResultsStr from './components/SearchResultsStr.js'

// Stylesheets
import './materialize.css'
import './styles.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchIngredients: '',
            searchString: '',
            ingredientActiveIndex: -1,
            showIngredientSuggestions: false,
            cocktailNamesList: [],
            cocktailNamesReady: false,
            nameActiveIndex: -1,
            showNameSuggestions: false
        }
        this._nameLoadAttempts = 0
    }

    getCocktailNamesUrl = () => {
        const fromEnv = typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_COCKTAIL_NAMES_URL
        const trimmed = String(fromEnv || "").trim()
        if (trimmed) return trimmed

        const isDev = Boolean(typeof import.meta !== "undefined" && import.meta.env && import.meta.env.DEV)
        if (isDev) return "/api/cocktail-names"

        const baseUrl = (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.BASE_URL) || "/"
        return `${baseUrl}data/cocktail-names.json`
    }

    loadCocktailNames = () => {
        const url = this.getCocktailNamesUrl()
        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error(String(res.status))
                return res.json()
            })
            .then((data) => {
                if (data && data.building) {
                    if (this._nameLoadAttempts < 40) {
                        this._nameLoadAttempts += 1
                        setTimeout(() => this.loadCocktailNames(), 2000)
                    } else {
                        this._nameLoadAttempts = 0
                        this.setState({
                            cocktailNamesList: [],
                            cocktailNamesReady: true
                        })
                    }
                    return
                }
                this._nameLoadAttempts = 0
                const names = Array.isArray(data.names) ? data.names : []
                this.setState({
                    cocktailNamesList: names,
                    cocktailNamesReady: true
                })
            })
            .catch(() => {
                this.setState({
                    cocktailNamesList: [],
                    cocktailNamesReady: true
                })
            })
    }

    scheduleCocktailNamesLoad = () => {
        const run = () => this.loadCocktailNames()
        if (typeof window !== "undefined" && typeof window.requestIdleCallback === "function") {
            window.requestIdleCallback(run, { timeout: 2000 })
        } else {
            setTimeout(run, 800)
        }
    }

    componentDidMount() {
        // get only the data for components specified in componentList
        this.props.getListData()
        // Defer name list fetch so first paint / welcome splash are not blocked by a long cold-cache build (dev proxy + server).
        this.scheduleCocktailNamesLoad()

        // show welcome message div for 3 seconds
        setTimeout(() => {
            localStorage.welcomeHidden = true
            this.forceUpdate()
        }, 7000)

        // Find out if theme previously saved in localStorage and apply it
        if (localStorage.theme === "blue") {
            document.body.classList.remove('pink-theme')
            document.body.classList.add('blue-theme')
        } else {
            document.body.classList.remove('blue-theme')
            document.body.classList.add('pink-theme')
        }

    }

    getIngredientSuggestions = (query) => {
        const normalizedQuery = String(query || '').trim().toLowerCase()
        if (!normalizedQuery) return []

        const ingredients = Array.isArray(this.props.ingredientsList) ? this.props.ingredientsList : []
        return ingredients
            .map(item => item && item.strIngredient1)
            .filter(Boolean)
            .filter(name => name.toLowerCase().includes(normalizedQuery))
            .slice(0, 12)
    }

    normalizeIngredientForApi = (value) => String(value || '').trim().replace(/\s+/g, '_')

    submitIngredientSearch = (ingredientValue) => {
        const ingredientQuery = this.normalizeIngredientForApi(ingredientValue)
        if (!ingredientQuery) return

        this.props.setSearchType("ingredients", ingredientQuery)
        this.props.history.push(`/results/ingredients/${ingredientQuery}`)
        this.setState({
            searchIngredients: '',
            ingredientActiveIndex: -1,
            showIngredientSuggestions: false
        })
    }

    handleIngredientInputChange = (event) => {
        const value = event.target.value
        this.setState({
            searchIngredients: value,
            ingredientActiveIndex: -1,
            showIngredientSuggestions: true
        })
    }

    handleIngredientInputFocus = () => {
        this.setState({ showIngredientSuggestions: true })
    }

    handleIngredientInputBlur = () => {
        // Delay hide so click/tap on a suggestion can fire first.
        setTimeout(() => {
            this.setState({ showIngredientSuggestions: false, ingredientActiveIndex: -1 })
        }, 120)
    }

    handleIngredientSelect = (ingredientName) => {
        this.submitIngredientSearch(ingredientName)
    }

    handleIngredientInputKeyDown = (event) => {
        const suggestions = this.getIngredientSuggestions(this.state.searchIngredients)
        if (!suggestions.length) return

        if (event.key === "ArrowDown") {
            event.preventDefault()
            this.setState(prevState => ({
                showIngredientSuggestions: true,
                ingredientActiveIndex: Math.min(prevState.ingredientActiveIndex + 1, suggestions.length - 1)
            }))
            return
        }

        if (event.key === "ArrowUp") {
            event.preventDefault()
            this.setState(prevState => ({
                ingredientActiveIndex: Math.max(prevState.ingredientActiveIndex - 1, 0)
            }))
            return
        }

        if (event.key === "Escape") {
            this.setState({ showIngredientSuggestions: false, ingredientActiveIndex: -1 })
            return
        }

        if (event.key === "Enter" && this.state.showIngredientSuggestions && this.state.ingredientActiveIndex >= 0) {
            event.preventDefault()
            this.submitIngredientSearch(suggestions[this.state.ingredientActiveIndex])
            return
        }
    }

    handleSubmitIngredientSearch = (event) => {
        event.preventDefault()
        this.submitIngredientSearch(this.state.searchIngredients)
    }

    getNameSuggestions = (query) => {
        const normalizedQuery = String(query || "").trim().toLowerCase()
        if (!normalizedQuery) return []

        const names = Array.isArray(this.state.cocktailNamesList) ? this.state.cocktailNamesList : []
        return names
            .filter((name) => name && name.toLowerCase().includes(normalizedQuery))
            .slice(0, 12)
    }

    submitStringSearch = (value) => {
        const q = String(value || "").trim()
        if (!q) return

        this.props.setSearchType("string", q)
        this.props.history.push(`/results/cocktails/${encodeURIComponent(q)}`)
        this.setState({
            searchString: "",
            nameActiveIndex: -1,
            showNameSuggestions: false
        })
    }

    handleNameInputChange = (event) => {
        const value = event.target.value
        this.setState({
            searchString: value,
            nameActiveIndex: -1,
            showNameSuggestions: true
        })
    }

    handleNameInputFocus = () => {
        this.setState({ showNameSuggestions: true })
    }

    handleNameInputBlur = () => {
        setTimeout(() => {
            this.setState({ showNameSuggestions: false, nameActiveIndex: -1 })
        }, 120)
    }

    handleNameSelect = (cocktailName) => {
        this.submitStringSearch(cocktailName)
    }

    handleNameInputKeyDown = (event) => {
        if (!this.state.cocktailNamesReady) return

        const suggestions = this.getNameSuggestions(this.state.searchString)
        if (!suggestions.length) return

        if (event.key === "ArrowDown") {
            event.preventDefault()
            this.setState((prevState) => ({
                showNameSuggestions: true,
                nameActiveIndex: Math.min(prevState.nameActiveIndex + 1, suggestions.length - 1)
            }))
            return
        }

        if (event.key === "ArrowUp") {
            event.preventDefault()
            this.setState((prevState) => ({
                nameActiveIndex: Math.max(prevState.nameActiveIndex - 1, 0)
            }))
            return
        }

        if (event.key === "Escape") {
            this.setState({ showNameSuggestions: false, nameActiveIndex: -1 })
            return
        }

        if (event.key === "Enter" && this.state.showNameSuggestions && this.state.nameActiveIndex >= 0) {
            event.preventDefault()
            this.submitStringSearch(suggestions[this.state.nameActiveIndex])
        }
    }

    handleSubmitStringSearch = (event) => {
        event.preventDefault()
        this.submitStringSearch(this.state.searchString)
    }

    render() {
        const ingredientSuggestions = this.getIngredientSuggestions(this.state.searchIngredients)
        const showSuggestions = this.state.showIngredientSuggestions && ingredientSuggestions.length > 0
        const activeSuggestion = this.state.ingredientActiveIndex

        const cocktailNamesReady = this.state.cocktailNamesReady
        const nameSuggestions = cocktailNamesReady
            ? this.getNameSuggestions(this.state.searchString)
            : []
        const showNameSuggestionUi =
            cocktailNamesReady &&
            this.state.showNameSuggestions &&
            nameSuggestions.length > 0
        const activeNameSuggestion = this.state.nameActiveIndex

        return (
            <div id="container">

                <WelcomeSplash />

                <LoadOverlay />
                <header>
                    <TopMenu />

                    <div id="search-container">
                        <div className="row">

                            <div className="col s12 l6">

                                <form onSubmit={this.handleSubmitIngredientSearch}>
                                    <div className="col s12">

                                        <div className="ingredient-autocomplete-wrapper col s10">
                                            <div className="input-field">
                                                <input
                                                    type="text"
                                                    name="searchIngredients"
                                                    value={this.state.searchIngredients}
                                                    className="ingredient-autocomplete-input"
                                                    placeholder="Search by ingredients..."
                                                    onChange={this.handleIngredientInputChange}
                                                    onKeyDown={this.handleIngredientInputKeyDown}
                                                    onFocus={this.handleIngredientInputFocus}
                                                    onBlur={this.handleIngredientInputBlur}
                                                    required
                                                    autoComplete="off"
                                                    aria-autocomplete="list"
                                                    aria-expanded={showSuggestions}
                                                    aria-controls="ingredient-suggestions-list"
                                                    aria-activedescendant={activeSuggestion >= 0 ? `ingredient-suggestion-${activeSuggestion}` : undefined}
                                                />
                                                {showSuggestions && (
                                                    <ul id="ingredient-suggestions-list" className="search-autocomplete-suggestions" role="listbox">
                                                        {ingredientSuggestions.map((ingredientName, index) => (
                                                            <li
                                                                id={`ingredient-suggestion-${index}`}
                                                                key={ingredientName}
                                                                role="option"
                                                                aria-selected={activeSuggestion === index}
                                                                className={activeSuggestion === index ? "active" : ""}
                                                                onMouseDown={() => this.handleIngredientSelect(ingredientName)}
                                                            >
                                                                {ingredientName}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>

                                        <div className="button-wrapper col s2">
                                            <button type="submit" className="btn waves-effect waves-light tiny-button">
                                                <i className="material-icons">search</i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="col s12 l6">

                                <form onSubmit={this.handleSubmitStringSearch}>
                                    <div className="col s12">

                                        <div className="cocktail-autocomplete-wrapper col s10">
                                            <div className="input-field">
                                                <input
                                                    type="text"
                                                    name="searchString"
                                                    value={this.state.searchString}
                                                    className="cocktail-autocomplete-input"
                                                    placeholder="Cocktail name..."
                                                    onChange={this.handleNameInputChange}
                                                    onKeyDown={this.handleNameInputKeyDown}
                                                    onFocus={this.handleNameInputFocus}
                                                    onBlur={this.handleNameInputBlur}
                                                    required
                                                    autoComplete="off"
                                                    aria-autocomplete={cocktailNamesReady ? "list" : "none"}
                                                    aria-expanded={showNameSuggestionUi}
                                                    aria-controls={cocktailNamesReady ? "cocktail-suggestions-list" : undefined}
                                                    aria-activedescendant={
                                                        showNameSuggestionUi && activeNameSuggestion >= 0
                                                            ? `cocktail-suggestion-${activeNameSuggestion}`
                                                            : undefined
                                                    }
                                                />
                                                {showNameSuggestionUi && (
                                                    <ul id="cocktail-suggestions-list" className="search-autocomplete-suggestions" role="listbox">
                                                        {nameSuggestions.map((cocktailName, index) => (
                                                            <li
                                                                id={`cocktail-suggestion-${index}`}
                                                                key={cocktailName}
                                                                role="option"
                                                                aria-selected={activeNameSuggestion === index}
                                                                className={activeNameSuggestion === index ? "active" : ""}
                                                                onMouseDown={() => this.handleNameSelect(cocktailName)}
                                                            >
                                                                {cocktailName}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>

                                        <div className="button-wrapper col s2">
                                            <button type="submit" className="btn waves-effect waves-light tiny-button">
                                                <i className="material-icons">search</i>
                                            </button>
                                        </div>
                                    </div>
                                </form>

                            </div>

                        </div>
                    </div>

                </header>

                <Switch>
                    <Route exact path='/' component={PopularList} />
                    <Route exact path='/popular' component={PopularList} />
                    <Route path='/latest' component={RecentList} />
                    <Route path='/non-alcoholic' component={NonAlcoholicList} />
                    <Route path='/cocktail/roulette' component={Roulette} />
                    <Route path='/cocktail/:_id' component={DrinkDetail} />
                    
                    <Route path='/results/cocktails/:_id' component={SearchResultsStr} />
                    <Route path='/results/ingredients/:_id' component={SearchResultsIng} />
                </Switch>

                <footer className="site-footer" role="contentinfo">
                    <div className="site-footer__inner container">
                        <div className="site-footer__mark">Yummy Wakame</div>
                        <p className="site-footer__tagline">Design &amp; development</p>
                        <p className="site-footer__copyright">
                            © {new Date().getFullYear()}{' '}
                            <a
                                className="site-footer__credit-link"
                                href="https://yummy-wakame.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Yummy Wakame
                            </a>
                            {' & '}
                            <a
                                className="site-footer__credit-link"
                                href="https://www.thecocktaildb.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                TheCocktailDB
                            </a>
                            . All rights reserved.
                        </p>
                    </div>
                </footer>

            </div>
        )
    }
}

export default withRouter(withListData(App))