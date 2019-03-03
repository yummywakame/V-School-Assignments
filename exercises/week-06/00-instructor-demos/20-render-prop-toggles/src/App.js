import React from 'react'
import Toggle from './shared/Toggle.js'

const App = (props) => {
    return (
        <div>
            {/* Nested Toggles must have props renamed so they do not conflict */}
            <Toggle render={({isToggled, toggler}) => 
                <Toggle render={({isToggled: fanIsToggled, toggler: fanToggler}) => 
                    <>
                        <h1>The light is {isToggled ? "On" : "Off"}</h1>
                        <button onClick={toggler}>Turn {isToggled ? "Off" : "On"} light</button>
                        <h1>The fan is {fanIsToggled ? "On" : "Off"}</h1>
                        <button onClick={fanToggler}>Turn {fanIsToggled? "Off" : "On"} fan</button>
                    </>
                }/>
            }/>
            
            {/* Single Toggle */}
            <Toggle render={({isToggled, toggler}) => 
                <>
                    <h1>The light is {isToggled ? "On" : "Off"}</h1>
                    <button onClick={toggler}>Turn {isToggled ? "Off" : "On"} light</button>
                </>
            }/>
        </div>
    )
}

export default App



