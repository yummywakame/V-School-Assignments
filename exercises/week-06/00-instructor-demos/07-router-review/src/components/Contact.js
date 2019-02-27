import React from 'react'

const Contact = (props) => {
    return (
        <div className="contact">
            Contact
            <button onClick={props.history.goBack}>Back</button>
        </div>
    )
}

export default Contact