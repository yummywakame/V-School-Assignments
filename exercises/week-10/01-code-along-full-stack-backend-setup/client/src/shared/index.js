import { useState } from 'react'

/** This takes a boolean and returns Toggle functionality
 * @function useToggle
 * @param {Boolean} - starting toggle boolean
 * @returns {Boolean Function}
 */
export const useToggle = (initToggle) => {
    const [toggle, setToggle] = useState(initToggle)
    const toggler = () => { setToggle(!toggle) }
    return { toggle, toggler }
}

/** Creates Form Functionality
 * @param {*} initInputs Object
 * @param {*} submitCallback Function
 * @returns {*} function, function, object
 */

export const useFormProperties = (initInputs, submitCallback) => {
    const [inputs, setInputs] = useState(initInputs)
    
    const handleChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: [event.target.value]
        })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        submitCallback(inputs)
        setInputs(initInputs)
    
    }
    return { handleChange, handleSubmit, inputs }
}

