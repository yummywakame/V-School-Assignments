import React from 'react'
import Box from './Box'

const BoxesContainer = props => {
    return (
        <div className="box-container">
            <Box bgColor={props.chicken.bgColor1} radius={props.chicken.radius1}/>
            <Box bgColor={props.chicken.bgColor2} radius={props.chicken.radius2}/>
            <Box bgColor={props.chicken.bgColor3} radius={props.chicken.radius3}/>
            <Box bgColor={props.chicken.bgColor4} radius={props.chicken.radius4}/>
        </div> 
    )
}

export default BoxesContainer