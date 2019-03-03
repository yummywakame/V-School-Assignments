import React, { Component } from 'react'

const ThemeContext = React.createContext()
class ThemeProvider extends Component {
    constructor(){
        super()
        this.state = {
            theme: localStorage.theme || "light"
        }
    }

    toggleTheme = () => {

        // set theme to opposite of previous theme
        this.setState(prevState => ({
            theme: (prevState.theme === "light") ? "dark" : "light"
        }))    
        
        // set localStorage theme to new theme
        localStorage.theme = this.state.theme
    
        // apply the theme to the body tag
        if (localStorage.theme === "light") {
            document.body.classList.remove('dark')
            document.body.classList.add('light')        
        } else {
            document.body.classList.remove('light')
            document.body.classList.add('dark')           
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