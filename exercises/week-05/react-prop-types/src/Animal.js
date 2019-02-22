import React from 'react'
import PropTypes from 'prop-types'

const Animal = (props) => {
// type, sound, coat, legs, diet
    return (
        <div>
            <h1>Type: {props.type}</h1>
            <p>Sound: {props.sound}</p>
            <p>Coat: {props.coat}</p>
            <p>Legs: {props.legs}</p>
            <p>Diet: {props.diet}</p>
        </div>
    )
}

Animal.propTypes = {
    type: PropTypes.string.isRequired,
    sound: PropTypes.string.isRequired,
    coat: PropTypes.string.isRequired,
    legs: PropTypes.number.isRequired,
    diet: PropTypes.string.isRequired
}

export default Animal