import React from 'react'
import Box from './Box.js'

function List() {
    return (
        <div className="flex-container">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
            <Box />
        </div>
    )
}

export default List