import React from 'react'
import data from './superHeroes.json'

class App extends React.Component {
    render(){
        const mappedSuperheroes = data.superHeroes.map((hero, i) => 
                        <div style={{ backgroundImage: `url(${hero.imgUrl})`, backgroundSize: "contain", height: 500, width: 500}}>
                            <h1 style={{ color: "white" }}>Name: {hero.name}</h1>
                            <p style={{ color: "white" }}>CatchPhrase: {hero.catchPhrase}</p>
                        </div>
        )

        return (
            <div className="superheroes-container">
                {mappedSuperheroes}
            </div>
        )
    }
}


export default App