import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state = { error: null, errorInfo: null }
    }
    
    // For this example we'll just use componentDidCatch, this is only 
    // here to show you what this method would look like.
    // static getDerivedStateFromProps(error){
        // return { error: true }
    // }

    componentDidCatch(error, info){
        this.setState({ error: error, errorInfo: info })
    }

    render() {
        if(this.state.errorInfo){
            return (
                <div className="error-boundary">
                    <summary>Something went wrong</summary>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        { this.state.error && this.state.error.toString() }
                        { this.state.errorInfo.componentStack }
                    </details>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary;