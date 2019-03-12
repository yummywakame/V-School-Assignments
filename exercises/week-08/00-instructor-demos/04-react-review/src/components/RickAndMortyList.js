import React, { Component } from 'react'
// import { withCharacters } from '../context/CharacterProvider.js'
import RMCharacter from './RMCharacter.js'
import ErrorBoundary from '../shared/ErrorBoundary.js'

class RickAndMortyList extends Component {

    componentDidMount(){
        this.props.getRickAndMortyChars()
        window.addEventListener("keydown", (e) => {
            console.log(e)
            if(e.code === "KeyB"){
                console.log("BLUUUUEEE")
            }
        })
    }

    componentWillUnmount(){
        window.removeEventListener("keydown", null)
    }

    render(){

        const mappedRMChars = this.props.rickAndMortyChars.map((char, i) => 
            <ErrorBoundary>
                <RMCharacter {...char} key={char.name + i} />
            </ErrorBoundary>
        )
        return (
            <div>
                Rick and morty list
                { mappedRMChars }
            </div>
        )
    }
}

export default RickAndMortyList