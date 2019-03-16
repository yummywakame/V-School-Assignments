import React, { Component } from 'react'
import AddWizardForm from './AddWizardForm.js'


class Wizard extends Component {
    constructor(props){
        super(props)
        this.state = {
            editToggle: false,
            firstName: props.firstName,
            lastName: props.lastName,
            isGood: props.isGood
        }
    }

    toggler = () => {
        this.setState(prevState =>  ({
            editToggle: !prevState.editToggle
        }))
    }

    handleChange = e => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        this.setState({
            [e.target.name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const wizardUpdates = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            isGood: this.state.isGood
        }
        this.props.updateWizard(this.props._id, wizardUpdates)
        this.toggler()
    }

    render(){
        const { firstName, lastName, isGood, _id, deleteWizard } = this.props
        return (
            <div style={isGood ? {backgroundColor: "cornflowerblue", height: 100} : {backgroundColor: "firebrick", height: 100}}>
                {!this.state.editToggle ?
                    <>
                        <h1>{firstName} {lastName}</h1>
                        <button onClick={() => deleteWizard(_id)}>Delete</button>
                        <button onClick={this.toggler}>Edit</button>
                    </>
                    :
                    <>
                        <AddWizardForm 
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            btnText="Submit Edit"
                            {...this.state}
                        />
                        <button onClick={this.toggler}>Close</button>
                    </>
                }
            </div>
        )
    }
}

export default Wizard