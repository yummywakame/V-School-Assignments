import React, { Component } from 'react'
import { withBreweries } from './context/BreweryProvider.js'

class App extends Component {
    constructor(){
        super()
        this.state = {
            cityInput: "",
            house: "",
            school: ""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.getCityBreweries(this.state.cityInput)
        this.setState({
            cityInput: ""
        })
        console.log(this.state.cityInput)
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="cityInput" value={this.state.cityInput} onChange={this.handleChange}/>

                    {/* 
                        Below, these are extra form inputs not required for this app to work, just for information,
                        to show our handleChange does not have to change with different input types as long
                        as we are not using a checkbox input
                    */}

                    Hufflepuff <input type="radio" name="house" value="Hufflepuff" onChange={this.handleChange}/>
                    Ravenclaw  <input type="radio" name="house" value="Ravenclaw" onChange={this.handleChange}/>
                    <select name="school" onChange={this.handleChange}>
                        <option>- Select a house -</option>
                        <option value="Hogwarts">Hogwarts</option>
                        <option value="Durmstrang">Durmstrang</option>
                    </select>

                    <button>Submit</button>
                </form>
                <div>
                    { this.props.cityBreweries.map(brewery => <h1>{brewery.name}</h1>) }
                </div>
            </div>
        )
    }
}

export default withBreweries(App)