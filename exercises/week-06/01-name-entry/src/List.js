import React from 'react'
import Name from './Name.js'

const List = (props) => {
    const mappedNames = props.names.map((
        name, 
        key) => 
        <Name
            key={key}
            name={name}
        />
    )
    
    return (
        <div className="name-list">
            <ol>{mappedNames}</ol>
        </div>
    )
}

export default List