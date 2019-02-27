import React from 'react'

const About = (props) => {
    return (
        <div className="about">
            About
            <button onClick={props.history.goBack}>Back</button>
        </div>
    )
}

export default About