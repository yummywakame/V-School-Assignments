import React from 'react'
import Header from './Header.js'
import Body from './Body.js'
import Contact from './Contact.js'
import Footer from './Footer.js'

import {Switch, Route} from 'react-router-dom'

const App = () => {

    return (
        <div className="container">
                <Header />
                    <Switch>
                        <Route exact path='/' component={Body} />
                        <Route path='/contact' component={Contact} />
                    </Switch>   
                <Footer />
        </div>
    )
}

export default App