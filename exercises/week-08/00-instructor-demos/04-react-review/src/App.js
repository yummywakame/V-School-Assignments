import React from 'react'
import Home from './components/Home.js'
import RickAndMortyList from './components/RickAndMortyList.js'
import { withCharacters } from './context/CharacterProvider.js'
import { Switch, Route, Link, withRouter } from 'react-router-dom'
import ErrorBoundary from './shared/ErrorBoundary.js'

// Star wars
// "https://swapi.co/api/people"
// Rick and Morty
// "https://rickandmortyapi.com/api/character"


const App = (props) => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/rickandmorty">Rick And Morty</Link>
            </nav>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/rickandmorty" render={routerProps => 
                    <ErrorBoundary>
                        <RickAndMortyList {...props} {...routerProps}/>
                    </ErrorBoundary>
                }/>
                {/* <Route exact path="/" component={Home}/> */}
            </Switch>
        </div>
    )
}

export default withCharacters(withRouter(App))

// - React Context
// - Props 
// - React Router
// - Lifecycle Methods
