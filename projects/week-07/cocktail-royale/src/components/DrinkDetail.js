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
        document.title = 'Cocktail Details | Cocktail Royale'
    }

    componentDidUpdate(prevProps) {
        const hadDrink = prevProps.cocktailDetail && prevProps.cocktailDetail.length
        const hasDrink = this.props.cocktailDetail && this.props.cocktailDetail.length
        if (!hadDrink && hasDrink) {
            document.title = `${this.props.cocktailDetail[0].strDrink} Recipe | Cocktail Royale`
        }
    }

    render() {
        // console.log("DrinkDetails Props:")
        // console.log(this.props)

        const selectedDrink = (this.props.cocktailDetail && this.props.cocktailDetail.length)
            ? this.props.cocktailDetail[0]
            : null

        if (!selectedDrink) {
            return (
                <main className="container">
                    <h1 className="glow">Loading Cocktail...</h1>
                </main>
            )
        }

        let {
            strDrink,
            strDrinkThumb,
            strGlass,
            strInstructions,
            strImageSource,
            strImageAttribution,
            strCreativeCommonsConfirmed,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient13,
            strIngredient14,
            strIngredient15,
            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
            strMeasure6,
            strMeasure7,
            strMeasure8,
            strMeasure9,
            strMeasure10,
            strMeasure11,
            strMeasure12,
            strMeasure13,
            strMeasure14,
            strMeasure15,
        } = selectedDrink

        const imageAttr = (strImageAttribution || '').trim()
        const imageSrc = (strImageSource || '').trim()
        const imageCcYes =
            String(strCreativeCommonsConfirmed || '')
                .trim()
                .toLowerCase() === 'yes'
        const imageSrcIsUrl = /^https?:\/\//i.test(imageSrc)
        const showImageCredit = Boolean(imageAttr || imageSrc || imageCcYes)

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
                                <img src={strDrinkThumb} alt={strDrink || 'Cocktail'} />
                                {showImageCredit && (
                                    <p className="drink-detail-image-credit" role="note">
                                        {imageAttr && <span>{imageAttr}</span>}
                                        {imageAttr && imageSrc && (
                                            <span className="drink-detail-image-credit__sep"> · </span>
                                        )}
                                        {imageSrc &&
                                            (imageSrcIsUrl ? (
                                                <a
                                                    className="drink-detail-image-credit__link"
                                                    href={imageSrc}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Source
                                                </a>
                                            ) : (
                                                <span>{imageSrc}</span>
                                            ))}
                                        {imageCcYes && (
                                            <>
                                                {(imageAttr || imageSrc) && (
                                                    <span className="drink-detail-image-credit__sep"> · </span>
                                                )}
                                                <span className="drink-detail-image-credit__cc">
                                                    Creative Commons
                                                </span>
                                            </>
                                        )}
                                    </p>
                                )}
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