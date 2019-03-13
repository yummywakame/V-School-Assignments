import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withListData } from '../context/BigDataProvider.js'
import { withTheme } from '../context/ThemeProvider.js'

class TopMenu extends Component {

    render() {
        const { setComponentList, getRandomCocktailDetails } = this.props

        return (
            <div role="navigation" className="tabs">
                <li className="tab" id="logo"><Link to="/" onClick={() => setComponentList(["popular"])}><div></div></Link></li>
                <li className="tab"><Link className="pink-text" to="/popular" onClick={() => setComponentList(["popular"])}><i className="material-icons">whatshot</i></Link></li>
                <li className="tab"><Link className="pink-text" to="/latest" onClick={() => setComponentList(["recent"])}><i className="material-icons">local_bar</i></Link></li>
                <li className="tab"><Link className="pink-text" to="/non-alcoholic" onClick={() => setComponentList(["nonalcoholic"])}><i className="material-icons">local_cafe</i></Link></li>
                <li className="tab"><Link className="pink-text" to="/cocktail/roulette" onClick={() => getRandomCocktailDetails()}><i className="material-icons">toys</i></Link></li>
                <li className="tab"><Link className="pink-text" to="/cocktail/roulette" onClick={this.props.toggleTheme}><i className="material-icons">format_paint</i></Link></li>
            </div>
        )
    }
}

export default withTheme(withListData(TopMenu))