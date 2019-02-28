import React from 'react'
import { withCounter } from './context/CounterProvider.js'

const Test = props => {
    return (
        <div>
            <h1>{props.counter2}</h1>
            <button onClick={props.increment2}>Increments</button>
        </div>
    )
}

export default withCounter(Test)