import React from 'react'
import Pet from './Pet.js'

const Friend = (props) => {
    
    const mappedPets = props.pets.map((pet, key) => (
        <Pet 
            name={pet.name} 
            breed={pet.breed} 
            key={key}
        />
    ))
    

    return (
        <div>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <h3>Pets:</h3>
            <ul>
                {mappedPets}
            </ul>
        </div>
    )
}

export default Friend