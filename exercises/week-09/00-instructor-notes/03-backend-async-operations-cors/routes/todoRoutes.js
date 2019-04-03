const express = require('express')
const todoRouter = express.Router()
const Todo = require('../models/todo.js')

// Add todos
todoRouter.post("/", (req, res, next) => {
    const newTodo = new Todo(req.body)
    newTodo.save((err, todo) => {
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(todo)
    })
})

// Get all todos
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