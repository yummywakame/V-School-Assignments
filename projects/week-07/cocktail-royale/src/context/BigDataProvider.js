import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

const BigDataContext = React.createContext()
const apiBaseUrl = "https://www.thecocktaildb.com/api/json/v2/"
const apiKey = process.env.REACT_APP_API_KEY

let ingredientsResp
let nonAlcoholicResp
let popularResp
let recentResp

class BigDataProvider extends Component {
    constructor(props){
        super(props)
        this.state = {
            componentList: ["ingredients"],
            setComponentList: this.setComponentList,
            cocktailID: props.match.params._id || '',
            cocktailDetail: [],
            ingredientsList: [],
            nonAlcoholicList: [],
            popularList: [],
            recentList: [],
            searchType: (props.match.params._id) ? 'cocktail' : '',
            errMsg: ''
        }
    }

    getListData = async (type) => {
        // console.log("this.props")
        // console.log(this.props)
        this.setState({
            errMsg: ''
        })
        try {
            ////////////////////////////////////////////////////////////////////////////
            // GET THE DATA 
            
            // Get ingredient list
            if (this.state.componentList.includes("ingredients")) {
                ingredientsResp   = await axios.get(`${apiBaseUrl}${apiKey}/list.php?i=list`)
            }
            // Get Non-Alcoholic Drink List
            if (this.state.componentList.includes("nonalcoholic")) {
                nonAlcoholicResp  = await axios.get(`${apiBaseUrl}${apiKey}/filter.php?a=Non_Alcoholic`)
            }
            // Get Popular Drink List
            if (this.state.componentList.includes("popular")) {
                popularResp  = await axios.get(`${apiBaseUrl}${apiKey}/popular.php`)
            }
            // Get Recent Drink List
            if (this.state.componentList.includes("recent")) {
                recentResp  = await axios.get(`${apiBaseUrl}${apiKey}/recent.php`)
            }
            // Get INDIVIDUAL Cocktail by ID
            if (this.state.searchType === "cocktail") {
                recentResp  = await axios.get(`${apiBaseUrl}${apiKey}/lookup.php?i=${this.state.cocktailID}`)
            }
            
            
            /////////////////////////////////////////////////////////////////////////
            // SAVE IT TO STATE
            
            // Save Ingredient List to state
            if (this.state.componentList.includes("ingredients")) {
                this.setState({
                    ingredientsList: ingredientsResp.data.drinks
                }) 
            }
            // Save Non-Alcoholic Drinks List to state
            if (this.state.componentList.includes("nonalcoholic")) {
                this.setState({
                    nonAlcoholicList: nonAlcoholicResp.data.drinks
                }) 
            }
            // Save Popular Drinks List to state
            if (this.state.componentList.includes("popular")) {
                this.setState({
                    popularList: popularResp.data.drinks
                }) 
            }
            // Save Recent Drinks List to state
            if (this.state.componentList.includes("recent")) {
                this.setState({
                    recentList: recentResp.data.drinks
                }) 
            }
            // Save SELECTED Cocktail to state
            if (this.state.searchType === "cocktail") {
                this.setState({
                    cocktailDetail: recentResp.data.drinks
                }, () => this.props.history.push(`/cocktail/${this.state.cocktailID}`)) 
            }
            
            ////////////////////////////////////////////////////////////////////////////
            // CLEAR STATE
            this.setState({ 
                searchType: ''
            })
            
        } catch(err){
			console.log('TCL: }catch -> err', err)
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
        }, () => this.getListData())
    }
    
    getCocktailDetails = (str, id) => {
        this.setState({ 
            searchType: str 
        })
        if (str === "cocktail") {
            this.setState({ 
                cocktailID: id 
            }, () => this.getListData())       
        }

    }

    render(){

        return (
            <BigDataContext.Provider
                value={{
                    ...this.state,
                    getListData: this.getListData,
                    getCocktailDetails: this.getCocktailDetails
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

export default withRouter(BigDataProvider)