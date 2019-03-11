import React, { Component } from 'react'
import { withListData } from '../context/BigDataProvider.js'

class DrinkThumb extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }


    render() {
        const { idDrink, strDrinkThumb, strDrink, getCocktailDetails } = this.props

        return (
            <div className="col s12 m6 l4" onClick={() => { getCocktailDetails("cocktail", idDrink) }}>
                <div className="card waves-effect black">
                    <div className="card-image">
                        <img src={strDrinkThumb} alt="{strDrink}" />
                    </div>
                    <div className="card-content">
                        <h2>{strDrink}</h2>
                    </div>
                </div>

            </div>
        )
    }
}

export default withListData(DrinkThumb)

