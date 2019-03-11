const express = require('express')
const app = express()
const uuid = require('uuid/v4')

// Fake Database
let todos = [
    {
        "name": "The name",
        "description": "The description of the todo",
        "imageUrl": "http://www.myimage....",
        "completed": false,
        "_id": uuid()
    }
]

// Middleware
app.use(express.json())

// GET ALL (Collection)
app.get('/api/v1/todos', (req, res) => {
    res.send(todos)
})

// GET ONE (Resource)
app.get('/api/v1/todos/:_id', (req, res) => {
    // Grab ID from the req.params object
    const ID = req.params._id
    // Find the todo object by its ID in the database
    const foundTodo = todos.find(todo => todo._id === ID)
    // Send back todo Object
    res.send(foundTodo)
})

// POST ONE (Resource)
app.post('/api/v1/todos', (req, res) => {
    // Add ID to the POST body using UUID()
    req.body._id = uuid()
    // Add it to the fake database
    todos.push(req.body)
    // Send back updated Object (or entire collection)
    res.send(req.body)
})

// DELETE ONE
app.delete('/api/v1/todos/:_id', (req, res) => {
    // Create new array by filtering out the todo that has the ID from req.params
    const updatedTodos = todos.filter(todo => todo._id !== req.params._id)
    // Reassign our old database (array) to the new updated array
    todos = updatedTodos
    // Send back updated array to confirm object (resource) was removed
    res.send(updatedTodos)
})

// PUT ONE
app.put('/api/v1/todos/:_id', (req, res) => {
    // Use the ID to find the object to update
    const foundTodo = todos.find(todo => todo._id === req.params._id)
    // Update that object
    Object.assign(foundTodo, req.body)
    // Send back the updated Object
    res.send(foundTodo)
})

// SET UP LISTENER AT THE END
app.listen(5700, () => {
    console.log("Server is running on port 5800")
})