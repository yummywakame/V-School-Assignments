import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import './style.css'

ReactDOM.render(<App isAuthenticated={true} age={25} />, document.getElementById('root'))