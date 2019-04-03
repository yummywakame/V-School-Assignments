import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
    constructor(){
        super()
        this.state = {
            comic: {},
            todos: []
        }
    }

    componentDidMount(){
        axios.get("/data")
            .then(res => {
                this.setState({
                    comic: res.data.comic,
                    todos: res.data.todos
                })
            })
            .catch(err => console.log(err))
    }

    render(){
        return (
            <div>   
                {/*
                    Showing the Data from the Comic object 
                */}
                <h1>COMIC</h1>
                <p>{this.state.comic.alt}</p>
                <img src={this.state.comic.img} width={400}/>
                
                {/* 
                    Showing the data from the Todos array 
                */}
                <h1>TODOS</h1>
                { this.state.todos.map(todo => <h4 key={todo._id}>{todo.title}</h4>)}
            </div>
        )
    }
}

export default App