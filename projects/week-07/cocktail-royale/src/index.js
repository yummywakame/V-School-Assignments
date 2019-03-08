import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import BigDataProvider from './context/BigDataProvider.js'
import './styles.css'

ReactDOM.render(
    <BigDataProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </BigDataProvider>,
    document.getElementById('root'))