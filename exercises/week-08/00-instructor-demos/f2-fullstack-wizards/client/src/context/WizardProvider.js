import React, { Component } from 'react'
import axios from 'axios'

const WizardContext = React.createContext()

class WizardProvider extends Component {
    constructor(){
        super()
        this.state = {
            wizards: []
        }
    }

    getWizards = () => {
        axios.get("/wizards").then(response => {      
            this.setState({
                wizards: response.data
            })
        })
    }

    addWizard = newWizard => {
        axios.post("/wizards", newWizard).then(response => {
            this.setState(prevState => ({
                wizards: [...prevState.wizards, response.data]
            }))
        })
    }

    deleteWizard = _id => {
        const wiz = this.state.wizards.find(wizard => wizard._id === _id)
        const answer = prompt(`Are you sure you want to delete ${wiz.firstName}?`)
        if(answer === "yes"){
            axios.delete(`/wizards/${_id}`).then(response => {
                this.setState(prevState => ({
                    wizards: prevState.wizards.filter(wizard => wizard._id !== _id)
                }))
            })
        } else {
            alert("Ok, why did you try in the first place then?")
        }
    }

    updateWizard = (_id, updates) => {
        axios.put(`/wizards/${_id}`, updates).then(response => {
            this.setState(prevState => ({
                wizards: prevState.wizards.map(wizard => wizard._id === _id ? response.data : wizard)
            }))
        })
    }


    render(){
        return (
            <WizardContext.Provider
                value={{
                    wizards: this.state.wizards,
                    getWizards: this.getWizards,
                    addWizard: this.addWizard,
                    deleteWizard: this.deleteWizard,
                    updateWizard: this.updateWizard
                }}>
                { this.props.children }
            </WizardContext.Provider>
        )
    }
}

export default WizardProvider


export const withWizards = C => props => (
    <WizardContext.Consumer>
        { value => <C {...props} {...value}/> }
    </WizardContext.Consumer>
)