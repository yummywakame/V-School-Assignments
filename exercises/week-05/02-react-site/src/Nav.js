import React from 'react'
import { ToggleMenu } from './MenuToggle.js'

function Nav() {
    return (
        <nav>
            <div id="hamburger" onClick={ ( ) => ToggleMenu('menu') }>
                <p className="burger-title">Emily Chadwick</p>
            </div>
            <ul id="menu">
                <li><a href="./index.html">Home</a></li>
                <li><a href="./abandoned.html">Abandoned</a></li>
                <li><a href="./architecture.html">Architecture</a></li>
                <li><a href="./portraits.html">Portraits</a></li>
                <li><a href="./spirals.html">Spirals</a></li>
                <li><a href="./tunnels.html">Tunnels</a></li>
                <li><a href="./contact.html">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav