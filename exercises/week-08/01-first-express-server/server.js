const express = require('express')
const app = express()
const uuid = require('uuid/v4')

let people = [
    {
        name: "Rick",
        age: 70,
        _id: uuid()
    },
    {
        name: "Morty",
        age: 13,
        _id: uuid()
    },
    {
        name: "Birdman",
        age: "unknown",
        _id: uuid()
    }
]

// Middleware
app.use(express.json())


app.get("/people", (req, res) => {
    res.send(people)
})

app.get("/people", (req, res) => {
    // Work out some logic
    // Query DB
    // Send response to client
    res.send(people)
})

app.get("/people/:_id", (req, res) => {
    // Grab ID from the req.params object
    const ID = req.params._id
    const foundPerson = people.find(person => person._id === ID)
    res.send(foundPerson)
})

// POST - Add one
app.post('/people', (req, res) => {
    // Add ID to the request body
    req.body._id = uuid
    // Add it to the fake databae
    people.push(req.body)
    // Send back updated Object, for entire collection if you want
    res.send(req.body)
})

// DELETE - Delete one
app.delete("/people/:_id", (req, res) => {
    // Crete new array by filtering out the person who has the ID from req.params
    const updatedPeople = people.filter(person => person._id !== req.params._id)
    // Rer-assign our old database (array) to the new updated array
    people = updatedPeople
    // Send back updated array to confirm object (resource) was removed
    res.send(people)
})

// PUT - Update one
app.put("/people/:_id", (req, res) => {
    // Use the ID to find the objject to udpate
    const foundPerson = people.find(person => person._id === req.params._id)
    // Update that object
    Object.assign(foundPerson, req.body)
    // Send back the updated object
    res.send(foundPerson)
})


app.get("*", (req, res) => {
    res.send("Try /people or /people:_id")
})

app.listen(5700, () => {
    console.log("Server is running on port 5800")
})