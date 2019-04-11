import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { withUser } from './context/UserProvider.js'
import AuthContainer from './components/auth/AuthContainer.js'
import ProtectedRoute from './shared/ProtectedRoute.js'
import Home from './components/Home.js'

// Auth 
    // Form for login and signup
// UserProvider - context

// dependencies
    // axios, react-router-dom, prop-types    

const App = (props) => {
    const { user, token } = props   

    return (
        <div>
            <Switch>
                <Route 
                    path="/login" 
                    render={routerProps => token ? <Redirect to="/home"/> : <AuthContainer {...routerProps}/>}/>
                <ProtectedRoute 
                    token={token}
                    path="/home"
                    redirectTo="/login"
                    component={Home}
                    username={user.username}
                />   
                {/* <Route 
                    path="/home" 
                    render={routerProps => !token ? <Redirect to="/login"/> : <Home {...routerProps}/>}/> */}
            </Switch>
        </div>
    )
}

export default withUser(App)