import React from 'react'
import Button from './Button.js'

const Form = (props) => {
    const { firstName, lastName, email, pob, phone, favFood, about, isEnabled, handleSubmit, handleChange } = props
    
    return (
        <div className="form-container">
                    <div className="badge form-badge">
                        <div className="header form-header"></div>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <input
                                    name="firstName"
                                    value={firstName}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    type="text"
                                    pattern=".{3,30}"
                                    required
                                />
                                <input
                                    name="lastName"
                                    value={lastName}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    type="text"
                                    pattern=".{3,30}"
                                    required
                                />
                            </div>
                            <div className="row">
                                <input
                                    name="email"
                                    value={email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    type="email"
                                    pattern=".{3,250}"
                                    required
                                />
                                <input
                                    name="pob"
                                    value={pob}
                                    onChange={handleChange}
                                    placeholder="Place of Birth"
                                    type="text"
                                    pattern=".{3,30}"
                                    required
                                />
                            </div>
                            <div className="row">
                                <input
                                    name="phone"
                                    value={phone}
                                    onChange={handleChange}
                                    placeholder="Mobile Number"
                                    type="number"
                                    pattern=".{3,16}"
                                    required
                                />
                                <input
                                    name="favFood"
                                    value={favFood}
                                    onChange={handleChange}
                                    placeholder="Favorite Food"
                                    type="text"
                                    pattern=".{3,30}"
                                    required
                                />
                            </div>
                            <div className="row wide">
                                <textarea
                                    name="about"
                                    value={about}
                                    onChange={handleChange}
                                    placeholder="About Me..."
                                    type="text"
                                    cols="40"
                                    rows="5"
                                    required
                                />
                            </div>
                            <Button isEnabled={isEnabled} />
                        </form>
                        <div className="footer"></div>
                    </div>
                </div>
    )
}

export default Form