import React, { Component } from 'react'
import LoadOverlay from './components/LoadOverlay.js'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {

    }

    handleChange = (event) => {

    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    render() {

        return (
            <div id="container">
                <LoadOverlay />

                <ul role="navigation" className="tabs">
                    <li className="tab"><a className="pink-text" href="./recent">Most Recent</a></li>
                    <li className="tab"><a className="pink-text" href="./roulette">Roulette</a></li>
                    <li className="tab"><a className="pink-text" href="./non-alcoholic">Non-Alcoholic</a></li>
                    <li className="tab"><a className="pink-text" href="./about">About</a></li>
                </ul>
                
                <div id="search-container">
                    <div className="row">
                        <form>
                            <div className="select-wrapper">
                                <div className="input-field col s12 m6">
                                    <select autofocus="autofocus" required="required" size="3">
                                        <option value ="vodka">Vodka</option>
                                        <option value ="whiskey">Whiskey</option>
                                        <option value ="rum" selected>Rum</option>
                                        <option value ="vermouth">Vermouth</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                

                <h1>Most Recent Cocktails</h1>
                <blockquote>
                    This is an example quotation that uses the blockquote tag.
                </blockquote>
            </div>
        )
    }
}

export default App