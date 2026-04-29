import React, { Component } from 'react'

const ThemeContext = React.createContext()
class ThemeProvider extends Component {
    constructor(){
        super()
        this.state = {
            theme: localStorage.theme || "pink"
        }
    }

    toggleTheme = () => {
        this.setState(prevState => {
            const nextTheme = prevState.theme === "pink" ? "blue" : "pink"
            localStorage.theme = nextTheme

            if (nextTheme === "blue") {
                document.body.classList.remove('pink-theme')
                document.body.classList.add('blue-theme')
            } else {
                document.body.classList.remove('blue-theme')
                document.body.classList.add('pink-theme')
            }

            return { theme: nextTheme }
        })
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