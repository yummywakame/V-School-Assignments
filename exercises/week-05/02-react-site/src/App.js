import React from 'react'
import './style.css'
import LoadOverlay from './LoadOverlay.js'
import Nav from './Nav.js'
import Header from './Header.js'
import HomePage from './HomePage.js'
import Footer from './Footer.js'


function App() {
    return (
              
        <div>
            <LoadOverlay />
            <Nav />
            <Header />
            <HomePage />
            <Footer />
        </div>
    )
}

export default App