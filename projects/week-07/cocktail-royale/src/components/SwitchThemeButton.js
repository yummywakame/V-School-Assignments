import React from 'react'
import { withTheme } from '../context/ThemeProvider.js'

const SwitchThemeButton = (props) => {
    return (
        <div className="waves-effect white-text waves-pink btn-flat theme-button theme-picker" onClick={props.toggleTheme}>
            <i className="material-icons">colorize</i>
            {/* {localStorage.theme === "blue" ? "pink theme" : "blue theme"} */}
        </div>
    )
}

export default withTheme(SwitchThemeButton)