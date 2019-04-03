import React, { Component } from 'react'
import AddBountyForm from './components/AddBountyForm.js'
import BountyList from './components/BountyList.js'
import { withBounties } from './context/BountyProvider'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            isLiving: true,
            bountyAmount: undefined,
            bountyType: "jedi"
        }
    }

    componentDidMount() {
        this.props.getBounties()
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newBounty = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            isLiving: this.state.isLiving,
            bountyAmount: this.state.bountyAmount,
            bountyType: this.state.bountyType
        }
        this.props.addBounty(newBounty)
        this.setState(
            {
                firstName: "",
                lastName: "",
                isLiving: true,
                bountyAmount: undefined,
                bountyType: "jedi"
            }
        )
    }

    render() {
        console.log("this.props.bounties")
        console.log(this.props.bounties)
        console.log("this.state.isLiving")
        console.log(this.state.isLiving)
        console.log("this.state.bountyType")
        console.log(this.state.bountyType)

        return (
            <div>

                <div id="header-container">

                    <div className="vertical-align">
                        <h1><span className="hidden">The Original Bounty Hunter</span></h1>
                    </div>

                    <div className="card" id="add-form">
                        <AddBountyForm
                            btnText="Add Bounty"
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            {...this.state}
                        />
                    </div>

                </div>

                <div id="container">

                    <BountyList
                        bounties={this.props.bounties}
                        deleteBounty={this.props.deleteBounty}
                        updateBounty={this.props.updateBounty} />
                </div>

            </div>
        )
    }
}

export default withBounties(App)