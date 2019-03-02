import React, { Component } from 'react'
import axios from 'axios'

// Provider & Consumer
const TodoContext = React.createContext()

class TodoProvider extends Component {
    constructor(){
        super()
        this.state = {
            todos: []
        }
    }

    getTodos = () => {
        axios.get('https://api.vschool.io/kunzler/todo').then(response => {
                this.setState({
                    todos: response.data
                })
            }).catch(error => console.log(error))
    }
    
    

    render(){
        const props = {
            todos: this.state.todos,
            getTodos: this.getTodos
        }

        return (
            <TodoContext.Provider value={props}>
                { this.props.children }
            </TodoContext.Provider>
        )
    }
}

export const withTodos = C => props => (
    <TodoContext.Consumer>
        {value => <C {...props} {...value}/>}
    </TodoContext.Consumer>
)

export default TodoProvider