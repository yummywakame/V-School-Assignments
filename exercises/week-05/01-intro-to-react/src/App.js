import React from 'react'
import HelloWorld from './HelloWorld.js'
import Nav from './Nav.js'
import './style.css'

function App() {
    return (
              
        <div className="flex-container">
            <Nav />
            <HelloWorld />
            <p>Goodbye World</p>
        </div>
    )
}

export default App