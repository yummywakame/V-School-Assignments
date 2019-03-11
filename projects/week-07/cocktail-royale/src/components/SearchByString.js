import React, { Component } from 'react'
import { withListData } from '../context/BigDataProvider.js'
import { Input, Button } from 'react-materialize'

class SearchByString extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state = {
            searchString: ''
        }
    }
    
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }


    render() {
        const { handleSubmitStringSearch } = this.props

        return (
            <div className="col s12 m6">

                <form onSubmit={handleSubmitStringSearch}>
                    <div className="col s12">

                        <div className="search-wrapper col s10">
                            <div className="input-field">
                                <Input s={12} type="text" name="searchString" value={this.state.searchString} placeholder="Cocktail name..." onChange={this.handleChange} required />
                            </div>
                        </div>

                        <div className="button-wrapper col s2">
                            <Button waves='light' className="pink" icon='search'></Button>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}

export default withListData(SearchByString)