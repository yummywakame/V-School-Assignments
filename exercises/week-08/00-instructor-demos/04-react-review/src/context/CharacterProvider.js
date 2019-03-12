import React, { Component } from 'react'
import axios from 'axios'

const CharacterContext = React.createContext()

export default class CharacterProvider extends Component {
    constructor(){
        super()
        this.state = {
            rickAndMortyChars: []
        }
    }

    getRickAndMortyChars = () => {
        axios.get("https://rickandmortyapi.com/api/character")
        .then(response => {
            this.setState({
                rickAndMortyChars: response.data.results
            })
        })
        .catch(err => console.log(err))
    }


    render(){
        return (
            <CharacterContext.Provider 
                value={{
                    rickAndMortyChars: this.state.rickAndMortyChars,
                    getRickAndMortyChars: this.getRickAndMortyChars
                }}>
                { this.props.children }
            </CharacterContext.Provider>
        )
    }
}



export const withCharacters = C => props => (
    <CharacterContext.Consumer>
        { value => <C {...props} {...value}/>}
    </CharacterContext.Consumer>
)