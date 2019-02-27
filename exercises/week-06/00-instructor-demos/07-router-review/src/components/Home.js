import React from 'react'

const Home = (props) => {
    console.log(props)
    return (
        <div className="home">
            Home
            <button onClick={props.history.goBack}>Back</button>
        </div>
    )
}

export default Home