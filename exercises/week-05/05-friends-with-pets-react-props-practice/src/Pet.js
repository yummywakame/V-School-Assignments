import React from 'react'

const Pet = (props) => {

    return (
        <li>
            Name: {props.name}<br />
            Breed: {props.breed}
        </li>
    )
}

export default Pet