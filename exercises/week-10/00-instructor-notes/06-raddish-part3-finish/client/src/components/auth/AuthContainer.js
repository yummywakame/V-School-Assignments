import React from 'react'
import { useToggle, useFormProperties } from '../../shared/hooks'
import AuthForm from './AuthForm.js'

const AuthContainer = props => {
    const initInputs = { username: "", password: "" }

    const submit = () => {

    }

    const {handleChange, handleSubmit, inputs} = useFormProperties(initInputs, submit)

    return (
        <div>
            <AuthForm 
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                inputs={inputs}
            />
        </div>
    )
}

export default AuthContainer