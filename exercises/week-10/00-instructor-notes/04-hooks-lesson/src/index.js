import React from 'react'
import ReactDOM from 'react-dom'

// Example 1
// import App from './1-use-state-examples/App.js'

// Example 2
// import App from './2-use-effect-examples/App.js'

// Example 3
// import App from './3-use-context-example/App.js'
import DataProvider from './3-use-context-example/context/DataProvider.js'

// Example 4
import App from './4-use-custom-hooks/App.js'

ReactDOM.render(
    <DataProvider>
        <App />
    </DataProvider>, 
document.getElementById('root'))