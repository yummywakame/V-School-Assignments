import React, { Component } from 'react'
import { withListData } from '../context/BigDataProvider.js'
import Ingredient from '../components/Ingredient.js'

class DrinkDetail extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.getCocktailDetails(this.props.match.params._id)
        // set the page title
        document.title = "Cocktail Royale | " + this.props.cocktailDetail[0].strDrink
    }

    render() {
        // console.log("DrinkDetails Props:")
        // console.log(this.props)

        let {
            strDrink, strDrinkThumb, strGlass, strInstructions,
            strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5,
            strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10,
            strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15,
            strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5,
            strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10,
            strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15
        } = (this.props.cocktailDetail.length) && this.props.cocktailDetail[0]

        let ingredientArr = [
            strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5,
            strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10,
            strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15
        ]
        ingredientArr = ingredientArr.filter(Boolean)
        
        let measureArray = [
            strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5,
            strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10,
            strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15
        ]
        measureArray = measureArray.filter(Boolean)
        
        let combinedIngredientsArr = ingredientArr.map((current, i) => 
            ({
                description: (((measureArray[i]) ? (measureArray[i] + ' ') : '') + current),
                image: ((current) ? 'http://www.thecocktaildb.com/images/ingredients/' + current.split(' ').join('%20') + "-medium.png" : "")
            })
        )
        
        return (

            <main className="container">

                <h1 className="glow">{strDrink}</h1>
                <div id="drink-detail">

                    <div className="row">

                        <div className="col s12 m12 l6">
                            <div className="main-image">
                                <img src={strDrinkThumb} alt="{strDrink}" />
                            </div>
                        </div>
                        
                        <div className="col s12 m12 l6">
                            <h2 className="textshadow">Ingredients</h2>
                            <div id="ingredients" className="row">
                                {combinedIngredientsArr.map((item, key) => <Ingredient {...item} {...this.props} key={key} />)}
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col s12">
                            <div id="instructions" className="card">
                                <div className="card-content white-text">
                                    <h2>Instructions</h2>
                                    <p>{strInstructions}</p>

                                    <h2>Glass</h2>
                                    <p>{strGlass}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        )
    }
}

export default withListData(DrinkDetail)