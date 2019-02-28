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
        axios.get("http://www.colr.org/json/schemes/random/5?scheme_size_limit=5")
            .then(response => {
                this.setState({ // setState triggers render()
                    data: response.data.schemes[0].colors
                })

            }).catch(error => console.log(error))
    }

    render() {
        console.log(this.state)

        const mappedCharacters = this.state.data.map((item, key) => {
            console.log(`#${item}`)
            console.log(key)
            console.log(mappedCharacters)
            return (
                <div key={key} style={{backgroundColor: `#${item}`}}></div>
            )
        })

        return (
        // <div></div>
            <div>{{mappedCharacters}}</div>
        )
    }
}

export default App