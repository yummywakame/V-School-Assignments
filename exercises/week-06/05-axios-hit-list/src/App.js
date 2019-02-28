import React, { Component } from 'react'
import axios from 'axios'
import './style.css'

// HTTP governs the rules and standards for the client to server request-response cycle
// Client -> Server -> API -> Database -> API -> Server -> Client

class App extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get("https://s3.amazonaws.com/v-school/data/hitlist.json")
            .then(response => {
                this.setState({ // setState triggers render()
                    data: response.data
                })

            }).catch(error => console.log(error))
    }

    render() {
        console.log(this.state)

        const mappedCharacters = this.state.data.map((item, key) => {
            return (

                <div key={key} className="person" style={{backgroundImage: `url(${item.image})`}}>
                    <h2>{item.name}</h2>
                </div>

            )
        })

        return (
            <div id="container">
                <header>
                    <h1>Don Corlone's Hit List</h1>
                </header>
                <div id="hit-list">
                    {mappedCharacters}
                </div>
            </div>

        )
    }
}

export default App