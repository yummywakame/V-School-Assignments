import React from 'react'

// Hides the contents until the stylesheet has loaded
// Sets background colour to theme saved in localStorage
const LoadOverlay = () => {
    return (
        <>
            <div id="loadOverlay1" style={{backgroundColor:`${localStorage.theme === "blue" ? "#1a237e" : "#660033"}`, zIndex:`5000`, position:`absolute`, top:`0px`, left:`0px`, width:`100vw`, height:`100vh`, ZIndex:`2000`}}></div>
            <div id="loadOverlay2" style={{backgroundColor:`${localStorage.theme === "blue" ? "#1a237e" : "#660033"}`, zIndex:`5000`, position:`absolute`, top:`0px`, left:`0px`, width:`100vw`, height:`100vh`, ZIndex:`2000`}}></div>
        </>
    )
}

export default LoadOverlay