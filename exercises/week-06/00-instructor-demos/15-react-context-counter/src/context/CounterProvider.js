import React, { Component } from 'react'

const CounterContext = React.createContext()

class CounterProvider extends Component {
    constructor(){
        super()
        this.state = {
            counter1: 0,
            counter2: 0
        }
    }

    increment1 = () => {
        this.setState(prevState => {
            return {
                counter1: prevState.counter1 + 1
            }
        })
    }

    increment2 = () => {
        this.setState(prevState => {
            return {
                counter2: prevState.counter2 + 1
            }
        })
    }

    render(){
        return (
            <CounterContext.Provider 
                value={{
                    counter1: this.state.counter1,
                    increment1: this.increment1,
                    counter2: this.state.counter2,
                    increment2: this.increment2
                }}>
                { this.props.children }
            </CounterContext.Provider>
        )
    }
}

export const withCounter = C => props => (
    <CounterContext.Consumer>
        { value => <C {...props} {...value} /> }
    </CounterContext.Consumer>
)

export default CounterProvider