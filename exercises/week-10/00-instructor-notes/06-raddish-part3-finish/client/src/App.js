import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { withUser } from './context/UserProvider.js'
import AuthContainer from './components/auth/AuthContainer.js'

// Auth 
    // Form for login and signup
// UserProvider - context

// dependencies
    // axios, react-router-dom, prop-types    

const App = (props) => {
    const { user, token, signup, login } = props
    return (
        <div>
            <Switch>
                <Route 
                    path="/login" 
                    render={rProps => 
                        <AuthContainer 
                            {...rProps} 
                            signup={signup} 
                            login={login}/>}/>
            </Switch>
        </div>
    )
}

export default withUser(App)