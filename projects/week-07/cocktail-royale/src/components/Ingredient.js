import React, { Component } from 'react'
import { withListData } from '../context/BigDataProvider.js'

class Ingredient extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }


    render() {
        const { description, image } = this.props

        return (
            <div className="col s4">
                <img src={image} alt="" />
                <p>{description}</p>
            </div>
        )
    }
}

export default withListData(Ingredient)