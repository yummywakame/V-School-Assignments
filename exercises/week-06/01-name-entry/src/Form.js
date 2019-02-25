import React from 'react'

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <h1>Add names to the list</h1>
            <input 
                name="nameInput" 
                value={props.nameInput} 
                onChange={props.handleChange} 
                type="text"
                tabindex="0"
            />
            <button tabindex="1">Add Name</button>
        </form >
    )
}

export default Form