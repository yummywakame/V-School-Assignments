import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Auth from './components/Auth.js'
import PostList from './components/PostList.js'


class App extends Component {
    render(){
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={rProps => <Auth {...rProps}/>}/>
                    <Route exact path="/posts" render={rProps => <PostList {...rProps}/>}/>
                </Switch>
            </div>
        )
    }
}

export default App