import React from 'react'
import ReactDOM from 'react-dom'
import App from './ex-2/App.js'
import { BrowserRouter } from 'react-router-dom'
import './style.css'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
document.getElementById('root'))
