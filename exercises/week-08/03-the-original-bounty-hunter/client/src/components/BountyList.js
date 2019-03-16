import React from 'react'
import Bounty from './Bounty.js'

const BountyList = props => {
    return (
        <>
            { props.bounties.map(bounty => 
                <Bounty 
                    deleteBounty={props.deleteBounty} 
                    updateBounty={props.updateBounty}
                    key={bounty._id} 
                    {...bounty}
                />)
            }
        </>
    )
}

export default BountyList