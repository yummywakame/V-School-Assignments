import React, { Component } from 'react'
import axios from 'axios'

const BreweryContext = React.createContext()

class BreweryProvider extends Component {
     constructor(){
        super()
        this.state = {
            cityBreweries: []
        }
     }

    getCityBreweries = (cityInput) => {
        axios.get(`https://api.openbrewerydb.org/breweries?by_city=${cityInput}`)
            .then(res => {
                this.setState({
                    cityBreweries: res.data
                })
            })
        .catch(err => console.log(err))
    }

     render(){
         return (
             <BreweryContext.Provider
                value={{
                    getCityBreweries: this.getCityBreweries,
                    cityBreweries: this.state.cityBreweries
                }}>
                { this.props.children }
             </BreweryContext.Provider>
         )
     }
}

export default BreweryProvider


// HOC
export const withBreweries = C => props => (
    <BreweryContext.Consumer>
        {value => <C {...props} {...value}/>}
    </BreweryContext.Consumer>
)
