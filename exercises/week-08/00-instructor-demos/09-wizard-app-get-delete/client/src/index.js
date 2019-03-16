import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import WizardProvider from './context/WizardProvider.js'

ReactDOM.render(
    <WizardProvider>
        <App />
    </WizardProvider>, 
document.getElementById('root'))