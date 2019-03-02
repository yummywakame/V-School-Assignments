import React, { Component } from 'react'
import AddTodoForm from './AddTodoForm.js'

// Todo is given it's own state so that EACH todo can operate SEPARATELY
// If the toggle was maintained in App, then toggling one would toggle All.
// This is also the reason behind giving each todo its own handleChange and
// handleSubmit so that it only affects that specific <Todo />.
class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {
            isToggled: false,
            title: props.title,
            description: props.description,
            imgUrl: props.imgUrl,
            price: props.price
        }
    }

    toggler = () => {
        this.setState(prevState => ({
            isToggled: !prevState.isToggled
        }))
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const updates = {
            title: this.state.title,
            description: this.state.description,
            imgUrl: this.state.imgUrl,
            price: this.state.price
        }
        this.props.handleEdit(this.props._id, updates)
        this.toggler()
    }


    render(){
        const { title, description, imgUrl, price, completed, handleDelete, _id } = this.props

        // We use a terniary and a toggle below to show either the listed Todo information
        // Or the form used to submit the edits.
        return (
            <div>
                { !this.state.isToggled 
                    ?   <div className="todo-div" style={{ backgroundImage: `url(${imgUrl})`}}>
                            <h1>{title}</h1>
                            <h3>{description}</h3>
                            <p>Price: {price}</p>
                            <button onClick={() => handleDelete(_id)}>Delete</button>
                            <button onClick={this.toggler}>Edit</button>
                        </div>
                    :   <div className="edit-todo-div">
                            <AddTodoForm 
                                {...this.state}
                                btnText="Submit Edit"
                                handleChange={this.handleChange} 
                                handleSubmit={this.handleSubmit}
                            />
                            <button onClick={this.toggler}>Close</button>
                        </div>
                }
            </div>
        )
    }
}


export default Todo