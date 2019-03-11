import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withListData } from '../context/BigDataProvider.js'

class Menu extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state = {
            // randomCocktailID: props.match.params._id || ''
        }
    }

    // getRandomCocktailArrayId = () => {
    //     return Math.floor(Math.random() * (92 + 1))
    // }

    render() {
        const { setComponentList, getRandomCocktailDetails } = this.props

        return (
            <div role="navigation" className="tabs">
                <li className="tab" id="logo"><Link to="/" onClick={() => setComponentList(["popular"])}><div></div></Link></li>
                <li className="tab"><Link className="pink-text" to="/popular" onClick={() => setComponentList(["popular"])}>Popular</Link></li>
                <li className="tab"><Link className="pink-text" to="/latest" onClick={() => setComponentList(["recent"])}>Latest</Link></li>
                <li className="tab"><Link className="pink-text" to="/non-alcoholic" onClick={() => setComponentList(["nonalcoholic"])}>Non-Alcoholic</Link></li>
                <li className="tab"><Link className="pink-text" to="/cocktail/roulette" onClick={() => getRandomCocktailDetails()}>Roulette</Link></li>
            </div>
        )
    }
}

export default withListData(Menu)