import React from 'react'

function NameCard(props) {
    return (
        <div className={props.style}>
            <h5>Hi, my name is {props.name} and I am {props.age} years old.</h5>
            <p className={props.myStyle}>Color: {props.myObj.color}</p>
         </div>
    )
}

export default NameCard