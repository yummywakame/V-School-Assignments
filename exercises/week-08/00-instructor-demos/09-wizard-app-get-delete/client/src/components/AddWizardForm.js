import React from 'react'

const AddWizardForm = props => {
    const { handleSubmit, handleChange, firstName, lastName, isGood } = props
    return (
       <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="firstName" 
                value={firstName} 
                onChange={handleChange}/>
            <input 
                type="text" 
                name="lastName" 
                value={lastName} 
                onChange={handleChange}/>
            Check if Good:
            <input 
                type="checkbox" 
                name="isGood" 
                value={isGood} 
                onChange={handleChange}/>
            <button>Add Wizard</button>
        </form>
    )
}

export default AddWizardForm