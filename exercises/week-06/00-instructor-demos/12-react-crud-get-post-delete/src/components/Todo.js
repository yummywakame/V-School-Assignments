import React, { Component } from 'react'
import AddTodoForm from './AddTodoForm'

class Todo extends Component {
    constructor() {
        super()
        this.state = {
            isToggled: false,
            title: '',
            description: '',
            price: '',
            imgUrl: ''
        }
    }

    toggler = () => {
        this.setState(prevState => ({
            isToggled: !prevState.isToggled
        }))
    }
    
    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        const { title, description, imgUrl, price, completed, handleDelete, _id } = this.props

        return (
            <div>
                { !this.state.isToggled ?
                <div style={{ backgroundImage: `url(${imgUrl})`, border: '1px solid black', margin: 5, backgroundSize: 'cover' }}>
                    <h1>{title}</h1>
                    <h3>{description}</h3>
                    <p>Price: {price}</p>
                    <input type="checkbox" defaultChecked={completed} />
                    <button onClick={() => handleDelete(_id)}>Delete</button>
                    <button onClick={this.toggler}>Edit</button>
                </div>
                :
                <div>
                    <AddTodoForm {...this.state} 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    />
                </div>
                }
            </div>
        )
    }

}

export default Todo