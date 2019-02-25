import React from 'react'
import Display from './Display.js'

// Dynamic Rendering
const App = (props) => {
    let elementToShow
    switch (props.age) {
        case 25:
            elementToShow = <h1>You are 25</h1>
            break;
        case 30:
            elementToShow = <h1>You are 30</h1>
            break;
        default:
            elementToShow = <h1>I do not know your age</h1>
    }
    return (
        <div className="container">
            <Display greeting="Hello" />
            {elementToShow}
            {props.isAuthenticated && <button>Log Out</button>}
        </div>
    )
}

export default App