import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Todo from './Todo.js'


const TodoList = props => {
    return (
        <div className="todo-list-container">
            <div className="todo-list">
                {props.todos.map(todo => 
                                        <Link 
                                            to={`/todolist/${todo._id}`} 
                                            key={todo._id}>{todo.title}
                                        </Link>)}
            </div>

            {/* 
                Remove comments around this Div if you want to use split screen view.
                Just make sure to go adjust the Todo component and the App component per
                what the notes on those components say.
            */}
            
            {/* <div className="todo-view">
                <Switch>
                    <Route path="/todolist/:_id" component={Todo}/>
                </Switch>
            </div> */}
        </div>
    )
}

export default TodoList