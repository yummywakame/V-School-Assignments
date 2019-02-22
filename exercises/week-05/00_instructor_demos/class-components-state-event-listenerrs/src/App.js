import React from 'react'
import CounterDisplay from './CounterDisplay'
import CounterControls from './CounterControls'

// Class component vs Functional Components
// Logic Compinents    Display Components
// Stateful                 Stateless 
//                  (receive and display only)
// this.props                props

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0,
            color1: "black"
        }
    }
    // Doing words ( methods )
    
    // Handlers
    handleIncrement = () => {
        // the argumet for set state is always an object
        this.setState((prevState) => {
            return {    
                counter: prevState.counter + 1
            }
        })
    }
    
    handleDecrement = () => {
        // the argumet for set state is always an object
        this.setState((prevState) => {
            return {    
                counter: prevState.counter - 1
            }
        })
    }
    
    changeColor = () => {
        // the argumet for set state is always an object
        this.setState((prevState) => {
            return {    
                counter: prevState.counter - 1
            }
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <CounterDisplay counter={this.state.counter}/>
                <CounterControls 
                    handleIncrement={this.handleIncrement}
                    handleDecrement={this.handleDecrement}/>
            </div>
        )
    }
}

// const App = () => {
// // Turn the app component into a class component
//     return (
//         <div>
//             Hello World
//         </div>
//     )
// }

export default App