import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import ThingProvider from './context/ThingProvider.js'
import './styles.css'
import ThemeProvider from './context/ThemeProvider.js';

ReactDOM.render(
    <ThemeProvider>
        <ThingProvider>
            <App />
        </ThingProvider>
    </ThemeProvider>, 
document.getElementById('root'))