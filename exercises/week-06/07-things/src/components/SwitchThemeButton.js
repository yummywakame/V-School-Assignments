import React from 'react'
import { withTheme } from '../context/ThemeProvider.js'

const SwitchThemeButton = (props) => {
    return (
        <div className="waves-effect white-text waves-pink btn-flat theme-button secondary-content" onClick={props.toggleTheme}>
        <i className="material-icons right">colorize</i>
        {localStorage.theme === "dark" ? "switch to light theme" : "switch to dark theme"}
        </div>
    )
}

export default withTheme(SwitchThemeButton)