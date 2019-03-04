import React, { Component } from 'react'
import Nav from './components/Nav.js'
import Home from './components/Home.js'
import About from './components/About.js'
import TodoList from './components/TodoList.js'
import Todo from './components/Todo.js'
import { Route, Switch, withRouter } from 'react-router-dom'
import axios from 'axios';

class App extends Component {
    constructor(){
        super()
        this.state = {
            todos: []
        }
    }

    componentDidMount(){
        axios.get('https://api.vschool.io/natej/todo')
            .then(res => this.setState({ todos: res.data }))
            .catch(err => console.log(err))
    }

    render(){
        return (
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>

                    {/* 
                        If you use the other method where you use the Switch statement in 
                        the Todolist component, make sure to remove the `exact` prop on this Todolist Route
                    */}
                    <Route 
                        exact path="/todolist" 
                        render={routerProps => 
                            <TodoList 
                                {...routerProps}
                                todos={this.state.todos}/>
                        }/>
                    {/* 
                        Comment out this Route if you end up using the Switch statement on the Todolist
                    */}
                    <Route path="/todolist/:_id" component={Todo}/>
                </Switch>
            </div>
        )
    }
}

export default withRouter(App)