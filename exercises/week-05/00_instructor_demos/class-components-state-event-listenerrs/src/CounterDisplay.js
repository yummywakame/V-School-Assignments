import React from 'react'
import PropTypes from 'prop-types'

const CounterDisplay = (props) => {
    return (
        <div>
            <h1>{props.counter}</h1>
        </div>
    )
}

CounterDisplay.propTypes = {
    counter: PropTypes.number.isRequired
}

export default CounterDisplay