import React from 'react'

const AuthForm = props => {
    const { handleChange, handleSubmit, inputs: { username, password }} = props
    return (
        <form onSubmit={handleSubmit}>
            <h1>{props.formTitle}</h1>
            <input 
                type="text" 
                onChange={handleChange} 
                value={username} 
                name="username" 
                placeholder="Username"/>
            <input 
                type="password" 
                onChange={handleChange} 
                value={password} 
                name="password" 
                placeholder="Password"/>
            <button>{props.formTitle}</button>
            <span onClick={props.toggler}>Click here to {props.formTitle === "Sign Up" ? "Login" : "Sign Up"}</span>
        </form>
    )
}

export default AuthForm