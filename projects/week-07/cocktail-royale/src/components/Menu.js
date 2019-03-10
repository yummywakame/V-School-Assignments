import React from 'react'
import { Link } from 'react-router-dom'
import { withListData } from '../context/BigDataProvider.js'

// Hides the contents until the stylesheet has loaded
// Sets background colour to theme saved in localStorage
const Menu = (props) => {

    const cocktailId = () => {
    
    }

    return (
            <div role="navigation" className="tabs">
                <li className="tab" id="logo"><Link className="pink-text" to="/" onClick={() => props.setComponentList(["popular"])}><div></div></Link></li>
                <li className="tab"><Link className="pink-text" to="/popular" onClick={() => props.setComponentList(["popular"])}>Popular</Link></li>
                <li className="tab"><Link className="pink-text" to="/latest" onClick={() => props.setComponentList(["recent"])}>Latest</Link></li>
                <li className="tab"><Link className="pink-text" to="/non-alcoholic" onClick={() => props.setComponentList(["nonalcoholic"])}>Non-Alcoholic</Link></li>
                <li className="tab"><Link className="pink-text" to="/roulette" onClick={() => {
                this.props.getCocktailDetails("cocktail", cocktailId)}}>Roulette</Link></li>
                {/* <li className="tab"><Link className="pink-text" to="./about">About</Link></li> */}
            </div>
    )
}

export default withListData(Menu)