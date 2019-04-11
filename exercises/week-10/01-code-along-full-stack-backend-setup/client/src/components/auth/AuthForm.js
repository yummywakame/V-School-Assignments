import React from 'react'

const AuthForm = (props) => {
    const { handleSubmit, handleChange, btnText, username, password } = props

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="username" 
                onChange={handleChange} 
                value={username} 
                placeholder="Username" 
                required />
            <input 
                type="password" 
                name="password" 
                onChange={handleChange} 
                value={password} 
                placeholder="Password" 
                required />
            <button>{btnText}</button>
        </form>
    )

}

export default AuthForm