import React, { Component } from 'react'
import UserForm from './components/UserForm.js'
import NameBadgeList from './components/NameBadgeList.js'
import './style.css'

// Form Component
    // 7 inputs, <form>, button
    // handleSubmit, handleChange
    // constructor & state

// NameBadgeList
// NameBadge

class App extends Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            birth: '',
            favFood: '',
            phone: '',
            about: '',
            badges: []
        }
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newBadge = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            birth: this.state.birth,
            favFood: this.state.favFood,
            phone: this.state.phone,
            about: this.state.about
        }

        this.setState(prevState => {
            return {
                badges: [newBadge, ...prevState.badges],
                firstName: '',
                lastName: '',
                email: '',
                birth: '',
                favFood: '',
                phone: '',
                about: '',
            }
        })
    }

    render(){
        const { firstName, lastName, phone, birth, about, email, favFood, badges } = this.state
        return (
            <div className="app-container">
               <UserForm 
                    handleSubmit={this.handleSubmit} 
                    handleChange={this.handleChange}
                    firstName={firstName}
                    lastName={lastName}
                    phone={phone}
                    birth={birth}
                    about={about}
                    email={email}
                    favFood={favFood}/>
                <NameBadgeList 
                    badges={badges}/>
            </div>
        )
    }
}

export default App