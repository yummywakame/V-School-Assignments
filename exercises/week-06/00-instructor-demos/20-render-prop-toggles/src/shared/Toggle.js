import { Component } from 'react'

class Toggle extends Component {
    constructor(){
        super()
        this.state = {
            isToggled: false
        }
    }

    toggler = () => {
        this.setState(prevState => ({
            isToggled: !prevState.isToggled 
        }))
    }

    render(){
        return this.props.render({ isToggled: this.state.isToggled, toggler: this.toggler })
    }
}

export default Toggle