import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withListData } from '../context/BigDataProvider.js'

class Menu extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }

    render() {
        const { setComponentList, getCocktailDetails } = this.props

        return (
            <div role="navigation" className="tabs">
                <li className="tab" id="logo"><Link className="pink-text" to="/" onClick={() => setComponentList(["popular"])}><div></div></Link></li>
                <li className="tab"><Link className="pink-text" to="/popular" onClick={() => setComponentList(["popular"])}>Popular</Link></li>
                <li className="tab"><Link className="pink-text" to="/latest" onClick={() => setComponentList(["recent"])}>Latest</Link></li>
                <li className="tab"><Link className="pink-text" to="/non-alcoholic" onClick={() => setComponentList(["nonalcoholic"])}>Non-Alcoholic</Link></li>
                <li className="tab" onClick={() => { getCocktailDetails("cocktail", 0) }} ><a className="pink-text" href={() => () => {}}>Roulette</a></li>
                {/* <li className="tab"><Link className="pink-text" to="/roulette/:_id" onClick={() => getCocktailDetails("cocktail", 0)}>Roulette</Link></li> */}
                {/* <li className="tab"><Link className="pink-text" to="./about">About</Link></li> */}
            </div>
        )
    }
}

export default withListData(Menu)