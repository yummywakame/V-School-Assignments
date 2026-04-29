import React, { Component } from 'react'
import { withListData } from '../context/BigDataProvider.js'
import SearchDrinkList from './SearchDrinkList.js'
import { Link } from 'react-router-dom'

class SearchResultsStr extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        // get only the data for the type of search
        this.props.setSearchType("string", this.props.match.params._id)
        // set the page title
        document.title = 'Search Results | Cocktail Royale'
    }

    render() {
        const list = this.props.cocktailsByStrList
        let cocktailSeachResults

        if (list === null || list === undefined) {
            cocktailSeachResults = (
                <div className="search-results-loading" role="status" aria-live="polite">
                    Searching…
                </div>
            )
        } else if (list.length === 0) {
            cocktailSeachResults = (
                <div id="no-search-results">
                    <p>
                        We did not find any cocktail names matching that search. The database is
                        always growing, so try a shorter or broader term (for example,{' '}
                        <span className="pink-text">&quot;Russian&quot;</span>).
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
            cocktailSeachResults = (
                <SearchDrinkList items={list} drinkThumbProps={this.props} />
            )
        }

        return (
            <main
                key={this.props.match.params._id}
                className="container search-results"
                id="search-results"
            >
                <h1 className="glow">Search Results</h1>
                <h2>Cocktails Named: {this.props.match.params._id.split('_').join(' ')}</h2>
                <div id="drink-list" className="row">
                    {cocktailSeachResults}
                </div>
            </main>
        )
    }
}

export default withListData(SearchResultsStr)