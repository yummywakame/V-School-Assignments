import React from 'react'
import PropTypes from 'prop-types'

const CounterControls = (props) => {
    return(
        <div>
            <button onClick={props.handleDecrement}> - </button>
            <button onClick={props.handleIncrement}> + </button>
            <button onClick={props.changeColor}> change color </button>
        </div>
    )
}

CounterControls.propTypes = {
    handleDecrement: PropTypes.func.isRequired,
    handleIncrement: PropTypes.func.isRequired
}

export default CounterControls