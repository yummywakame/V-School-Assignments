import React from 'react'
import Badge from './Badge.js'

const Badges = (props) => {
    const mappedBadges = props.people.map((
        firstName, 
        lastName, 
        email, 
        pob, 
        phone,
        favFood, 
        about, 
        key) =>
        <Badge
            key={key}
            firstName = {firstName}
            lastName = {lastName}
            email = {email}
            pob = {pob}
            phone = {phone}
            favFood = {favFood}
            about = {about}
        />
    )
    
    return (
        <div className="badge-container">
            {mappedBadges}
        </div>
    )
}

export default Badges