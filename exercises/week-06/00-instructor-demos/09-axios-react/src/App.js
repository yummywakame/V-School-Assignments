import React, { Component } from 'react'
import axios from 'axios'

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
        axios.get("https://rickandmortyapi.com/api/character")
            .then(response => {
                this.setState({ // setState triggers render()
                    data: response.data.results
                })
                
            }).catch(error => console.log(error))
    }
    
    render() {
        console.log(this.state)
        
        const mappedCharacters = this.state.data.map((item) => {
            return (   
                <div key={item.id} style={{backgroundImage: `url(${item.image})`, height: 200, width: 300, backgroundSize: 'cover'}}>
                    <h1>{item.name}</h1>
                </div>
            )
        })
        
        return(
            <div>
                {mappedCharacters}
            </div>
        )
    }
}

export default App