import React, { Component } from 'react'
import axios from 'axios'
import TodoList from './components/TodoList.js'
import AddTodoForm from './components/AddTodoForm.js'


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
       this.getTodos()
    }

    getTodos = () => {
        axios.get("https://api.vschool.io/attila/todo").then(response => {
        //resolve
            this.setState({
                todos: response.data
            })
       }) //reject
       .catch(error => console.log(error))
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { title, description, price, imgUrl } = this.state
        // POST request
            // Create OBJ
        const newTodo = { title, description, price, imgUrl }

        axios.post("https://api.vschool.io/attila/todo", newTodo).then(response => {
            // update state 
            this.setState(prevState => {
                return {
                    todos: [response.data, ...prevState.todos],
                    title: '',
                    description: '',
                    price: '',
                    imgUrl: ''
                }
            })
            // todos: maintain old todos, and add in new todo from DB
            // input Values: Reset back to empty strings
        }).catch(error => console.log(error))
    }

    handleDelete = (_id) => {
        // DELETE
        // axios.delete a specific Todo via it's ID
        axios.delete(`https://api.vschool.io/attila/todo/${_id}`).then(response => {
            this.setState(prevState => {
                return {
                    // Take the previous array of todos, and only return
                    // todos that don't have the _id of the deleted one
                    todos: prevState.todos.filter(todo => todo._id !== _id)
                }
            })    
        }).catch(error => console.log(error))
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
                    todos={this.state.todos}
                    handleDelete={this.handleDelete}/>
            </div>
        )
    }
}

export default App







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