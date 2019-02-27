import React from 'react'

const Button = (props) => {
    return (
        <div className="row">
            <button disabled={!props.isEnabled}>Submit</button>
        </div>
    )
}

export default Button




