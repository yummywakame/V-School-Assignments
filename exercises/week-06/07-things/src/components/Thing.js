import React, { Component } from 'react'
import AddThingForm from './AddThingForm.js'
import Toggle from '../shared/Toggle.js'

class Thing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.title,
            imgUrl: props.imgUrl
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const updates = {
            title: this.state.title,
            imgUrl: this.state.imgUrl
        }
        this.props.editThing(this.props._id, updates)
    }

    render() {
        const { title, imgUrl, deleteThing, _id } = this.props

        return (
            <>
                <div className="card">
                    <div className="card-content">
                        <img src={imgUrl} alt={title} />
                        <h2>{title}</h2>

                        <Toggle render={({ isToggled, toggler }) =>
                            <>
                                {!isToggled
                                    ? <>
                                        <button className="waves-effect waves-light light-blue btn" onClick={toggler}><i className="material-icons left">edit</i>edit</button>
                                        <button className="waves-effect waves-light pink secondary-content btn" onClick={() => deleteThing(_id)}><i className="material-icons left">delete</i>delete</button>
                                    </>
                                    : <>
                                        <AddThingForm
                                            {...this.state}
                                            btnText="Save"
                                            handleChange={this.handleChange}
                                            handleSubmit={(event) => {
                                                this.handleSubmit(event)
                                                toggler()
                                            }}
                                        />

                                        <button className="waves-effect waves-light pink secondary-content btn close-button" onClick={toggler}><i className="material-icons left">close</i>close</button>
                                    </>
                                }
                            </>
                        } />
                    </div>
                </div>
            </>
        )
    }
}

export default Thing