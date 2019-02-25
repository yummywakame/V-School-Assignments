import React from 'react'

const Box = (props) => {
    return (
        <div style={{backgroundColor: props.color}} className="box" onClick={props.handleChangeColor}>
            {props.count}
        </div>
    )
}

export default Box;