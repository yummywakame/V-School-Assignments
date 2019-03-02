import React, { Component } from 'react'
import TodoList from './components/TodoList.js'
import AddTodoForm from './components/AddTodoForm.js'
import { withTodos } from './context/ToDoProvider.js'


class App extends Component {
    constructor(){
        super()
        this.state = {
            todos: [],
            title: '',
            description: '',
            price: '',
            imgUrl: ''
        }
    }

    componentDidMount(){
       this.props.getTodos()
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addToDo(this.state)
        this.setState({
            title: "",
            description:"",
            price:"",
            imgUrl: ""
        })
    }

    render(){
        return (
            <div>
                <AddTodoForm 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit} 
                    title={this.state.title}
                    description={this.state.description}
                    price={this.state.price}
                    imgUrl={this.state.imgUrl} />
                <TodoList 
                    todos={this.props.todos}
                    handleDelete={this.props.handleDelete}/>
            </div>
        )
    }
}

export default withTodos(App)


// GET - Map out todos
    // TodoList - list out Todos
    // Todo     - Singular Todo that is mapped out in TodoList component

    // App -
        // componentDidMount
        // add place for todos in state
        // componentWillUnmount
            // window.eventListeners
            // setInterval, setTimeout

// POST - Add new Todo
    // <AddTodoForm />
    // state properties for input values
    // handleChange, handleSubmit