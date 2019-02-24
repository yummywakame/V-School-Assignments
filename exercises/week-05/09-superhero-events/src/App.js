import React from 'react'
import data from './superHeroes.json'
import SuperHero from './SuperHero.js'
import './style.css'

class App extends React.Component{
    // eslint-disable-next-line
    constructor(){
        super()
    }

    render(){
        const superHeroes = data.superHeroes.map((hero,key) =>
            <SuperHero 
                name={hero.name} 
                show={hero.show} 
                onClick = {() => {
                    alert(hero.catchPhrase)
                }}
                imageName = {hero.imageName}
                key={key}
            />
        )

        return (
            <div>
                <h1>Childhood Heroes</h1>
                <p>Click for catch phrase:</p>
                <div id="container">{superHeroes}</div>
            </div>
            
        )
    }
}

export default App