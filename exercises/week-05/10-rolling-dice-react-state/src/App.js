import React from 'react'
import DiceBox from './DiceBox.js'
import './style.css'

const App = () => {
    return (
        <div id="container">
            <h1>Yahtzee Dice Box</h1>
            <DiceBox />
        </div>
    )
}

export default App