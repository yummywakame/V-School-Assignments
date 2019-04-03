import React, { Component } from 'react'
import { TimelineLite } from 'gsap'

// For animation/transtions
    // SVG
    // ::before  ::after
    // CSS Transitions / Animations
    // Libraries like GSAP

class App extends Component {
    constructor(){
        super()
        this.state = {
            modalToggle: false
        }
        this.modalElement = null
        this.tl = new TimelineLite({paused: true})
    }

    toggleModal = () => {
        const { modalToggle } = this.state
        if(!modalToggle){
            this.tl
                .to(this.modalElement, 0.3, {autoAlpha: 1})
                .to(this.modalElement, 0.5, {top: 50, scale: 1}, "-=0.3")
                .play()
        } else {
            this.tl
                .to(this.modalElement, 0.3, {autoAlpha: 0})
                .to(this.modalElement, 0.5, {top: 0, scale: 0.75}, "-=0.3")
                .play()
        }
        this.setState(prevState => ({ modalToggle: !prevState.modalToggle}))
    }

    render(){
        return (
            <div>
                <div>
                    <button onClick={this.toggleModal}>Activate Modal</button>
                </div>
                <div 
                    ref={div => this.modalElement = div}
                    className="modal">
                        <input type="text"/>
                    <button onClick={this.toggleModal}>Close</button>
                </div>
            </div>
        )
    }
}

export default App