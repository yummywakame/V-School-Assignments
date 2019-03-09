import React from 'react'
import { Link } from 'react-router-dom'
import { withListData } from '../context/BigDataProvider.js'
import Logo from '../gfx/cocktail-royale-logo.png'

// Hides the contents until the stylesheet has loaded
// Sets background colour to theme saved in localStorage
const Menu = (props) => {
    // console.log("menu:")
    // console.log(props)

    return (
            <div role="navigation" className="tabs">
                <li className="tab"><Link className="pink-text" to="/" onClick={() => props.setComponentList(["popular"])}>Popular</Link></li>
                <li className="tab"><Link className="pink-text" to="/latest" onClick={() => props.setComponentList(["recent"])}>Latest</Link></li>
                <li className="tab"><Link className="pink-text" to="/non-alcoholic" onClick={() => props.setComponentList(["nonalcoholic"])}>Non-Alcoholic</Link></li>
                {/* <li className="tab"><Link className="pink-text" to="./roulette">Roulette</Link></li>
                <li className="tab"><Link className="pink-text" to="./about">About</Link></li> */}
            </div>
    )
}

export default withListData(Menu)