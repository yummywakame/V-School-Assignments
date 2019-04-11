import React, { Component } from 'react'
import AuthForm from './AuthForm'
import { withUser } from '../../context/UserProvider.js'

class AuthContainer extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            authToggle: false
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // handleSubmit for our signup form
    handleSignup = (event) => {
        event.preventDefault()
        const credentials = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.signup(credentials)
    } 
    
    // handleSubmit for our login form
    handleLogin = (event) => {
        event.preventDefault()
        const credentials = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.login(credentials)
    }
    
    toggler = () => {
        this.setState(prevState=> ({
            authToggle: !prevState.authToggle
        }))
    }

    render() {
        return (
            <div>
                { this.state.authToggle
                ?
                <>
                    <h3>Sign up</h3>
                    <AuthForm
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSignup}
                        username={this.state.username}
                        password={this.state.password}
                        btnText="Sign up"
                    />
                    <p onClick={this.toggler}>Are you already a member?</p>
                </>
                :
                <>
                    <h3>Sign in</h3>
                    <AuthForm
                        handleChange={this.handleChange}
                        handleSubmit={this.handleLogin}
                        username={this.state.username}
                        password={this.state.password}
                        btnText="Login"
                    />
                    <p onClick={this.toggler}>Create an account</p>
                </>
                }
                
            </div>
        )
    }

}

export default withUser(AuthContainer)