import React, { Component } from 'react'
import { withListData } from '../context/BigDataProvider.js'
import DrinkThumb from './DrinkThumb.js'

class RecentList extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        // get only the data for components specified in componentList
        this.props.setComponentList(["recent"])
    }

    render() {

        return (
            <main className="container">

                <h1 className="glow">Latest Cocktails</h1>
                <div id="drink-list" className="row">

                    {this.props.recentList.map((item) => <DrinkThumb {...item} {...this.props} key={item.idDrink} />)}

                </div>

            </main>
        )
    }
}

export default withListData(RecentList)