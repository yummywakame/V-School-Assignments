import React, { Component } from 'react'
import axios from 'axios'

const BigDataContext = React.createContext()

class BigDataProvider extends Component {
    constructor(){
        super()
        this.state = {
            characters: [],
            episodes: [],
            locations: [],
            swVehicles: [],
            swFilmData: [],
            errMsg: ''
        }
    }

    getDatas = async () => {
        try {
            const response       = await axios.get("https://rickandmortyapi.com/api/")
            const { characters, episodes, locations } = response.data
            const charactersArr  = await axios.get(characters)
            const locationsArr   = await axios.get(locations)
            const episodesArr    = await axios.get(episodes)
            const swResponse     = await axios.get('https://swapi.co/api/')
            const { vehicles, films } = swResponse.data
            const swVehiclesData = await axios.get(vehicles)
            const swFilmData     = await axios.get(films)

            this.setState({
                characters: charactersArr.data.results,
                episodes: episodesArr.data.results,
                locations: locationsArr.data.results,
                swVehicles: swVehiclesData.data.results,
                swFilmData: swFilmData.data.results
            })
            
        } catch(err){
            // handle error thrown from ANY request in the TRY
            console.log(err)
        } finally {
            // Do something in any case
            if(!this.state.characters.length){
                this.setState({
                    errMsg: "ERROR LOADING DATA"
                })
            }
        }
    }


    render(){
        return (
            <BigDataContext.Provider
                value={{
                    ...this.state,
                    getDatas: this.getDatas
                }}>
                { this.props.children }
            </BigDataContext.Provider>
        )
    }
}


export const withDatas = C => props => (
    <BigDataContext.Consumer>
        { value => <C {...props} {...value}/>}
    </BigDataContext.Consumer>
)

export default BigDataProvider