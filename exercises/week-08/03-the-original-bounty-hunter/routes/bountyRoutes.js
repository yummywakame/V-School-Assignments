const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js') // Name to create new document

// GET ALL
bountyRouter.get('/', (req, res) => {
    Bounty.find((err, bounties) => {
        // Always handle DB errors first
        if (err) {
            res.status(500)
            return res.send(err)
        }
        // Send back response
        return res.status(200).send(bounties)
    })
})

// GET ONE
bountyRouter.get('/:_id', (req, res) => {
    // This {object} is our filtering criteria for what we are looking for
    Bounty.findOne({ _id: req.params._id }, (err, foundBounty) => {
        if (err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(foundBounty)
    })
})

// POST Add One (never queries the db)
bountyRouter.post('/', (req, res) => {
    // Create the new bounty object using our Schema and the values from the body the user posted
    const newBounty = new Bounty(req.body)
    // Send that object to the DB to be saved
    newBounty.save((err, newBountyObject) => {
        if (err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(201).send(newBountyObject)
    })
})

// DELETE ONE
bountyRouter.delete('/:_id', (req, res) => {
    Bounty.findOneAndRemove({ _id: req.params._id }, (err, deletedBounty) => {
        if (err) {
            res.status(500)
            return res.send(err)
        }
        // 202 allows for a response message, 204 deletes but has no message
        return res.status(202).send(`Successfully deleted Bounty "${deletedBounty.title}" with ID ${req.params._id}`)
    })
})

// PUT
bountyRouter.put('/:_id', (req, res) => {
    Bounty.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true },
        (err, updatedBounty) => {
            if (err) {
                res.status(500)
                return res.send(err)
            }
            return res.status(201).send(updatedBounty)
        })
})

module.exports = bountyRouter