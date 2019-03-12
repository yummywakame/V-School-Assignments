const express = require('express')
const bountyRouter = express.Router()
const uuid = require('uuid/v4')

// Fake Database of Bounties
let bounties = [
    {
        firstName: "Obi-Wan",
        lastName: "Kenobi",
        Living: true,
        bountyAmount: 50000,
        type: "Jedi",
        id: uuid()
    },
    {
        firstName: "Luke",
        lastName: "Skywalker",
        Living: true,
        bountyAmount: 100000,
        type: "Jedi",
        id: uuid()
    },
    {
        firstName: "Yoda",
        lastName: "",
        Living: true,
        bountyAmount: 500000,
        type: "Jedi",
        id: uuid()
    },
    {
        firstName: "Han",
        lastName: "Solo",
        Living: true,
        bountyAmount: 5000,
        type: "Jedi",
        id: uuid()
    },
    {
        firstName: "Aloysius",
        lastName: "Kallig",
        Living: false,
        bountyAmount: 300000,
        type: "Sith",
        id: uuid()
    },
    {
        firstName: "Supreme Leader",
        lastName: "Snoke",
        Living: true,
        bountyAmount: 550000,
        type: "Sith",
        id: uuid()
    },
    {
        firstName: "Darth",
        lastName: "Bane",
        Living: true,
        bountyAmount: 50000,
        type: "Sith",
        id: uuid()
    },
    {
        firstName: "Mace",
        lastName: "Windu",
        Living: true,
        bountyAmount: 90000,
        type: "Sith",
        id: uuid()
    }
]

bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuid()
        bounties.push(newBounty)
        res.send(newBounty)
    })


bountyRouter.route("/:_id")
    .get((req, res) => {
        const foundBounty = bounties.find(bounty => bounty._id === req.params._id)
        res.send(foundBounty)
    })
    .put((req, res) => {
        const foundBounty = bounties.find(bounty => bounty._id === req.params._id)
        Object.assign(foundBounty, req.body)
        res.send(foundBounty)
    })
    .delete((req, res) => {
        const updatedDB = bounties.filter(bounty => bounty._id !== req.params._id)
        bounties = updatedDB
        res.send("Bounty succesfully deleted")
    })

module.exports = bountyRouter