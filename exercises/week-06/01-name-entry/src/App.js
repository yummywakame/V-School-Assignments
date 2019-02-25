import React from 'react'
import Form from './Form.js'
import List from './List.js'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            nameInput: "",
            names: []
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            // or [event.target.name]: event.target.value
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        this.setState(prevState => {
            return {
                nameInput: "",
                names: [...prevState.names, this.state.nameInput]
            }
        })
    }

    render() {
        
        return (
            <div className="container">
                <Form 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit} 
                    nameInput={this.state.nameInput}
                />
                <List 
                    names={this.state.names}
                />
            </div>
        )
    }
}

export default App