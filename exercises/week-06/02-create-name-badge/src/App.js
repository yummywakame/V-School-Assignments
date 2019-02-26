import React from 'react'
import Badges from './Badges.js'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstNameInput: "",
            lastNameInput: "",
            emailInput: "",
            pobInput: "",
            phoneInput: "",
            favFoodInput: "",
            aboutInput: "",
            people: []
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

        this.setState(prevState => {
            return {
                firstNameInput: "",
                lastNameInput: "",
                emailInput: "",
                pobInput: "",
                phoneInput: "",
                favFoodInput: "",
                aboutInput: "",
                people: [
                    ...prevState.people,
                    this.state.firstNameInput,
                    this.state.lastNameInput,
                    this.state.emailInput,
                    this.state.pobInput,
                    this.state.phoneInput,
                    this.state.favFoodInput,
                    this.state.aboutInput]
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
                                    name="firstNameInput"
                                    value={this.firstNameInput}
                                    onChange={this.handleChange}
                                    placeholder="First Name"
                                    type="text"
                                    required
                                />
                                <input
                                    name="lastNameInput"
                                    value={this.lastNameInput}
                                    onChange={this.handleChange}
                                    placeholder="Last Name"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="row">
                                <input
                                    name="emailInput"
                                    value={this.emailInput}
                                    onChange={this.handleChange}
                                    placeholder="Email"
                                    type="email"
                                    required
                                />
                                <input
                                    name="pobInput"
                                    value={this.pobInput}
                                    onChange={this.handleChange}
                                    placeholder="Place of Birth"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="row">
                                <input
                                    name="phoneInput"
                                    value={this.phoneInput}
                                    onChange={this.handleChange}
                                    placeholder="Mobile Number"
                                    type="number"
                                    required
                                />
                                <input
                                    name="favFoodInput"
                                    value={this.favFoodInput}
                                    onChange={this.handleChange}
                                    placeholder="Favorite Food"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="row wide">
                                <textarea
                                    name="aboutInput"
                                    value={this.aboutInput}
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

                <Badges people={this.state.people} />

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