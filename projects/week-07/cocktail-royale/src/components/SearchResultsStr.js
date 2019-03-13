import React, { Component } from 'react'
import { withListData } from '../context/BigDataProvider.js'
import DrinkThumb from './DrinkThumb.js'
import { Link } from 'react-router-dom'

class SearchResultsStr extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        // get only the data for the type of search
        this.props.setSearchType("string", this.props.match.params._id)
    }

    render() {
        let cocktailSeachResults
        if (this.props.cocktailsByStrList) {
        
            cocktailSeachResults = this.props.cocktailsByStrList.map((item) => 
            <DrinkThumb {...item} {...this.props} key={item.idDrink} />)
        } else {
            cocktailSeachResults = 
                <div id="no-search-results">
                    <p>We're sorry, we found no cocktail names matching your search. Our database is still growing, so please be patient.</p>
                    <p>In the mean time, you can try a less complex search like "Russian" to see all related cocktails.</p>
                    
                    <p>Try the <Link className="pink-text" to="/cocktail/roulette" onClick={() => this.props.getRandomCocktailDetails()}><i className="material-icons">toys</i>ROULETTE</Link> feature for a surprise cocktail!</p>
                </div>
        }
        
        return (
            <main className="container search-results" id="search-results">

                <h1 className="glow">Search Results</h1>
                <h2>Cocktails Named: {this.props.match.params._id.split('_').join(' ')}</h2>
                <div id="drink-list" className="row">

                    { cocktailSeachResults }

                </div>

            </main>
        )
    }
}

export default withListData(SearchResultsStr)