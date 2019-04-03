const express = require('express')
const todoRouter = express.Router()
const Todo = require('../models/todo.js')


// Add A todo for a specific user using their ID
todoRouter.post('/:userID', (req, res, next) => {
    const newTodo = new Todo(req.body)
    newTodo.user = req.params.userID
    newTodo.save((err, userTodo) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(userTodo)
    })
})


// Get a User's specific Todos
todoRouter.get("/user/:userID", (req, res, next) => {
    Todo.find({user: req.params.userID}, (err, userTodos) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(userTodos)
    })
})


// Get all Todos in general
todoRouter.get("/", (req, res, next) => {
    Todo.find((err, todos) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(todos)
    })
})


module.exports = todoRouter