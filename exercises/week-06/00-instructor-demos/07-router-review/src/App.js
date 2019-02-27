import React from 'react'
import Nav from './components/Nav.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Services from './components/Services.js'
import { Switch, Route, withRouter } from 'react-router-dom'
import './style.css'

const App = (props) => {
    const user = {
        username: "joeshmoe",
        isAuthenticated: true
    }

    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path="/"   component={ Home } />
                <Route path="/about"    component={ About } />
                <Route path="/contact"  component={ Contact } />
                <Route path="/services" render={rProps =>  <Services {...rProps} user={user}/> } />
            </Switch>
        </div>
    )
}

export default withRouter(App)