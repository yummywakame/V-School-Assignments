import React from 'react'
import Nav from './Nav.js'

const Header = () => {

    return (
        <div className="top-header">
            <header>
                <h1><span className="no-display">HandyMan Services</span></h1>
                <Nav />
            </header>
        </div>
    )
}

export default Header