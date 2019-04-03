import { useState } from 'react'

/** This function takes a boolean and returns toggle functionality
 * @function useToggle
 * @param {Boolean} - Starting toggle point
 * @returns {Boolean, Function}
 */
export const useToggle = startingToggle => {
    const [toggle, setToggle] = useState(startingToggle)
    const toggler = () => setToggle(!toggle)
    return { toggle, toggler }
}


/** This function takes inputs and a callback, and returns all form functionality
 * @function useFormProperties
 * @param {Object} - The Inital Inputs
 * @param {Function} - What the submit function should do
 * @returns {Function, Function, {Object}}
 */
export const useFormProperties = (initInputs, callback) => {
    const [inputs, setInputs] = useState(initInputs)

    const handleChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        callback(inputs)
        setInputs(initInputs)
    }
    return { handleChange, handleSubmit, inputs }
}
