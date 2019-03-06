import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import ErrorBoundary from '../shared/ErrorBoundary.js'
import Nav from './Nav.js'
import Home from './Home.js'
import About from './About.js'
import Broken from './Broken.js'
import Contact from './Contact.js'
import NoResult from './NoResult.js'

class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" render={ props => 
                                                <ErrorBoundary>
                                                    <Home {...props}/>
                                                </ErrorBoundary>
                                            }/>
                    <Route path="/contact" render={ props => 
                                                <ErrorBoundary>
                                                    <Contact {...props}/>
                                                </ErrorBoundary>
                                            }/>
                    <Route path="/broken" render={ props => 
                                                <ErrorBoundary>
                                                    <Broken {...props}/>
                                                </ErrorBoundary>
                                            }/>
                    <Route path="/about" render={ props => 
                                                <ErrorBoundary>
                                                    <About {...props}/>
                                                </ErrorBoundary>
                                            }/>
                    <Route component={NoResult}/>
                </Switch>
            </div>
        )
    }
}

export default App