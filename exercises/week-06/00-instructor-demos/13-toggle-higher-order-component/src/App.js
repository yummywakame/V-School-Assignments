import React from 'react'
import {withToggler} from './components/Toggle.js'

const App = (props) => {

        return (
            <div id="container">
                {(props.isToggled)
                    ? <div>Here is one thing</div>
                    : <div>Here is the other thing</div>
                }
                <button onClick={props.toggler}>Toggle Me</button>
            </div>
        )
    
}

export default withToggler(App)