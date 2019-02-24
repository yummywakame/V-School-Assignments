import React from 'react'
import Die from './Die.js'

class DiceBox extends React.Component {
    constructor() {
        super()
        
        this.state = {
            dice1: this.randomize(),
            dice2: this.randomize(),
            dice3: this.randomize(),
            dice4: this.randomize(),
            dice5: this.randomize()
        }
    }
    
    randomize = () => {
        return (Math.floor(Math.random() * 6) + 1)
    }
    
    rollDice = () => {
        this.setState({
            dice1: this.randomize(),
            dice2: this.randomize(),
            dice3: this.randomize(),
            dice4: this.randomize(),
            dice5: this.randomize()
        })
    }

    render() {
        return (
            <div>
                <div id="dice-box">
                    <button onClick={this.rollDice}>Roll Die</button>
                    <Die num={this.state.dice1} />
                    <Die num={this.state.dice2} />
                    <Die num={this.state.dice3} />
                    <Die num={this.state.dice4} />
                    <Die num={this.state.dice5} />
                </div>
            </div>
        )
    }
}

export default DiceBox