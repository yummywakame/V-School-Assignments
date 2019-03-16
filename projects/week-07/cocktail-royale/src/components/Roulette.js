import React, { Component } from 'react'
import { withListData } from '../context/BigDataProvider.js'

class Roulette extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        window.scrollTo(0, 0)

    }

    render() {
        let { idDrink } = (this.props.cocktailDetail.length) && this.props.cocktailDetail[0]
        // console.log("this.props.cocktailDetail")
        // console.log(this.props.cocktailDetail)
        
        // if drink ID has been retrieved - reroute to cocktail details
        if (idDrink) {this.props.history.push(`/cocktail/${idDrink}`)}
        
        return (

            <main className="container">

                
            </main>
        )
    }
}

export default withListData(Roulette)