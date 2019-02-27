import React from 'react'

const UserForm = props => {
    const { firstName, lastName, phone, birth, about, email, favFood, handleChange, handleSubmit } = props

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} name="firstName" value={firstName} placeholder="First name"/>
            <input type="text" onChange={handleChange} name="lastName"  value={lastName}/>
            <input type="text" onChange={handleChange} name="email"     value={email}/>
            <input type="text" onChange={handleChange} name="birth"     value={birth}/>
            <input type="text" onChange={handleChange} name="favFood"   value={favFood}/>
            <input type="text" onChange={handleChange} name="phone"     value={phone}/>
            <textarea          onChange={handleChange} name="about"     value={about}/>
            <button>Submit</button>
        </form>
    )
}

export default UserForm