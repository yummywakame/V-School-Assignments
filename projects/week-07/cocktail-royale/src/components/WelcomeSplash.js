import React from 'react'
// Welcome screen for first visit
const WelcomeSplash = (props) => {

    return (
        <div id="welcome" style={{zIndex:`6000`}} className={(localStorage.welcomeHidden) ? 'hidden' : ''}></div>
    )
}

export default WelcomeSplash