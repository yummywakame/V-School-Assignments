import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { withUser } from './context/UserProvider.js'
import Auth from './components/Auth.js'
import PostList from './components/PostList.js'
import ProtectedRoute from './shared/ProtectedRoute.js'
import NotFound from './components/NotFound.js'
import { userInfo } from 'os';


class App extends Component {
    render(){
        const { token, logout, user } = this.props
        return (
            <div>
                {/* {!token && <button onClick={() => this.props.history.push("/auth")}>Login</button> } */}
                { token && <button onClick={logout}>Logout</button> }
                { token && user.isAdmin && <button>Upload new data</button> }
                <Switch>
                    <Route 
                        exact path="/" 
                        render={rProps => 
                            token 
                                ? <Redirect to="/posts" />
                                : <Auth {...rProps}/>}/>
                    <ProtectedRoute 
                        path={"/posts"} 
                        redirectTo="/" 
                        component={PostList}/>
                    <ProtectedRoute 
                        path="*" 
                        redirectTo="/" 
                        component={NotFound}/> 
                </Switch>
            </div>
        )
    }
}

export default withUser(App)




// Routing
    // front-end routing
        // which url loads which component
    // back-end routing
        // request to /api/posts will get me posts data