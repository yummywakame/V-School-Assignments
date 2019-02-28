import React from 'react'

class Toggle extends React.Component {
    constructor() {
        super()
        this.state = {
            isToggled: false
        }
    }
    
    toggler = () => {
        this.setState(prevState => {
            return {
                isToggled: !prevState.isToggled
            }
        })
    }

    render() {
        const {component } = this.props
        const C = component
        
        console.log(this.state)

        return (
            <C 
                isToggled={this.state.isToggled} 
                toggler={this.toggler} 
            />
        )
    }
}

export const withToggler = C => props => <Toggle component={C}{...props} />