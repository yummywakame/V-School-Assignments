import React, { useState } from 'react'
import axios from 'axios'

export const DataContext = React.createContext()

const DataProvider = (props) => {
    const initialState = []
    const [characters, setCharacters] = useState(initialState)
    const [globalToggle, setGlobalToggle] = useState(false)

    const getCharacters = () => {
        console.log('hi')
        axios.get("https://rickandmortyapi.com/api/character")
            .then(res => setCharacters(res.data.results))
            .catch(err => console.log(err))
    }

    const toggler = () => {
        setGlobalToggle(!globalToggle)
    }
    
    return (
        <DataContext.Provider
            value={{ characters, getCharacters, toggler, globalToggle }}>
            { props.children }
        </DataContext.Provider>
    )
}

export default DataProvider