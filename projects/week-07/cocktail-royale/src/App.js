import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import LoadOverlay from './components/LoadOverlay.js'
import { Input, Button } from 'react-materialize'
import { withListData } from './context/BigDataProvider.js'
import Menu from './components/Menu.js'
import PopularList from './components/PopularList.js'
import RecentList from './components/RecentList.js'
import NonAlcoholicList from './components/NonAlcoholicList.js'
import DrinkDetail from './components/DrinkDetail.js'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchIngredient: '',
            searchInput: ''
        }
    }

    componentDidMount() {
        // get only the data for components specified in componentList
        this.props.getListData()
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

    render() {
        console.log("App.js props")
        console.log(this.props)
        return (
            <div id="container">

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
                    <Route path='/latest' component={RecentList} />
                    <Route path='/non-alcoholic' component={NonAlcoholicList} />
                    <Route path='/cocktail/:_id' component={DrinkDetail} />
                </Switch>

                <main className="container">

                    <h1 className="glow">Mojito</h1>
                    <div id="drink-detail">

                        <div className="row">

                            <div className="col s12 m12 l6">
                                <div className="main-image">
                                    <img src="https://www.thecocktaildb.com/images/media/drink/rxtqps1478251029.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col s12 m12 l6">
                                <h2 className="textshadow">Ingredients</h2>

                                <div id="ingredients" className="row">

                                    <div className="col s4">
                                        <img src="https://www.thecocktaildb.com/images/ingredients/Light%20rum-Medium.png" alt="" />
                                        <p>2-3 oz Light rum</p>
                                    </div>

                                    <div className="col s4">
                                        <img src="https://www.thecocktaildb.com/images/ingredients/Lime-Medium.png" alt="" />
                                        <p>Juice of 1 lime</p>
                                    </div>

                                    <div className="col s4">
                                        <img src="https://www.thecocktaildb.com/images/ingredients/Sugar-Medium.png" alt="" />
                                        <p>2 tsp sugar</p>
                                    </div>

                                    <div className="col s4">
                                        <img src="https://www.thecocktaildb.com/images/ingredients/Mint-Medium.png" alt="" />
                                        <p>2 - 4 mint</p>
                                    </div>

                                    <div className="col s4">
                                        <img src="https://www.thecocktaildb.com/images/ingredients/Soda%20water-Medium.png" alt="" />
                                        <p>Soda water</p>
                                    </div>

                                </div>


                            </div>

                        </div>

                        <div className="row">
                            <div className="col s12">
                                <div id="instructions" className="card">
                                    <div className="card-content white-text">
                                        <h2>Instructions</h2>
                                        <p>Muddle mint leaves with sugar and lime juice.
                                        Add a splash of soda water and fill the glass with cracked ice.
                                        Pour the rum and top with soda water.
                                    Garnish and serve with straw.</p>

                                        <h2>Glass</h2>
                                        <p>Serve: Highball glass</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>

            </div>
        )
    }
}

export default withListData(App)