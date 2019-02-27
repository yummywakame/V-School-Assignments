import React from 'react'

const Badge = (props) => {

    return (
        <div className={props.colorBorder}>
            <div className={props.colorHeader}></div>
            <div className="row">
                <h1>{props.firstName + " " + props.lastName}</h1>
            </div>
            <div className="row">
                <div><p>Email: <a href={'mailto:' + props.email}>{props.email}</a></p></div>
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