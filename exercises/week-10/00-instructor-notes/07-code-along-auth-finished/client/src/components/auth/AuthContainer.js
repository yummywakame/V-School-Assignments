import React, { Component } from 'react'
import AuthForm from './AuthForm.js'
import { withUser } from '../../context/UserProvider.js'

class AuthContainer extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            password: "",
            authToggle: false
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // handleSubmit for our signup form
    handleSignUp = e => {
        e.preventDefault()
        const credentials = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.signup(credentials)
    }

    handleLogin = e => {
        e.preventDefault()
        const credentials = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.login(credentials)
    }

    toggler = () => {
        this.setState(prevState => ({
            authToggle: !prevState.authToggle
        }))
    }


    render(){
        return (
            <div>
                { this.state.authToggle ?
                    <>
                        <h3>Sign Up</h3>
                        <AuthForm
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSignUp}
                            username={this.state.username}
                            password={this.state.password}
                            btnText="Sign Up"
                        />
                        <p onClick={this.toggler}>Already a member?</p>
                    </>
                    :
                    <>
                        <h3>Login</h3>
                        <AuthForm 
                            handleChange={this.handleChange}
                            handleSubmit={this.handleLogin}
                            username={this.state.username}
                            password={this.state.password}
                            btnText="Login"
                        />
                        <p onClick={this.toggler}>Not a member?</p>
                    </>
                }
            </div>
        )
    }
}

export default withUser(AuthContainer)