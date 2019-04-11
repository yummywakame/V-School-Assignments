import React, { Component } from 'react'
import axios from 'axios'

const UserContext = React.createContext()

class UserProvider extends Component {
    constructor(){
        super()
        this.state = {
            user: JSON.parse(localStorage.getItem("user")) || {}, 
            token: localStorage.token || ""
        }
    }

    signup = (credentials) => {
        axios.post("/auth/signup", credentials).then(res => {
            const { user, token } = res.data
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("token", token)
            this.setState({ user, token }
            // , this.props.history.push("/home")
            )
        })
        .catch(err => console.log(err))
    }

    login = (credentials) => {
        axios.post("/auth/login", credentials).then(res => {
            const { user, token } = res.data
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("token", token)
            this.setState({ user, token }
            // , this.props.history.push("/home")
            )
        })
        .catch(err => console.log(err))
    }

    render(){
        return( 
            <UserContext.Provider
                value={{
                    ...this.state,
                    signup: this.signup,
                    login: this.login
                }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default UserProvider

export const withUser = C => props => (
    <UserContext.Consumer>
        { value => <C {...props} {...value}/>}
    </UserContext.Consumer>
)