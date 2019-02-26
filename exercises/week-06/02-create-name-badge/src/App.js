import React from 'react'
import Badges from './Badges.js'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            pob: "",
            phone: "",
            favFood: "",
            about: "",
            names: []
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        const nameObj = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            pob: this.state.pob,
            phone: this.state.phone,
            favFood: this.state.favFood,
            about: this.state.about
        }

        this.setState(prevState => {
            return {
                names: [
                    ...prevState.names,
                    nameObj],
                firstName: "",
                lastName: "",
                email: "",
                pob: "",
                phone: "",
                favFood: "",
                about: ""
            }
        })
    }

    render() {
        return (
            <div className="container">

                <div className="form-container">
                    <div className="badge">
                        <div className="header"></div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <input
                                    name="firstName"
                                    value={this.firstName}
                                    onChange={this.handleChange}
                                    placeholder="First Name"
                                    type="text"
                                    required
                                />
                                <input
                                    name="lastName"
                                    value={this.lastName}
                                    onChange={this.handleChange}
                                    placeholder="Last Name"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="row">
                                <input
                                    name="email"
                                    value={this.email}
                                    onChange={this.handleChange}
                                    placeholder="Email"
                                    type="email"
                                    required
                                />
                                <input
                                    name="pob"
                                    value={this.pob}
                                    onChange={this.handleChange}
                                    placeholder="Place of Birth"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="row">
                                <input
                                    name="phone"
                                    value={this.phone}
                                    onChange={this.handleChange}
                                    placeholder="Mobile Number"
                                    type="number"
                                    required
                                />
                                <input
                                    name="favFood"
                                    value={this.favFood}
                                    onChange={this.handleChange}
                                    placeholder="Favorite Food"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="row wide">
                                <textarea
                                    name="about"
                                    value={this.about}
                                    onChange={this.handleChange}
                                    placeholder="About Me..."
                                    type="text"
                                    cols="40"
                                    rows="5"
                                    required
                                />
                            </div>
                            <div className="row">
                                <button>Submit</button>
                            </div>
                        </form>
                        <div className="footer"></div>
                    </div>
                </div>

                <Badges names={this.state.names} />

                <div className="badge-container">
                    <div className="badge">
                        <div className="header"></div>
                        <div className="row">
                            <h1>John Smith</h1>
                        </div>
                        <div className="row">
                            <div><p><strong>Email:</strong> email@email.com</p></div>
                            <div><p><strong>Place of Birth:</strong> Cape Town</p></div>
                        </div>
                        <div className="row">
                            <div><p><strong>Phone:</strong> 1234567890</p></div>
                            <div><p><strong>Favorite Food:</strong> Pizza</p></div>
                        </div>
                        <div className="row">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum tempora perferendis atque inventore rerum delectus veniam corrupti quod, minus ea dignissimos totam voluptatibus nam, suscipit quis ratione asperiores. Praesentium, expedita!</p>
                        </div>
                        <div className="footer"></div>
                    </div>

                    {/* <div className="badge">
                        <div className="header"></div>
                        <div className="row">
                            <h1>John Smith</h1>
                        </div>
                        <div className="row">
                            <div><p><strong>Email:</strong> email@email.com</p></div>
                            <div><p><strong>Place of Birth:</strong> Cape Town</p></div>
                        </div>
                        <div className="row">
                            <div><p><strong>Phone:</strong> 1234567890</p></div>
                            <div><p><strong>Favorite Food:</strong> Pizza</p></div>
                        </div>
                        <div className="row">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum tempora perferendis atque inventore rerum delectus veniam corrupti quod, minus ea dignissimos totam voluptatibus nam, suscipit quis ratione asperiores. Praesentium, expedita!</p>
                        </div>
                        <div className="footer"></div>
                    </div>

                    <div className="badge">
                        <div className="header"></div>
                        <div className="row">
                            <h1>John Smith</h1>
                        </div>
                        <div className="row">
                            <div><p><strong>Email:</strong> email@email.com</p></div>
                            <div><p><strong>Place of Birth:</strong> Cape Town</p></div>
                        </div>
                        <div className="row">
                            <div><p><strong>Phone:</strong> 1234567890</p></div>
                            <div><p><strong>Favorite Food:</strong> Pizza</p></div>
                        </div>
                        <div className="row">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum tempora perferendis atque inventore rerum delectus veniam corrupti quod, minus ea dignissimos totam voluptatibus nam, suscipit quis ratione asperiores. Praesentium, expedita!</p>
                        </div>
                        <div className="footer"></div>
                    </div> */}
                </div>


            </div>
        )
    }

}

export default App