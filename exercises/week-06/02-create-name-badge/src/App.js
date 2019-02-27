import React from 'react'
import Form from './components/Form.js'
import Badges from './components/Badges.js'

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
        if ((this.state.firstName.length > 2)
            && (this.state.lastName.length > 2)
            && (this.state.email.length > 2)
            && (this.state.pob.length > 2)
            && (this.state.phone.length > 2)
            && (this.state.favFood.length > 2)
            && (this.state.about.length > 2)) {
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
                firstName: "",
                lastName: "",
                email: "",
                pob: "",
                phone: "",
                favFood: "",
                about: "",
                isEnabled: false,
                names: [
                    ...prevState.names,
                    nameObj]
            }
        })
    }

    render() {
        const { firstName, lastName, email, pob, phone, favFood, about, isEnabled } = this.state
        return (
            <div className="container">

                <Form
                    handleSubmit={this.handleSubmit} 
                    handleChange={this.handleChange}
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    pob={pob}
                    phone={phone}
                    favFood={favFood}
                    about={about}
                    isEnabled={isEnabled}
                />

                <Badges names={this.state.names} />

            </div>
        )
    }
}

export default App