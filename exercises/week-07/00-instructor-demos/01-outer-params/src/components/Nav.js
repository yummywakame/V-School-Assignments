import React from 'react'
import { Link } from 'react-router-dom'

const Nav = props => {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/todolist">Todo List</Link>
        </div>
    )
}

export default Nav