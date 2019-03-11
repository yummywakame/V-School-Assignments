import React from 'react'

// Welcome screen for first visit
const WelcomeSplash = (props) => {
    return (
        <div id="welcome" className={(localStorage.welcomeHidden || localStorage.theme) ? 'hidden' : ''} style={{ ZIndex:`6000`}}></div>
    )
}

export default WelcomeSplash