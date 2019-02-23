import React from 'react'
import BoxesContainer from './BoxesContainer.js'
import './style.css'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
           bgColor1: "blue",
           bgColor2: "blue",
           bgColor3: "blue",
           bgColor4: "blue",
           radius1: 50,
           radius2: 50,
           radius3: 50,
           radius4: 50
        }
    }

    handleChangeAll = () => {
        this.setState(prevState => {
            return {
                bgColor1: prevState.bgColor1 === "blue" ? "green" : "blue",
                bgColor2: prevState.bgColor2 === "blue" ? "green" : "blue",
                bgColor3: prevState.bgColor3 === "blue" ? "green" : "blue",
                bgColor4: prevState.bgColor4 === "blue" ? "green" : "blue"
            }
        })
    }

    handleChangeTopLeft = () => {
        this.setState({
            bgColor1: "purple"
        })
    }

    handleChangeAllRadius = () => {
        this.setState(prevState => {
            return {
                radius1: prevState.radius1 === 50 ? 5 : 50,
                radius2: prevState.radius2 === 50 ? 5 : 50,
                radius3: prevState.radius3 === 50 ? 5 : 50,
                radius4: prevState.radius4 === 50 ? 5 : 50,
            }
        })
    }

    render(){
        return (
            <div className="app-container">
                <BoxesContainer chicken={this.state}/>
                <div className="controls-container">
                    <button onClick={this.handleChangeAll}>Change all</button>
                    <button onClick={this.handleChangeTopLeft}>Change 1</button>
                    <button onClick={this.handleChangeAllRadius}>Change all radius</button>
                </div>
            </div>
        )
    }
}

export default App;