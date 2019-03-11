import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import BigDataProvider from './context/BigDataProvider.js'
import ThemeProvider from './context/ThemeProvider.js'

ReactDOM.render(
    <ThemeProvider>
        <BrowserRouter>
            <BigDataProvider>
                <App />
            </BigDataProvider>
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root'))