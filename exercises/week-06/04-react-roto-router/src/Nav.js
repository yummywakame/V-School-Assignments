import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>|</li>
                <li><Link to="/services">Services</Link></li>
                <li>|</li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </nav>
    )
}

export default Nav