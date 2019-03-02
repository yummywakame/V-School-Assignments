import React, { Component } from 'react'
import axios from 'axios'
import './style.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    
    getData = () => {
        axios.get("https://api.icndb.com/jokes/random/")
        .then(response => {
            this.setState({ // setState triggers render()
                data: response.data.value.joke
            })

        }).catch(error => console.log(error))
    }

    componentDidMount() {
        this.getData()
    }
    
    moreWisdom = () => {
        this.getData()
    }

    render() {
        let str = this.state.data.toString()
        
        /* Upgrading all strings from "Chuck Norris" to "Wolfman Steve" */
        str = str.replace(/Chuck Norris's/gi, "Wolfman Steve's")
        str = str.replace(/Chuck Norris'/gi, "Wolfman Steve's")
        str = str.replace(/Chuck Norrises/gi, "Wolfman Steve's")
        str = str.replace(/Chuck Norris/gi, "Wolfman Steve")
        str = str.replace(/Chuck/gi, "Wolf")
        str = str.replace(/CN-/gi, "WS-")
        str = str.replace(/&quot;/gi, "'")

        return (
            <div id="container">
            
                <h1>Wolfman Steve, The Legend</h1>
                
                <div id="inner-container">
                
                    <div><p>{str}</p></div>
                    
                    <div><button onClick={this.moreWisdom}>More Lore!</button></div>
                    
                </div>
                
                <a href="https://yummy-wakame.com">Archived by Yummy Wakame &copy; All rights reserved: Wolfman Steve.</a>
            
            </div>

        )
    }
}

export default App