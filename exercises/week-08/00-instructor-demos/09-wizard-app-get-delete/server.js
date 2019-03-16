const express = require('express')
const app = express()
const uuid = require('uuid/v4')
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('dev'))

let fakeDB = [
    {
        firstName: "Harry",
        lastName: "Potter",
        isGood: true,
        _id: uuid()
    },
    {
        firstName: "Albus",
        lastName: "Dumbledore",
        isGood: true,
        _id: uuid()
    },
    {
        firstName: "Mr. Tom Riddle",
        lastName: "Voldemort",
        isGood: false,
        _id: uuid()
    }
]


app.get("/wizards", (req, res) => {
    res.send(fakeDB)
})

app.post("/wizards", (req, res) => {
    const newWizard = req.body
    newWizard._id = uuid()
    fakeDB.push(newWizard)
    res.send(newWizard)
})

app.delete("/wizards/:_id", (req, res) => {
    const wizardID = req.params._id
    const updatedDB = fakeDB.filter(wizard => wizard._id !== wizardID)
    fakeDB = updatedDB
    res.send("Wizard successfully Deleted")
})


app.listen(7000, () => {
    console.log("Server is running on port 7000!")
})