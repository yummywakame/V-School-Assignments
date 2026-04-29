import React, { Component } from 'react'
import { withListData } from '../context/BigDataProvider.js'
import SearchDrinkList from './SearchDrinkList.js'

class PopularList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.setComponentList(['popular'])
        document.title = 'Popular Cocktails | Cocktail Royale'
    }

    render() {
        const popularDrinks = Array.isArray(this.props.popularList)
            ? [...this.props.popularList].sort((a, b) =>
                  (a?.strDrink || '').localeCompare(b?.strDrink || '')
              )
            : []

        return (
            <main className="container">
                <h1 className="glow">Popular Cocktails</h1>
                <div id="drink-list" className="row">
                    <SearchDrinkList items={popularDrinks} drinkThumbProps={this.props} />
                </div>
            </main>
        )
    }
}

export default withListData(PopularList)
