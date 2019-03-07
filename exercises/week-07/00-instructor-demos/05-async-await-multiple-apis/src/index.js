import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import BigDataProvider from './BigDataProvider.js'

ReactDOM.render(
    <BigDataProvider>
        <App />
    </BigDataProvider>, 
document.getElementById('root'))