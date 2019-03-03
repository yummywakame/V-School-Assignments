import React, { Component } from 'react'
import LoadOverlay from './components/LoadOverlay.js'
import SwitchThemeButton from './components/SwitchThemeButton.js'
import ThingList from './components/ThingList.js'
import AddThing from './components/AddThing.js'
import { withThings } from './context/ThingProvider.js'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            imgUrl: ''
        }
    }

    componentDidMount() {
        // Call getThings from context on page load
        this.props.getThings()
        
        // Find out if theme previously saved in localStorage and apply it
        if (localStorage.theme === "dark") {
            document.body.classList.remove('light')
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
            document.body.classList.add('light')
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.addThing(this.state)
        // Reset the form input values for the user
        this.setState({
            title: '',
            imgUrl: ''
        })
    }

    render() {
        
        return (
                <div>
                    <LoadOverlay />
                    
                    <div className="container">
        
                        <h1>Cats &#x2764; Small Spaces</h1>
                        
                        <SwitchThemeButton />
                        
                        <AddThing
                            things={this.props.things}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                        />
        
                        <ThingList
                            things={this.props.things}
                            deleteThing={this.props.deleteThing}
                            editThing={this.props.editThing} 
                        />
                        
                    </div>
                </div>
        )
    }
}

export default withThings(App)