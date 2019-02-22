import React from 'react'

const Destination = (props) => {

    let dollarSigns

    if (props.price > 5000) {
        dollarSigns = "$$$"
    } else if (props.price > 1150) {
        dollarSigns = "$$"
    } else {
        dollarSigns = "$"
    }

    return (
        <div>
            <div className="photo" style={{ backgroundImage: "url(" + props.imgURL + ")" }}>
                <h2>{props.place}</h2>
            </div>
            <p>${props.price}</p>
            <p className="dollars">{dollarSigns}</p>
        </div>
    )
}

export default Destination