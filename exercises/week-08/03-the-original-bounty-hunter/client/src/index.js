import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import BountyProvider from './context/BountyProvider.js'
import './style.css'

ReactDOM.render(<BountyProvider><App /></BountyProvider>, document.getElementById('root'))