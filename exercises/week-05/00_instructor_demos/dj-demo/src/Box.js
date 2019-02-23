import React from 'react'

const Box = props => {

    const boxStyle = {
        width: 200,
        height: 200,
        backgroundColor: props.bgColor,
        border: '1px solid black',
        borderRadius: `${props.radius}%`
    }

    return (
        <div style={boxStyle}></div>
    )
}

export default Box;