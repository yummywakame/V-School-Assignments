import React, { Component } from 'react'
import axios from 'axios'

const BigDataContext = React.createContext()
const apiBaseUrl = "https://www.thecocktaildb.com/api/json/v2/"
const apiKey = process.env.REACT_APP_API_KEY

let ingredientsResp
let nonAlcoholicResp
let popularResp
let recentResp

class BigDataProvider extends Component {
    constructor(){
        super()
        this.state = {
            componentList: ["ingredients", "popular"],
            setComponentList: this.setComponentList,
            ingredientsList: [],
            nonAlcoholicList: [],
            popularList: [],
            recentList: [],
            cocktailID: '',
            searchType: '',
            errMsg: '',
            cocktailDetail: []
        }
    }

    getListData = async () => {
        // console.log("this.props")
        // console.log(this.props)
        this.setState({
            errMsg: ''
        })
        try {
            //////// get the data
            // search by ingredient
            if (this.state.componentList.includes("ingredients")) {
                ingredientsResp   = await axios.get(`${apiBaseUrl}${apiKey}/list.php?i=list`)
            }
            if (this.state.componentList.includes("nonalcoholic")) {
                nonAlcoholicResp  = await axios.get(`${apiBaseUrl}${apiKey}/filter.php?a=Non_Alcoholic`)
            }
            if (this.state.componentList.includes("popular")) {
                popularResp  = await axios.get(`${apiBaseUrl}${apiKey}/popular.php`)
            }
            if (this.state.componentList.includes("recent")) {
                recentResp  = await axios.get(`${apiBaseUrl}${apiKey}/recent.php`)
            }
            
            // search by cocktail ID
            if (this.state.searchType === "cocktail") {
                recentResp  = await axios.get(`${apiBaseUrl}${apiKey}/lookup.php?i=${this.state.cocktailID}`)
            }
            
            // Save it to state
            if (this.state.componentList.includes("ingredients")) {
                this.setState({
                    ingredientsList: ingredientsResp.data.drinks
                }) 
            }
            if (this.state.componentList.includes("nonalcoholic")) {
                this.setState({
                    nonAlcoholicList: nonAlcoholicResp.data.drinks
                }) 
            }
            if (this.state.componentList.includes("popular")) {
                this.setState({
                    popularList: popularResp.data.drinks
                }) 
            }
            if (this.state.componentList.includes("recent")) {
                this.setState({
                    recentList: recentResp.data.drinks
                }) 
            }
            if (this.state.searchType === "cocktail") {
                this.setState({
                    cocktailDetail: recentResp.data.drinks
                }) 
            }
            
        } catch(err){
            // handle error thrown from ANY request in the TRY
            // if(!this.state.ingredientsList.length || !this.state.nonAlcoholicList.length){
            //     this.setState({
            //         errMsg: "The CocktailDB server is overloaded. Please try again later."
            //     })
            // }
            // console.log(err)
        } 
    }
    
    setComponentList = (arr) => {
        this.setState({ 
            componentList: arr 
        })
    }
    
    runSearch = (str, id) => {
        this.setState({ 
            searchType: str 
        })
        if (str === "cocktail") {
            this.setState({ 
                cocktailID: id 
            })       
        }
        this.getListData()

    }

    render(){

        return (
            <BigDataContext.Provider
                value={{
                    ...this.state,
                    getListData: this.getListData,
                    runSearch: this.runSearch
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