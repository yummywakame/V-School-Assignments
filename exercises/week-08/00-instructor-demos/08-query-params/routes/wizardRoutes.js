const express = require('express')
const uuid = require('uuid/v4')
const wizardRouter = express.Router()

// Fake Database
let wizards = [
    {
        name: "Harry",
        age: 17,
        favSubjects: ["Defence against Dark Arts", "Quidditch"],
        isGood: true,
        _id: uuid()
    },
    {
        name: "Hagrid",
        age: 85,
        favSubjects: ["Beast Training", "Beer", "Groundskeeping"],
        isGood: true,
        _id: uuid()
    },
    {
        name: "Hermoine",
        age: 16,
        favSubjects: ["Potions", "Spells", "Charms"],
        isGood: true,
        _id: uuid()
    },
    {
        name: "Ron",
        age: 15,
        favSubjects: ["none"],
        isGood: true,
        _id: uuid()
    },
    {
        name: "Voldemort",
        age: 70,
        favSubjects: ["Dark Arts", "Doing bad stuff"],
        isGood: false,
        _id: uuid()
    }
]


wizardRouter.get("/search", (req, res) => {
    const { maxAge, isGood } = req.query
    if(maxAge && isGood){
        const foundWizards = wizards.filter(wizard => {
            if(wizard.age <= Number(maxAge) && wizard.isGood.toString() === isGood){
                return wizard
            }
        })
        res.send(foundWizards)
    } else if(maxAge){
        const foundWizards = wizards.filter(wizard => {
            if(wizard.age <= Number(maxAge)){
                return wizard
            }
        })
        res.send(foundWizards)
    } else if(isGood){
        const foundWizards = wizards.filter(wizard => {
            if(wizard.isGood.toString() === isGood){
                return wizard
            }
        })
        res.send(foundWizards)
    }
})

wizardRouter.get("/", (req, res) => {
    res.send(wizards)
})

wizardRouter.get("/:_id", (req, res) => {
    const foundWizard = wizards.find(wizard => wizard._id === req.params._id)
    res.send(foundWizard)
})


module.exports = wizardRouter