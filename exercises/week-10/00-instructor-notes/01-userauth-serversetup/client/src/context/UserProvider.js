import React, { Component } from 'react'

const UserContext = React.createContext()

class UserProvider extends Component {
    constructor(){
        super()
        this.state = {

        }
    }


    render(){
        return (
            <UserContext.Provider>
                { this.props.children }
            </UserContext.Provider>
        )
    }
}

export default UserProvider

export const withUser = C => props => (
    <UserContext.Consumer>
        { value => <C {...props} {...value}/> }
    </UserContext.Consumer>
)