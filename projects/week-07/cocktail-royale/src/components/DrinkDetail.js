import React, { Component } from 'react'
import { withListData } from '../context/BigDataProvider.js'

class DrinkDetail extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        // get only the data for components specified in componentList
        this.props.getListData()
    }

    render() {
        console.log("DrinkDetails Props:")
        console.log(this.props)

        const {
            strDrink, strDrinkThumb, strGlass, strInstructions
            // idDrink, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5,
            // strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10,
            // strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15,
            // strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5,
            // strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10,
            // strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15
        } = this.props.cocktailDetail

        console.log("this.props.cocktailDetail")
        console.log(this.props.cocktailDetail)
        console.log("strDrink: " + strDrink)
        return (
            // <div className="col s12 m6 l4">

            //     <div className="card waves-effect black">
            //         <div className="card-image">
            //             <img src={strDrinkThumb} alt="{strDrink}" />
            //         </div>
            //         <div className="card-content">
            //             <h2>{strDrink}</h2>
            //             <p>{strInstructions}</p>
            //             <p>{strGlass}</p>
            //         </div>
            //     </div>

            // </div>
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

                                <div className="col s4">
                                    <img src="https://www.thecocktaildb.com/images/ingredients/Light%20rum-Medium.png" alt="" />
                                    <p>2-3 oz Light rum</p>
                                </div>

                                <div className="col s4">
                                    <img src="https://www.thecocktaildb.com/images/ingredients/Lime-Medium.png" alt="" />
                                    <p>Juice of 1 lime</p>
                                </div>

                                <div className="col s4">
                                    <img src="https://www.thecocktaildb.com/images/ingredients/Sugar-Medium.png" alt="" />
                                    <p>2 tsp sugar</p>
                                </div>

                                <div className="col s4">
                                    <img src="https://www.thecocktaildb.com/images/ingredients/Mint-Medium.png" alt="" />
                                    <p>2 - 4 mint</p>
                                </div>

                                <div className="col s4">
                                    <img src="https://www.thecocktaildb.com/images/ingredients/Soda%20water-Medium.png" alt="" />
                                    <p>Soda water</p>
                                </div>

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