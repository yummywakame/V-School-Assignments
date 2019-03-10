import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import BigDataProvider from './context/BigDataProvider.js'

ReactDOM.render(
    <BrowserRouter>
        <BigDataProvider>
            <App />
        </BigDataProvider>
    </BrowserRouter>,
    document.getElementById('root'))