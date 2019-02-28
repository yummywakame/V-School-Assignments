import React, { Component } from 'react'
import { withCounter } from './context/CounterProvider'
import Test from './Test.js'


const App = props => {
    return (
        <div>
            <h1>{props.counter1}</h1>
            <button onClick={props.increment1}>Increments</button>
            <Test />
        </div>
    )
}

export default withCounter(App)