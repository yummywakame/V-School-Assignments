import React from 'react'
import Box from './Box.js'
/* Stateful and Stateless */
// Class        Functional(Display)
// State
// Lifecycle Methods

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            color1: "blue",
            color2: "red",
            color3: "green",
            count: 0
        }
    }

    handleChangeColor = () => {
        const colors = ["green", "purple", "teal", "cornflowerblue", "firebrick"]
        // Generate 3 different colors //
        const chosenColor1 = colors[Math.floor(Math.random() * colors.length)]
        const chosenColor2 = colors[Math.floor(Math.random() * colors.length)]
        const chosenColor3 = colors[Math.floor(Math.random() * colors.length)]
        // set state to have that new color
        this.setState(prevState => {
            return {
                color1: chosenColor1,
                color2: chosenColor2,
                color3: chosenColor3,
                count: prevState.count + 1
            }
        })
    }

    render(){
        return (
            <div>
                <Box color={this.state.color1} handleChangeColor={this.handleChangeColor} count={this.state.count}/>
                <Box color={this.state.color2} handleChangeColor={this.handleChangeColor} count={this.state.count}/>
                <Box color={this.state.color3} handleChangeColor={this.handleChangeColor} count={this.state.count}/>
            </div>
        )
    }
}


export default App