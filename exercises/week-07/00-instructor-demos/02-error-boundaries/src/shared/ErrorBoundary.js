import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class ErrorBoundary extends Component {
    constructor(){
        super()
        this.state = {
            error: null,
            errorInfo: null
        }
    }

    componentDidCatch(error, info){
        this.setState({ error, errorInfo: info })
    }

    componentWillReceiveProps(nextProps){
        if(this.props.location.pathname !== nextProps.location.pathname){
            this.setState({
                error: null,
                errorInfo: null
            })
        }
    }

    render(){
        if(this.state.errorInfo){
            return (
                <div className="error-boundary">
                    <summary>Something Went Wrong</summary>
                    <details style={{ whiteSpace: 'pre-wrap'}}>
                        { this.state.error && this.state.error.toString() }
                        { this.state.errorInfo.componentStack }
                    </details>
                </div>
            )
        } 
        return this.props.children
    }
}

export default withRouter(ErrorBoundary)