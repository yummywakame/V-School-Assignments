import React from 'react'
import Badges from './Badges.js'
import Button from './Button.js'

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
            isEnabled: false,
            names: []
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        if ((this.state.firstName.length > 3)
            && (this.state.lastName.length > 3)
            && (this.state.email.length > 3)
            && (this.state.pob.length > 2)
            && (this.state.phone.length > 3)
            && (this.state.favFood.length > 3)
            && (this.state.about.length > 3)) {
            this.setState({
                isEnabled: true
            })
        } else {
            this.setState({
                isEnabled: false
            })
        }

    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        let colorBorder
        let colorHeader
    
        const num = Math.floor((Math.random() * 6) + 1)
        switch (num) {
            case 1:
                colorBorder = "badge"
                colorHeader = "header"
                break;
            case 2:
                colorBorder = "badge bg-color-red"
                colorHeader = "header hdr-color-red"
                break;
            case 3:
                colorBorder = "badge bg-color-orange"
                colorHeader = "header hdr-color-orange"
                break;
            case 4:
                colorBorder = "badge bg-color-yellow"
                colorHeader = "header hdr-color-yellow"
                break;
            case 5:
                colorBorder = "badge bg-color-green"
                colorHeader = "header hdr-color-green"
                break;
            case 6:
                colorBorder = "badge bg-color-turquoise"
                colorHeader = "header hdr-color-turquoise"
                break;
            default:
                colorBorder = "badge"
                colorHeader = "header"
        }

        const nameObj = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            pob: this.state.pob,
            phone: this.state.phone,
            favFood: this.state.favFood,
            about: this.state.about,
            colorBorder: colorBorder,
            colorHeader: colorHeader
        }

        this.setState(prevState => {
            return {
                firstName: "",
                lastName: "",
                email: "",
                pob: "",
                phone: "",
                favFood: "",
                about: "",
                colorBorder: "",
                colorHeader: "",
                isEnabled: false,
                names: [
                    ...prevState.names,
                    nameObj]
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
                                    value={this.state.firstName}
                                    onChange={this.handleChange}
                                    placeholder="First Name"
                                    type="text"
                                    required
                                />
                                <input
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange={this.handleChange}
                                    placeholder="Last Name"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="row">
                                <input
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    placeholder="Email"
                                    type="email"
                                    required
                                />
                                <input
                                    name="pob"
                                    value={this.state.pob}
                                    onChange={this.handleChange}
                                    placeholder="Place of Birth"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="row">
                                <input
                                    name="phone"
                                    value={this.state.phone}
                                    onChange={this.handleChange}
                                    placeholder="Mobile Number"
                                    type="number"
                                    required
                                />
                                <input
                                    name="favFood"
                                    value={this.state.favFood}
                                    onChange={this.handleChange}
                                    placeholder="Favorite Food"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="row wide">
                                <textarea
                                    name="about"
                                    value={this.state.about}
                                    onChange={this.handleChange}
                                    placeholder="About Me..."
                                    type="text"
                                    cols="40"
                                    rows="5"
                                    required
                                />
                            </div>
                            <Button isEnabled={this.state.isEnabled} />
                        </form>
                        <div className="footer"></div>
                    </div>
                </div>

                <Badges names={this.state.names} />

            </div>
        )
    }
}

export default App