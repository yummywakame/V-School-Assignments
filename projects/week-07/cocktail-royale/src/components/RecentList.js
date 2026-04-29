import React, { Component } from 'react'
import { withListData } from '../context/BigDataProvider.js'
import SearchDrinkList from './SearchDrinkList.js'

class RecentList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.setComponentList(['recent'])
        document.title = 'Latest Cocktails | Cocktail Royale'
    }

    render() {
        const recentDrinks = Array.isArray(this.props.recentList) ? this.props.recentList : []

        return (
            <main className="container">
                <h1 className="glow">Latest Cocktails</h1>
                <div id="drink-list" className="row">
                    <SearchDrinkList items={recentDrinks} drinkThumbProps={this.props} />
                </div>
            </main>
        )
    }
}

export default withListData(RecentList)
