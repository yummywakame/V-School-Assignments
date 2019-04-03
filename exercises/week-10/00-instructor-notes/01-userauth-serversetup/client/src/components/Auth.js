import React, { Component } from 'react'
import AuthForm from './AuthForm.js'

class Auth extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            password: "",
            formToggle: false
        }
    }

    toggleForm = () => {
        this.setState(prevState => ({ formToggle: !prevState.formToggle }))
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLoginSubmit = e => {
        e.preventDefault()


        this.setState({
            username: "",
            password: ""
        })
    }
    
    handleSignupSubmit = e => {
        e.preventDefault()


        this.setState({
            username: "",
            password: ""
        })
    }

    render(){
        return (
            <div>
                {this.state.formToggle ?
                <>
                    <h1>Sign Up</h1>
                    <AuthForm 
                        username={this.state.username}
                        password={this.state.password}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSignupSubmit}
                        btnText="Sign Up"    
                    />
                    <p onClick={this.toggleForm}>Already a User?</p>
                </>
                :
                <>
                    <h1>Login</h1>
                    <AuthForm 
                        username={this.state.username}
                        password={this.state.password}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleLoginSubmit}
                        btnText="Login"    
                    />
                    <p onClick={this.toggleForm}>Not a User yet?</p>
                </>
                }
            </div>
        )
    }
}

export default Auth