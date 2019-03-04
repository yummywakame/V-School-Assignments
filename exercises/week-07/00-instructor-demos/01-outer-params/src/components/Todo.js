import React, { Component } from 'react'
import axios from 'axios'

class Todo extends Component {
    constructor(){
        super()
        this.state = {
            todo: {}
        }
    }

    componentDidMount(){
        axios.get(`https://api.vschool.io/natej/todo/${this.props.match.params._id}`)
        .then(res => this.setState({ todo: res.data }))
        .catch(err => console.log(err))
    }

    // This is needed if you are using the Switch statement on the TodoList.js file.
        // This is because componentDidMount only fires when a component enters the screen, and
        // if you use the split-screen view, that only occurs on the first load.
        // Using componentWillReceiveProps, you get access to the new Props coming down called `nextProps`,
        // Here you check if the newProps have changed, and if so do your get Reqeust again.
        
    // componentWillReceiveProps(nextProps){
    //     if(nextProps.match.params._id !== this.props.match.params._id){
    //         axios.get(`https://api.vschool.io/natej/todo/${nextProps.match.params._id}`)
    //             .then(res => this.setState({ todo: res.data }))
    //             .catch(err => console.log(err))
    //     }
    // }

    render(){
        console.log(this.props)
        return (
            <div className="todo" style={{ backgroundImage: `url(${this.state.todo.imgUrl})`}}>
                <h1>{this.state.todo.title}</h1>
                <p>{this.state.todo.description}</p>
            </div>
        )
    }
}

export default Todo