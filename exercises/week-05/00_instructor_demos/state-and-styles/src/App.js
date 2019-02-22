import React from 'react'
import './style.css' // Option 2

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            color1: "blue",
            color2: "green"
            // Option 2
            // className1: "box1" used to reference a class name instead of using inline-style  objects
        }
    }

    handleChangeColor = () => {
        const colors = ["red", "blue", "green", "yellow", "violet", "pink", "purple"]
        const currentColor = colors[Math.floor(Math.random() * colors.length)]

        // Option 1, provide new color that the inline style object is using below in our 'render' method
        this.setState({
            color1: currentColor
        })
 

        // Option 2
        // this.setState({
        //     className1: "new-class-name"
        // })
    }

    render(){
        // Option 1
        const boxStyle1 = {
            width: 200,
            height: 200,
            border: '1px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: this.state.color1
        }

        return (
            <div>

                {/*  Option 1
                    Inline style object provided to Div to react to state change 
                */}
                <div style={boxStyle1}> Box 1 </div>

                {/*   Option 2
                    Class name string given to className which can be changed in state and refers 
                    to a class name in a linked CSS sheet 
                */}
                {/* <div className={this.state.className1}>Box</div> */}

                {/* DJControls Components would use this an other buttons to use click events */}
                <button onClick={this.handleChangeColor}>Change Color</button>

            </div>
        )
    }
}

export default App;