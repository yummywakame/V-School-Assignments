import React, { Component } from 'react'
import axios from 'axios'
import './style.css'

// HTTP governs the rules and standards for the client to server request-response cycle
// Client -> Server -> API -> Database -> API -> Server -> Client

class App extends Component {
    constructor() {
        super()
        this.state = {
            colorNum: "",
            data: []
        }
    }

    componentDidMount() {
        axios.get("http://www.colr.org/json/schemes/random/5?scheme_size_limit=7")
            .then(response => {
                this.setState({ // setState triggers render()
                    data: response.data.schemes[0].colors
                })
                console.log(response.data)

            }).catch(error => console.log(error))
    }

    render() {
        console.log(this.state)

        const mappedCharacters = this.state.data.map((item, key) => {
            return (
                <div key={key} style={{backgroundColor: `#${item}`}}></div>
            )
        })

        return (
            <div id="container" style={{gridTemplateColumns: `repeat(${this.state.data.length}, 1fr)`}}>{mappedCharacters}</div>
        )
    }
}

export default App