import React from 'react'
import { Link } from 'react-router-dom'
import { withListData } from '../context/BigDataProvider.js'

// Hides the contents until the stylesheet has loaded
// Sets background colour to theme saved in localStorage
const Menu = (props) => {
    console.log("menu:")
    console.log(props)
    
    return (
        <ul role="navigation" className="tabs">
            <li className="tab"><Link className="pink-text" to="/" onClick={() => props.setComponentList(["ingredients", "popular"])}>Popular</Link></li>
            <li className="tab"><Link className="pink-text" to="/latest" onClick={() => props.setComponentList(["ingredients", "recent"])}>Latest</Link></li>
            {/* <li className="tab"><Link className="pink-text" to="./roulette">Roulette</Link></li>
            <li className="tab"><Link className="pink-text" to="./non-alcoholic">Non-Alcoholic</Link></li>
            <li className="tab"><Link className="pink-text" to="./about">About</Link></li> */}
        </ul>
    )
}

export default withListData(Menu)