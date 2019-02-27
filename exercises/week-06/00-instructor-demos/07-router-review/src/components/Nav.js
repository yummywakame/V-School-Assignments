import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/services">Services</Link>
        </div>
    )
}

export default Nav