import React, { Component } from 'react'


export default class ErrorBoundary extends Component {
    constructor(){
        super()
        this.state = {
            error: null,
            errInfo: null
        }
    }

    componentDidCatch(error, errInfo){
        this.setState({ error, errInfo })
    }


    render(){
        if(this.state.errInfo){
            return <div>Uh oh</div>
        }
        return this.props.children
    }
}



