import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import './styles.css'
// install: npm install react-router-dom
// we will use 'browser router' to wrap around the components we need the router functionality for
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))