import React from 'react'
import Friend from './Friend.js'

// name, age, favColor
const Person = (props, key) => {
    console.log(props)
    
    const mappedFriends = props.friends.map((friend, key) => 
        <Friend name={friend} key={key} />
    )
    
    return (
        <div key={key} style= {{ backgroundColor: props.favColor }}>
            <h2>{props.name}</h2>
            <p>My age is: {props.age}</p>
            <p>My friends are:</p>
            <ul>
                {mappedFriends}
            </ul>
        </div>
    )
}

export default Person