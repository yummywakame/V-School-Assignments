import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import ToDoProvider from './context/ToDoProvider.js'


ReactDOM.render(<ToDoProvider><App /></ToDoProvider>, document.getElementById('root'))