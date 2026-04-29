import React, { Component } from 'react'
import { withListData } from '../context/BigDataProvider.js'
import SearchDrinkList from './SearchDrinkList.js'

class NonAlcoholicList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.setComponentList(['nonalcoholic'])
        document.title = 'Non-Alcoholic Drinks | Cocktail Royale'
    }

    render() {
        const nonAlcoholicDrinks = Array.isArray(this.props.nonAlcoholicList)
            ? this.props.nonAlcoholicList
            : []

        return (
            <main className="container">
                <h1 className="glow">Non-Alcoholic Drinks</h1>
                <div id="drink-list" className="row">
                    <SearchDrinkList
                        items={nonAlcoholicDrinks}
                        drinkThumbProps={this.props}
                    />
                </div>
            </main>
        )
    }
}

export default withListData(NonAlcoholicList)
