import React, { Component } from 'react'
import AddWizardForm from './components/AddWizardForm.js'
import WizardList from './components/WizardList.js'
import { withWizards } from './context/WizardProvider'

class App extends Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isGood: false
        }
    }

    componentDidMount(){
        this.props.getWizards()
    }

    handleChange = e => {
        const value = e.target.type === "checkbox"
                ? e.target.checked
                : e.target.value  
        this.setState({
            [e.target.name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newWizard = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            isGood: this.state.isGood
        }
        this.props.addWizard(newWizard)
        this.setState({ firstName: "", lastName: "", isGood: false }) 
    }

    render(){
        return (
            <div>
                <AddWizardForm 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    {...this.state}
                />
                <WizardList 
                    wizards={this.props.wizards}
                    deleteWizard={this.props.deleteWizard}/>
            </div>
        )
    }
}

export default withWizards(App)