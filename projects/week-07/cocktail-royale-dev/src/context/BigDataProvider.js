import React, { Component } from 'react'
import axios from 'axios'

const BigDataContext = React.createContext()
const apiBaseUrl = "https://www.thecocktaildb.com/api/json/v2/"
const apiKey = process.env.REACT_APP_API_KEY

class BigDataProvider extends Component {
    constructor(){
        super()
        this.state = {
            ingredientsList: [],
            nonAlcoholicList: [],
            popularList: [],
            recentList: [],
            errMsg: ''
        }
    }

    getListData = async () => {
        
        this.setState({
            errMsg: ''
        })
        try {
            const ingredientsResp   = await axios.get(`${apiBaseUrl}${apiKey}/list.php?i=list`)
            const nonAlcoholicResp  = await axios.get(`${apiBaseUrl}${apiKey}/filter.php?a=Non_Alcoholic`)
            const popularResp  = await axios.get(`${apiBaseUrl}${apiKey}/popular.php`)
            const recentResp  = await axios.get(`${apiBaseUrl}${apiKey}/recent.php`)
            
            this.setState({
                ingredientsList: ingredientsResp.data.drinks,
                nonAlcoholicList: nonAlcoholicResp.data.drinks,
                popularList: popularResp.data.drinks,
                recentList: recentResp.data.drinks
            })
            
        } catch(err){
            // handle error thrown from ANY request in the TRY
            if(!this.state.ingredientsList.length || !this.state.nonAlcoholicList.length){
                this.setState({
                    errMsg: "The CocktailDB server is overloaded. Please try again later."
                })
            }
            console.log(err)
        } 
    }


    render(){

        return (
            <BigDataContext.Provider
                value={{
                    ...this.state,
                    getListData: this.getListData
                }}>
                { this.props.children }
            </BigDataContext.Provider>
        )
    }
}


export const withListData = C => props => (
    <BigDataContext.Consumer>
        { value => <C {...props} {...value}/>}
    </BigDataContext.Consumer>
)

export default BigDataProvider