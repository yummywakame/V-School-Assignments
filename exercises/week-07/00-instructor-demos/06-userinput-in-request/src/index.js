import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import BreweryProvider from './context/BreweryProvider.js'

ReactDOM.render(
    <BreweryProvider>
        <App />
    </BreweryProvider>, 
document.getElementById('root'))