import React from 'react'
import Wizard from './Wizard.js'

const WizardList = props => {
    return (
        <div>
            { props.wizards.map(wizard => 
                            <Wizard 
                                deleteWizard={props.deleteWizard} 
                                updateWizard={props.updateWizard}
                                key={wizard._id} 
                                {...wizard}
                            />)
            }
        </div>
    )
}

export default WizardList