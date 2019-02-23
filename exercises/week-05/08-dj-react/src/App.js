import React from 'react'
import './style.css'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            bg1: "white",
            bg2: "white",
            bg3: "white",
            bg4: "white",
            radius1: "5pt",
            radius2: "5pt",
            radius3: "5pt",
            radius4: "5pt"
        }
    }

    handleToggleAllBW1 = () => {
        this.setState((prevState) => {
            return ({
                bg1: (prevState.bg1 === "white") ? "black" : "white",
                bg2: (prevState.bg2 === "white") ? "black" : "white",
                bg3: (prevState.bg3 === "white") ? "black" : "white",
                bg4: (prevState.bg4 === "white") ? "black" : "white",
            })
        })
    }

    handleTopToPurple = () => {
        this.setState({
            bg1: "purple",
            bg2: "purple"
        })
    }

    handleBottomLeftColor = () => {
        this.setState({
            bg3: "cornflowerblue"
        })
    }

    handleBottomRightColor = () => {
        this.setState({
            bg4: "orange"
        })
    }
    
    handleToggleTopLeftRadius = () => {
        this.setState((prevState) => {
            return({
                radius1: (prevState.radius1 === "5pt") ? "50%" : "5pt"
            })
        })
    }
    
    handleToggleTopRightRadius = () => {
        this.setState((prevState) => {
            return({
                radius2: (prevState.radius2 === "5pt") ? "50%" : "5pt"
            })
        })
    }
    
    handleToggleBottomLeftRadius = () => {
        this.setState((prevState) => {
            return({
                radius3: (prevState.radius3 === "5pt") ? "50%" : "5pt"
            })
        })
    }
    
    handleToggleBottomRightRadius = () => {
        this.setState((prevState) => {
            return({
                radius4: (prevState.radius4 === "5pt") ? "50%" : "5pt"
            })
        })
    }

    render() {

        return (
            <div id="container">
                <h1>DJ React</h1>
                <div id="display-area">
                    <div style={{ backgroundColor: this.state.bg1, borderRadius: this.state.radius1 }}></div>
                    <div style={{ backgroundColor: this.state.bg2, borderRadius: this.state.radius2 }}></div>
                    <div style={{ backgroundColor: this.state.bg3, borderRadius: this.state.radius3 }}></div>
                    <div style={{ backgroundColor: this.state.bg4, borderRadius: this.state.radius4 }}></div>
                </div>
                <div id="button-area">
                    <button onClick={this.handleToggleAllBW1} className="big">1</button>
                    <button onClick={this.handleTopToPurple} className="wide">2</button>
                    <button onClick={this.handleToggleTopLeftRadius}>5</button>
                    <button onClick={this.handleToggleTopRightRadius}>6</button>
                    <button onClick={this.handleBottomLeftColor}>3</button>
                    <button onClick={this.handleBottomRightColor}>4</button>
                    <button onClick={this.handleToggleBottomLeftRadius}>7</button>
                    <button onClick={this.handleToggleBottomRightRadius}>8</button>
                </div>
            </div>
        )
    }
}

export default App