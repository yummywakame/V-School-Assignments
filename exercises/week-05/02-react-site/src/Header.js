import React from 'react'

function Header() {
    return (
        <header>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon fill="whitesmoke" points="0,100 100,0 100,100" />
            </svg>
            <div className="outer-block">
                <div className="inner-block">
                    <h1>Emily Chadwick</h1>
                    <h2 className="strapline">Photographer</h2>
                </div>
            </div>
        </header>
    )
}

export default Header