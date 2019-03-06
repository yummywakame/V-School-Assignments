import React from 'react'
import { Link } from 'react-router-dom'

const Nav = props => {
    const { navToggle, toggler } = props
    return (
        <div onClick={toggler} className={`nav nav-${navToggle ? "open" : "closed" }`}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default Nav