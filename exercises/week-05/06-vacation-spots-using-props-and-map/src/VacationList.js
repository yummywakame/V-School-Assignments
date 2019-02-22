import React from 'react'
import Destination from './Destination.js'
import PropTypes from 'prop-types'

const VacationList = (props) => {
    console.log(props.data)
    
    const mappedDestinations = props.data.map((item, key) => (
        <Destination
            place={item.place}
            price={item.price}
            imgURL={item.imgURL}
            key={key}
        />
    ))
    return(<div id="container">{mappedDestinations}</div>)
}

Destination.propTypes = {
    place: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imgURL: PropTypes.string.isRequired
}

export default VacationList