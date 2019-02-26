import React from 'react'

const Badge = (props) => {
    console.log("Badge: ")
    console.log(props)
    return (
        <div className="badge" key={props.key}>
            <div className="header"></div>
            <div className="row">
                <h1>{props.firstName + " " + props.lastName}</h1>
            </div>
            <div className="row">
                <div><p>Email: {props.email}</p></div>
                <div><p>Place of Birth: {props.pob}</p></div>
            </div>
            <div className="row">
                <div><p>Phone: {props.phone}</p></div>
                <div><p>Favorite Food: {props.favFood}</p></div>
            </div>
            <div className="row">
                <p>{props.about}</p>
            </div>
            <div className="footer"></div>
        </div>
    )
}

export default Badge