import React, { Component } from 'react'
import { withListData } from './context/BigDataProvider.js'

class App extends Component {   
    componentDidMount(){
        this.props.getListData()
    }

    render(){
        console.log(this.props)
        return (
            
            <div>
                <h2>Non-Alcoholic Drink List:</h2>
                <div>{this.props.nonAlcoholicList.map((item, key) => <p key={key}>{item.strDrink}</p>)}</div>
                <h2>Ingredient List:</h2>
                <div>{this.props.ingredientsList.map((item, key) => <p key={key}>{item.strIngredient1}</p>)}</div>
            </div>
        )
    }
}

export default withListData(App)