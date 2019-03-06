import React, { Component } from 'react'
import Display from './Display.js'
import Controls from './Controls.js'
import ErrorBoundary from '../shared/ErrorBoundary.js'

class App extends Component {
    constructor(){
        super()
        this.state = {
            num: 0
        }
    }

    addOne = () => this.setState(prevState => ({ num: prevState.num + 1 }))

    render() {
        const { addOne } = this
        const { num } = this.state
        return (
            <div className="counter-container">
                <ErrorBoundary>
                    <Display num={ num }/>
                </ErrorBoundary>
                
                <Controls addOne={ addOne }/>
            </div>
        )
    }
}

export default App;