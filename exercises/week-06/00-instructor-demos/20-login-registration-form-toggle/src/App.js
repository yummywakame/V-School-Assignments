import React from 'react'
import AuthForm from '.AuthForm.js'

const App = () => {

    return (
        <div className="container">
        
        {/* Nested toggles must have props renamed so they do not conflict */}
        <Toggle render={({isToggled, toggler}) => 
            <Toggle render={({isToggled: fanIsToggled, toggler: fanToggler}) =>
            <>
                <h1>The Light Is {isToggled ? "On" : "Off"}</h1>
                <button onClick={toggler}>Turn {isToggled ? "Off" : "On"} Light</button>
                
                <h1>The Light Is {fanIsToggled ? "On" : "Off"}</h1>
                <button onClick={fanToggler}>Turn {fanIsToggled ? "Off" : "On"} Light</button>
            </>            
            }/>

        }/>
        
        {/* Single Toggle */}
        <Toggle render={({isToggled, toggler}) => 
            <>
                <h1>The Light Is {isToggled ? "On" : "Off"}</h1>
                <button onClick={toggler}>Turn {isToggled ? "Off" : "On"} Light</button>
            </>
        }/>
        </div>
    )
}

export default App