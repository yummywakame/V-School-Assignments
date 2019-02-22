import React from 'react'
import Friend from './Friend.js'

const FriendList = (props) => {
    console.log(props.data)
    
    const mappedFriends = props.data.map((item, key) => (
        <Friend 
            name={item.name} 
            age={item.age} 
            pets={item.pets}
            key={key} 
        />
    ))
    
    return (
        <div id="container">{mappedFriends}</div>
    )
   
}

export default FriendList