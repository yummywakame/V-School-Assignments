import React from 'react'

// A function that returns JSX
const Display = props => {


    return (
        <h1>
            {(props.greeting === "Hello")
                ? "The greeting is Hello!"
                : "The greeting is Goodbye!"}
        </h1>
    )
}

export default Display