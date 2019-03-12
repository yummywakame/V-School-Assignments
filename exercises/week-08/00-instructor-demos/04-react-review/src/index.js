import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import CharacterProvider from './context/CharacterProvider.js'

ReactDOM.render(
    <BrowserRouter>
        <CharacterProvider>
            <App />
        </CharacterProvider>
    </BrowserRouter>, 
document.getElementById('root'))