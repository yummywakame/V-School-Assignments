import React from 'react'

// Hides the contents until the stylesheet has loaded
// Sets background colour to theme saved in localStorage
const LoadOverlay = () => {
    return (
        <div id="loadOverlay" style={{backgroundColor: `${localStorage.theme === "dark" ? "#4b4b4b" : "whitesmoke"}`, position: `absolute`, top: `0px`, left: `0px`, width: `100%`, height: `100%`, zIndex: `2000`}}></div>
    )
}

export default LoadOverlay