import React, { Component } from 'react'

const ThemeContext = React.createContext()
class ThemeProvider extends Component {
    constructor(){
        super()
        this.state = {
            theme: localStorage.theme || "blue"
        }
    }

    toggleTheme = () => {

        // set theme to opposite of previous theme
        this.setState(prevState => ({
            theme: (prevState.theme === "blue") ? "pink" : "blue"
        }))    
        
        // set localStorage theme to new theme
        localStorage.theme = this.state.theme
    
        // apply the theme to the body tag
        if (localStorage.theme === "blue") {
            document.body.classList.remove('pink-theme')
            document.body.classList.add('blue-theme')        
        } else {
            document.body.classList.remove('blue-theme')
            document.body.classList.add('pink-theme')           
        }
    }

    render(){

        return (
            <ThemeContext.Provider 
                value={{
                    toggleTheme: this.toggleTheme
                }}>
                
                { this.props.children }
                
            </ThemeContext.Provider>
        )
    }
}

export const withTheme = (C) => (props) => (
    <ThemeContext.Consumer>
        { value => <C {...value} {...props}/> }
    </ThemeContext.Consumer>
)

export default ThemeProvider