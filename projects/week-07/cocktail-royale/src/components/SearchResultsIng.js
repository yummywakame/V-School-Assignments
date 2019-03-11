import React, { Component } from 'react'
import { withListData } from '../context/BigDataProvider.js'
import DrinkThumb from './DrinkThumb.js'

class SearchResultsIng extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        // get only the data for the type of search
        this.props.setSearchType("ingredients", this.props.match.params._id)
        console.log("Search Results: this.props")
        console.log(this.props)
    }

    render() {

        return (
            <main className="container" id="search-results">

                <h1 className="glow">Search Results</h1>
                <h2>Cocktails Containing: {this.props.match.params._id.split('_').join(' ')}</h2>
                <div id="drink-list" className="row">

                    {this.props.cocktailsByIngList.map((item) => <DrinkThumb {...item} {...this.props} key={item.idDrink} />)}

                </div>

            </main>
        )
    }
}

export default withListData(SearchResultsIng)