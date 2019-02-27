import React from 'react'

const Services = (props) => {
    return (
        <div className="services">
            Services
            <button onClick={props.history.goBack}>Back</button>
        </div>
    )
}

export default Services