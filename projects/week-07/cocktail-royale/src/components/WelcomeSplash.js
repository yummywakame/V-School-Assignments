import React from 'react'

// Welcome screen for first visit
const WelcomeSplash = () => {
    let hidden = false
    try {
        hidden = !!(window.localStorage.welcomeHidden || window.localStorage.theme)
    } catch {
        hidden = false
    }
    return (
        <div id="welcome" className={hidden ? "hidden" : ""} style={{ zIndex: 6000 }}></div>
    )
}

export default WelcomeSplash