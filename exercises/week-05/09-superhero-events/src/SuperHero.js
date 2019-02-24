import React from 'react'
import PropTypes from 'prop-types'

const SuperHero = (props) => {
    console.log(props)

    return (
        <div onClick = {props.onClick}>
            <div className="photo" style={{backgroundImage: "url(./images/" + props.imageName + ")"}}></div>
            <h2>{props.name}</h2>
            <p>{props.show}</p>
        </div>
    )

}
SuperHero.propTypes = {
    name: PropTypes.string,
    show: PropTypes.string,
    catchPhrase: PropTypes.string,
    imageName: PropTypes.string
}

export default SuperHero