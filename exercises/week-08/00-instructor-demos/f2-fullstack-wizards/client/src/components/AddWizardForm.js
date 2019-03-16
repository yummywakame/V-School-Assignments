import React from 'react'

const AddWizardForm = props => {
    const { handleSubmit, handleChange, firstName, lastName, isGood, btnText } = props
    return (
       <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="firstName" 
                value={firstName} 
                onChange={handleChange}
                placeholder="First Name"/>
            <input 
                type="text" 
                name="lastName" 
                value={lastName} 
                onChange={handleChange}
                placeholder="Last Name"/>
            Check if Good:
            <input 
                type="checkbox" 
                name="isGood" 
                checked={isGood} 
                onChange={handleChange}/>
            <button>{btnText}</button>
        </form>
    )
}

export default AddWizardForm