import React from 'react'

// React Forms
// inputs 3 required attributes
    // name
    // value
    // onChange (for event listener)

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            nameInput: "",
            ageInput: "",
            names: []
        }
    }
    
    handleChange = (event) => {
        // event.target.name and event.target.value
        const { name, value} = event.target
        this.setState({
            // nameInput: event.target.value
            [name]: value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        // alert(this.state.nameInput)
        this.setState({
            nameInput: "",
            ageInput: ""
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.nameInput}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input name="nameInput" value={this.state.nameInput} onChange={this.handleChange} type="text" />
                    <input name="ageInput" value={this.state.ageInput} onChange={this.handleChange} type="number" />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default App