import React from 'react'
import { useToggle, useFormProperties } from './custom-hooks'

// 1 Custom hook for toggles
// 2 Custom hook for Text Forms

const App = () => {
    const {toggle, toggler} = useToggle(true)
    const {toggle: toggle2, toggler: toggler2} = useToggle(false)
    // Declare initial inputs to give to our useFormProperties function(hook)
    const initialInputs = {firstName: "", lastName: "", age: ""}
    // Declare what the callback function for our handleSubmit should do
    const alertName = (inputs) => {
        alert(inputs.firstName + " " + inputs.lastName + " and I am " + inputs.age)
    }
    // Pass our initial inputs into our hook, and get back all form functionality
    // with our inputs and function wired in
    const {inputs, handleChange, handleSubmit } = useFormProperties(initialInputs, alertName)
    
    return(
        <div>
            <div>
            <h1>The Toggle is {toggle ? "On" : "Off" }</h1>
            <button onClick={toggler}>Toggler</button>
            <h1>The Toggle is {toggle2 ? "On" : "Off" }</h1>
            <button onClick={toggler2}>Toggler</button>
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="firstName" 
                        value={inputs.firstName} 
                        onChange={handleChange} 
                        placeholder="First Name"/>
                    <input 
                        type="text" 
                        name="lastName" 
                        value={inputs.lastName} 
                        onChange={handleChange} 
                        placeholder="Last Name"/>
                    <input 
                        type="text" 
                        name="age" 
                        value={inputs.age} 
                        onChange={handleChange} 
                        placeholder="Age"/>
                    <button>Submit Name</button>
                </form>
            </div>
        </div>
    )
}

export default App