import React, { Component } from 'react'


class App extends Component {
// eslint-disable-next-line
    constructor() {
        super()
        this.state = {
            username: "",
            bgColor: "blue"
        }
    }
    
    componentDidMount() {
        // Axios Request and save response in state
        this.setState({
            username: "Joe"
        })
        
        // Add Window event listener
        window.addEventListener("keydown", (event) => {
            if(event.which === 71) {
                this.setState({
                    bgColor: "green"
                    // this.props.history.go("http://www.google.com")
                })
            }
        })
    }
    
    componentWillUnmount() {
        window.removeEventListener("keydown")
    }
    
    hi = () => {
        alert("Hi")
    }

    render(){
        
        return (
            <div style={{ backgroundColor: this.state.bgColor }}>
               <h1 onClick={this.hi}>LifeCycle Methods!</h1>
               <p>Hello {this.state.username}</p>
            </div>
        )
    }
}

export default App