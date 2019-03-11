import React, { Component } from 'react'
import { withListData } from '../context/BigDataProvider.js'

class Roulette extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // this.props.getCocktailDetails(this.props.match.params._id)
    }

    render() {
        console.log("Roulette Props:")
        console.log(this.props)

        // let {
        //     idDrink, strDrink, strDrinkThumb, strGlass, strInstructions,
        //     strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5,
        //     strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10,
        //     strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15,
        //     strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5,
        //     strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10,
        //     strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15
        // } = (this.props.cocktailDetail.length) && this.props.cocktailDetail[0]

        
        
        return (

            <main className="container">

                
            </main>
        )
    }
}

export default withListData(Roulette)