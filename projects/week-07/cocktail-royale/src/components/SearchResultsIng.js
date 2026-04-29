import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withListData } from '../context/BigDataProvider.js'
import SearchDrinkList from './SearchDrinkList.js'

class SearchResultsIng extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.setSearchType('ingredients', this.props.match.params._id)
        document.title = 'Search Results | Cocktail Royale'
    }

    render() {
        const list = this.props.cocktailsByIngList
        let body

        if (list === null || list === undefined) {
            body = (
                <div className="search-results-loading" role="status" aria-live="polite">
                    Searching…
                </div>
            )
        } else if (list.length === 0) {
            body = (
                <div id="no-search-results">
                    <p>
                        No cocktails in the database list that ingredient right now. Try another
                        ingredient or check the spelling.
                    </p>
                    <p>
                        Or try{' '}
                        <Link
                            className="pink-text"
                            to="/cocktail/roulette"
                            onClick={() => this.props.getRandomCocktailDetails()}
                        >
                            <span className="material-symbols-outlined">toys_fan</span>
                            ROULETTE
                        </Link>{' '}
                        for a random pick.
                    </p>
                </div>
            )
        } else {
            body = <SearchDrinkList items={list} drinkThumbProps={this.props} />
        }

        return (
            <main
                key={this.props.match.params._id}
                className="container search-results"
                id="search-results"
            >
                <h1 className="glow">Search Results</h1>
                <h2>Cocktails Containing: {this.props.match.params._id.split('_').join(' ')}</h2>
                <div id="drink-list" className="row">
                    {body}
                </div>
            </main>
        )
    }
}

export default withListData(SearchResultsIng)
