import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router';
import LoadOverlay from './components/LoadOverlay.js'
import WelcomeSplash from './components/WelcomeSplash.js'
import { Input, Button } from 'react-materialize'
import { withListData } from './context/BigDataProvider.js'
import Menu from './components/Menu.js'
import PopularList from './components/PopularList.js'
import RecentList from './components/RecentList.js'
import NonAlcoholicList from './components/NonAlcoholicList.js'
import DrinkDetail from './components/DrinkDetail.js'
import SearchResults from './components/SearchResults.js'

// Stylesheets
import './materialize.css'
import './styles.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            welcomeHidden: false,
            searchIngredient: '',
            searchInput: ''
        }
    }

    componentDidMount() {
        // get only the data for components specified in componentList
        this.props.getListData()

        // show welcome message div for 3 seconds
        setTimeout(() => { this.hideWelcomeMessage() }, 0)
    }

    componentWillUnmount() {

    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmitIngredient = (event) => {
        event.preventDefault()
        console.log("this.state.searchIngredient")
        console.log(this.state.searchIngredient)
        // submit the query to the db
        this.props.setSearchType("ingredient", this.state.searchIngredient)

        // Redirect to the Search Results component
        this.props.history.push(`/results/${this.state.searchIngredient}`)

        // Reset the form input values for the user
        this.setState({
            searchIngredient: ''
        })
    }

    handleSubmitSearch = (event) => {
        event.preventDefault()

        // submit the query to the db here later

        // Reset the form input values for the user
        this.setState({
            searchInput: ''
        })
    }

    hideWelcomeMessage = () => {
        this.setState({
            welcomeHidden: true
        })
    }

    render() {

        return (
            <div id="container">

                <WelcomeSplash welcomeHidden={this.state.welcomeHidden} />

                <LoadOverlay />

                <header>
                    {/* <Menu setComponentList={() => this.props.setComponentList()} /> */}
                    <Menu />

                    <div id="search-container">
                        <div className="row">

                            <div className="col s12 m6">

                                <form onSubmit={this.handleSubmitIngredient}>
                                    <div className="col s12">

                                        <div className="select-wrapper col s10">
                                            <div className="input-field">
                                                <Input s={12} type='select' name="searchIngredient" value={this.state.searchIngredient} onChange={this.handleChange} required >
                                                    <option value=''>Search by ingredient...</option>
                                                    {this.props.ingredientsList.map((item, key) =>
                                                        <option key={key} value={item.strIngredient1.split(' ').join('_')}>{item.strIngredient1}</option>
                                                    )}
                                                </Input>
                                            </div>
                                        </div>

                                        <div className="button-wrapper col s2">
                                            <Button waves='light' className="pink" icon='search'></Button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="col s12 m6">

                                <form onSubmit={this.handleSubmitSearch}>
                                    <div className="col s12">

                                        <div className="search-wrapper col s10">
                                            <div className="input-field">
                                                <Input s={12} type="text" name="searchInput" value={this.state.searchInput} placeholder="Cocktail name..." onChange={this.handleChange} required />
                                            </div>
                                        </div>

                                        <div className="button-wrapper col s2">
                                            <Button waves='light' className="pink" icon='search'></Button>
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
                    <Route path='/cocktail/:_id' component={DrinkDetail} />
                    <Route path='/results/:_id' component={SearchResults} />
                </Switch>

            </div>
        )
    }
}

export default withRouter(withListData(App))