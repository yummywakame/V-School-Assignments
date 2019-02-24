import React from 'react'

const Die = (props) => {
    return(
        <div id={"dice" + props.num}><span className="no-display">{props.num}</span></div>
    )
}

export default Die