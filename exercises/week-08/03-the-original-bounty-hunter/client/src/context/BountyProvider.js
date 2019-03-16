import React, { Component } from 'react'
import axios from 'axios'

const BountyContext = React.createContext()

class BountyProvider extends Component {
    constructor(){
        super()
        this.state = {
            bounties: []
        }
    }
    
    getBounties = () => {
        axios.get("/bounty/v1").then(response => {      
            this.setState({
                bounties: response.data
            })
        })
    }

    addBounty = newBounty => {
        axios.post("/bounty/v1", newBounty).then(response => {
            this.setState(prevState => ({
                bounties: [...prevState.bounties, response.data]
            }))
        })
    }

    deleteBounty = _id => {
            axios.delete(`/bounty/v1/${_id}`).then(response => {
                this.setState(prevState => ({
                    bounties: prevState.bounties.filter(bounty => bounty._id !== _id)
                }))
            })
        
    }

    updateBounty = (_id, updates) => {
        axios.put(`/bounty/v1/${_id}`, updates).then(response => {
            this.setState(prevState => ({
                bounties: prevState.bounties.map(bounty => bounty._id === _id ? response.data : bounty)
            }))
        })
    }

    render(){
        return (
            <BountyContext.Provider
                value={{
                    bounties: this.state.bounties,
                    getBounties: this.getBounties,
                    addBounty: this.addBounty,
                    deleteBounty: this.deleteBounty,
                    updateBounty: this.updateBounty
                }}>
                { this.props.children }
            </BountyContext.Provider>
        )
    }
}

export default BountyProvider

export const withBounties = C => props => (
    <BountyContext.Consumer>
        { value => <C {...props} {...value}/> }
    </BountyContext.Consumer>
)