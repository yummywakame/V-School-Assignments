import React, { Component } from 'react'
import TodoList from './components/TodoList.js'
import AddTodoForm from './components/AddTodoForm.js'
import { withTodos } from './context/TodoProvider.js'


class App extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            description: '',
            price: '',
            imgUrl: ''
        }
    }

    componentDidMount(){
        // Call getTodos from context on page load
       this.props.getTodos()
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        // Call addTodo method from our context and pass it our input values
        // from the state
        this.props.addTodo(this.state)
        // After sending the state inputs to context, reset the values for the user
        this.setState({
            title: '',
            description: '',
            price: '',
            imgUrl: ''
        })
    }

    render(){
        return (
            <div className="app-container">
                <h1>CRUD MANIFEST</h1>
                <h6>(Todo list)</h6>
                <AddTodoForm 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit} 
                    title={this.state.title}
                    description={this.state.description}
                    price={this.state.price}
                    imgUrl={this.state.imgUrl}
                    btnText="Add Todo"/>
                <TodoList 
                    todos={this.props.todos}
                    handleDelete={this.props.handleDelete}
                    handleEdit={this.props.handleEdit}/>
            </div>
        )
    }
}

export default withTodos(App)
// withTodos is providing: props.todos, props.getTodos, props.addTodo, props.handleDelete





// Refactor todo project to use Context
    // Add put request to edit a Todo

// RenderProps
// ErrorBoundaries