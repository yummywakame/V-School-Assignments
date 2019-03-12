import React from 'react'

const RMCharacter = props => {
    // throw new Error("AAAHHHHHHH")
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.image} width={200}/>
        </div>
    )
}

export default RMCharacter