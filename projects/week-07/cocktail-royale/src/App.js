import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import LoadOverlay from './components/LoadOverlay.js'
import WelcomeSplash from './components/WelcomeSplash.js'
import { Input, Button } from 'react-materialize'
import { withListData } from './context/BigDataProvider.js'
import Menu from './components/Menu.js'
import PopularList from './components/PopularList.js'
import RecentList from './components/RecentList.js'
import NonAlcoholicList from './components/NonAlcoholicList.js'
import DrinkDetail from './components/DrinkDetail.js'

// Stylesheets
import './materialize.css'
import './styles.css'

// Avoid FOUC (Flash of Unstyled Content) using asyncRoute:
// and import page components through it
// import asyncRoute from './context/asyncRoute.js'
// const PopularList = asyncRoute(() => import('./components/PopularList.js'))
// const RecentList = asyncRoute(() => import('./components/RecentList.js'))
// const NonAlcoholicList = asyncRoute(() => import('./components/NonAlcoholicList.js'))
// const DrinkDetail = asyncRoute(() => import('./components/DrinkDetail.js'))

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchIngredient: '',
            searchInput: '',
            welcomeHidden: false
        }
    }

    componentDidMount() {
        // get only the data for components specified in componentList
        this.props.getListData()
        
        // show welcome message div for 3 seconds
        setTimeout(() => { this.hideWelcomeMessage() }, 5000)
    }

    componentWillUnmount() {

    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmitIngredient = (event) => {
        event.preventDefault()

        // submit the query to the db here later

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
        // console.log("App.js props")
        // console.log(this.props)

        return (
            <div id="container">


                <WelcomeSplash welcomeHidden={this.state.welcomeHidden} />

                <LoadOverlay />

                <header>
                    <Menu setComponentList={() => this.props.setComponentList()} />

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
                </Switch>

            </div>
        )
    }
}

export default withListData(App)