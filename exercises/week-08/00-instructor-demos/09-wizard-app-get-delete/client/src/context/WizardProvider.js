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
        axios.delete(`/wizards/${_id}`).then(response => {
            alert(response.data)
            this.setState(prevState => ({
                wizards: prevState.wizards.filter(wizard => wizard._id !== _id)
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
                    deleteWizard: this.deleteWizard
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