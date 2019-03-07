import React, { Component } from 'react'
import LoadOverlay from './components/LoadOverlay.js'
import { Input, Button } from 'react-materialize'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchIngredient: '',
            searchInput: ''
        }
    }

    componentDidMount() {

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
            searchIngredient: '',
            searchInput: ''
        })
    }

    handleSubmitSearch = (event) => {
        event.preventDefault()

        // submit the query to the db here later

        // Reset the form input values for the user
        this.setState({
            searchIngredient: '',
            searchInput: ''
        })
    }

    render() {

        return (
            <div id="container">

                <LoadOverlay />

                <header>
                    <ul role="navigation" className="tabs">
                        <li className="tab"><a className="pink-text" href="./home">Popular</a></li>
                        <li className="tab"><a className="pink-text" href="./latest">Latest</a></li>
                        <li className="tab"><a className="pink-text" href="./roulette">Roulette</a></li>
                        <li className="tab"><a className="pink-text" href="./non-alcoholic">Non-Alcoholic</a></li>
                        <li className="tab"><a className="pink-text" href="./about">About</a></li>
                    </ul>

                    <div id="search-container">
                        <div className="row">

                            <div className="col s12 m6">

                                <form onSubmit={this.handleSubmitIngredient}>
                                    <div className="col s12">

                                        <div className="select-wrapper col s10">
                                            <div className="input-field">
                                                <Input s={12} type='select' name="searchIngredient" value={this.state.searchIngredient} onChange={this.handleChange} required >
                                                    <option value=''>Search by ingredient...</option>
                                                    <option value='vodka'>Vodka</option>
                                                    <option value='gin'>Gin</option>
                                                    <option value='rum'>Rum</option>
                                                    <option value='tequila'>Tequila</option>
                                                    <option value='whiskey'>Whiskey</option>
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

                <main className="container">

                    <h1>Popular Cocktails</h1>
                    <div id="drink-list" className="row">


                        <div className="col s12 m6 l4">
                            <div className="card waves-effect black">
                                <div className="card-image">
                                    <img src="https://www.thecocktaildb.com/images/media/drink/rxtqps1478251029.jpg" alt="" />
                                </div>
                                <div className="card-content">
                                    <h2>Mojito</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m6 l4">
                            <div className="card waves-effect black">
                                <div className="card-image">
                                    <img src="https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg" alt="" />
                                </div>
                                <div className="card-content">
                                    <h2>Old Fashioned</h2>
                                </div>
                            </div></div>

                        <div className="col s12 m6 l4">
                            <div className="card waves-effect black">
                                <div className="card-image">
                                    <img src="https://www.thecocktaildb.com/images/media/drink/ywxwqs1439906072.jpg" alt="" />
                                </div>
                                <div className="card-content">
                                    <h2>Long Island Tea</h2>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m6 l4">
                            <div className="card waves-effect black">
                                <div className="card-image">
                                    <img src="https://www.thecocktaildb.com/images/media/drink/tutwwv1439907127.jpg" alt="" />
                                </div>
                                <div className="card-content">
                                    <h2>Negroni</h2>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m6 l4">
                            <div className="card waves-effect black">
                                <div className="card-image">
                                    <img src="https://www.thecocktaildb.com/images/media/drink/o56h041504352725.jpg" alt="" />
                                </div>
                                <div className="card-content">
                                    <h2>Whiskey Sour</h2>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m6 l4">
                            <div className="card waves-effect black">
                                <div className="card-image">
                                    <img src="https://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg" alt="" />
                                </div>
                                <div className="card-content">
                                    <h2>Dry Martini</h2>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m6 l4">
                            <div className="card waves-effect black">
                                <div className="card-image">
                                    <img src="https://www.thecocktaildb.com/images/media/drink/usuuur1439906797.jpg" alt="" />
                                </div>
                                <div className="card-content">
                                    <h2>Daiquiri</h2>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m6 l4">
                            <div className="card waves-effect black">
                                <div className="card-image">
                                    <img src="https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg" alt="" />
                                </div>
                                <div className="card-content">
                                    <h2>Margarita</h2>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m6 l4">
                            <div className="card waves-effect black">
                                <div className="card-image">
                                    <img src="https://www.thecocktaildb.com/images/media/drink/ec2jtz1504350429.jpg" alt="" />
                                </div>
                                <div className="card-content">
                                    <h2>Manhattan</h2>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m6 l4">
                            <div className="card waves-effect black">
                                <div className="card-image">
                                    <img src="https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg" alt="" />
                                </div>
                                <div className="card-content">
                                    <h2>Moscow Mule</h2>
                                </div>
                            </div>
                        </div>

                    </div>

                </main>

                <main className="container">

                    <h1>Mojito</h1>
                    <div id="drink-detail">

                        <div className="row">

                            <div className="col s12 m12 l6 pink">
                                image
                            </div>
                            <div className="col s12 m12 l6 black">
                                ingredients
                            </div>

                        </div>

                    </div>
                </main>

            </div>
        )
    }
}

export default App