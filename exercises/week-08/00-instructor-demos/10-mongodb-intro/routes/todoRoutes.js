const express = require('express')
const todoRouter = express.Router()
const Todo = require('../models/todo.js') // Name to create new document

// GET ALL
todoRouter.get('/', (req, res) => {
    Todo.find((err, todos) => {
        // Always handle DB errors first
        if (err) {
            res.status(500)
            return res.send(err)
        }
        // Send back response
        return res.status(200).send(todos)
    })
})

// GET ONE
todoRouter.get('/:_id', (req, res) => {
    // This {object} is our filtering criteria for what we are looking for
    Todo.findOne({ _id: req.params._id }, (err, foundTodo) => {
        if (err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(foundTodo)
    })
})

// POST Add One (never queries the db)
todoRouter.post('/', (req, res) => {
    // Create the new todo object using our Schema and the values from the body the user posted
    const newTodo = new Todo(req.body)
    // Send that object to the DB to be saved
    newTodo.save((err, newTodoObject) => {
        if (err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(201).send(newTodoObject)
    })
})

// DELETE ONE
todoRouter.delete('/:_id', (req, res) => {
    Todo.findOneAndRemove({ _id: req.params._id }, (err, deletedTodo) => {
        if (err) {
            res.status(500)
            return res.send(err)
        }
        // 202 allows for a response message, 204 deletes but has no message
        return res.status(202).send(`Successfully deleted Todo "${deletedTodo.title}" with ID ${req.params._id}`)
    })
})

// PUT
todoRouter.put('/:_id', (req, res) => {
    Todo.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true },
        (err, updatedTodo) => {
            if (err) {
                res.status(500)
                return res.send(err)
            }
            return res.status(201).send(updatedTodo)
        })
})


module.exports = todoRouter