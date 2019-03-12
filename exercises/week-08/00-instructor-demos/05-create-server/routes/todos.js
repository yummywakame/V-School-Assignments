const express = require('express')
const todoRouter = express.Router()

const todos = [
    {
        title: "Find Todo",
        _id: Math.random()
    },
    {
        title: "Find Todo",
        _id: Math.random()
    },
    {
        title: "Find Todo",
        _id: Math.random()
    }
]

todoRouter.get("/", (req, res) => {
    res.send(todos)
})

todoRouter.post("/", (req, res) => {
    req.body._id = Math.random()
    todos.push(req.body)
    res.send(req.body)
})

module.exports = todoRouter