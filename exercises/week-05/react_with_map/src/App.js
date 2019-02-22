import React from 'react'
import Name from './Name.js'
import Person from './Person.js'

const App = () => {

    const buttons = ["Buy", "Sell", "Watch", "Notify"]
    const names = ["Rick", "Morty", "Jerry", "Birdman"]
    const people = [
        {
            name: "Rick",
            age: 70,
            favColor: "teal",
            friends: ["Morty", "Birdman"]
        },
        {
            name: "Morty",
            age: 13,
            favColor: "yellow",
            friends: ["Rick", "Jerry", "Birdman"]
        },
        {
            name: "Jerry",
            age: 54,
            favColor: "purple",
            friends: ["Morty"]
        },
        {
            name: "Birdman",
            age: 135,
            favColor: "brown",
            friends: ["Rick", "Morty"]
        }
    
    ]

    const mappedButtons = buttons.map((item, key) => (<button key={key}>{item}</button>))
    const mappedNameComponents = names.map((name, key) => (<Name name={name} key={key} />))
    const mappedPeople = people.map((character, key) => (
        <Person 
            name={character.name} 
            age={character.age} 
            favColor={character.favColor} 
            friends={character.friends} 
            key={key} 
        />
    ))
    
    return (
        <div>
            <h1>Mapping in React .map()</h1>
            <ul>
                {mappedButtons}
                {mappedNameComponents}
                {mappedPeople}
                
            </ul>
        </div>
    
    )
}

export default App