import React, { Component } from 'react'
import AddBountyForm from './AddBountyForm.js'


class Bounty extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editToggle: false,
            firstName: props.firstName,
            lastName: props.lastName,
            isLiving: props.isLiving,
            bountyAmount: props.bountyAmount,
            bountyType: props.bountyType
        }
    }

    toggler = () => {
        this.setState(prevState => ({
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
        const bountyUpdates = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            isLiving: this.state.isLiving,
            bountyAmount: this.state.bountyAmount,
            bountyType: this.state.bountyType
        }
        this.props.updateBounty(this.props._id, bountyUpdates)
        this.toggler()
    }

    render() {
        const { firstName, lastName, isLiving, bountyAmount, bountyType, _id, deleteBounty } = this.props
        return (
      
            <div key={_id} className={`card ${bountyType} ${(!isLiving) ? "deceased" : ""}`}>
                {!this.state.editToggle ?
                    <>
                        <h2>{firstName} {lastName}</h2>
                        <p>Bounty: ${bountyAmount.toString()}</p>
                        <button className="delete" onClick={() => deleteBounty(_id)}>Delete</button>
                        <button className="edit" onClick={this.toggler}>Edit</button>
                    </>
                    :
                    <>
                        <div className={`close ${(bountyType === "jedi") ? "close-light" : "close-dark"}`} onClick={this.toggler}><span className="hidden">Close</span></div>
                        <AddBountyForm
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            btnText="Submit Edit"
                            {...this.state}
                        />
                        
                    </>
                }
            </div>
        )
    }
}

export default Bounty