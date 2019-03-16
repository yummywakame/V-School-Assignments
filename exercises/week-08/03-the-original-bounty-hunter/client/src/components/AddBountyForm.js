import React from 'react'

const AddBountyForm = props => {
    const { handleSubmit, handleChange, firstName, lastName, bountyAmount, bountyType, isLiving, btnText } = props
    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                placeholder="First Name"
                required />
            <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required />
            <input
                type="number"
                name="bountyAmount"
                value={bountyAmount}
                onChange={handleChange}
                placeholder="Bounty Amount"
                required />
                
            <div className="selections">
                
                <div>
                    <label>
                        <input
                            type="radio"
                            name="bountyType"
                            value="jedi"
                            checked={bountyType === "jedi"}
                            onChange={handleChange}
                            className="radiobutton"
                        />
                        Jedi
                    </label>
                </div>
                
                <div>
                    <label>
                        <input
                            type="radio"
                            name="bountyType"
                            value="sith"
                            checked={bountyType === "sith"}
                            onChange={handleChange}
                            className="radiobutton"
                        />
                        Sith
                    </label>
                </div>
                
                <div>
                    <input
                        type="checkbox"
                        name="isLiving"
                        checked={isLiving}
                        onChange={handleChange} />
                    <label>Alive?</label>
                </div>
                
            </div>

            <button>{btnText}</button>
        </form>
    )
}

export default AddBountyForm