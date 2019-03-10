import React from 'react'
// Welcome screen for first visit
const WelcomeSplash = (props) => {

    return (
        <div id="welcome" className={(props.welcomeHidden) ? 'hidden' : ''}></div>
    )
}

export default WelcomeSplash