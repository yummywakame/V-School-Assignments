import React from 'react'

// Hides the contents until the stylesheet has loaded
// Sets background colour to theme saved in localStorage
const LoadOverlay = () => {
    return (
        <div id="loadOverlay" style={{backgroundColor:`#000000fc`, position:`absolute`, top:`0px`, left:`0px`, width:`100vw`, height:`100vh`, zIndex:2000}}></div>
    )
}

export default LoadOverlay