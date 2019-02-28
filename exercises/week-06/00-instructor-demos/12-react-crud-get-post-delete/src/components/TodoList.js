import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {

    const mappedTodos = props.todos.map(todo => 
                                <Todo 
                                    {...todo} 
                                    handleDelete={props.handleDelete} 
                                    key={todo._id}
                                />)

    return (
        <div>
            { mappedTodos }
        </div>
    )
}

export default TodoList