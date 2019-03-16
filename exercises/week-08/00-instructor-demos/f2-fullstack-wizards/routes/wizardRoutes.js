const express = require('express')
const wizardRouter = express.Router()
const Wizard = require('../models/wizard.js')

// Get All
wizardRouter.get("/", (req, res, next) => {
    Wizard.find((err, wizards) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(wizards)
    })
})

// Get One
wizardRouter.get("/:_id", (req, res, next) => {
    Wizard.findOne({_id: req.params._id}, (err, wizard) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(wizard)
    })
})

// Post One
wizardRouter.post("/", (req, res, next) => {
    const newWizard = new Wizard(req.body)
    newWizard.save((err, newWizardObj) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newWizardObj)
    })
})

// Delete One
wizardRouter.delete("/:_id", (req, res, next) => {
    Wizard.findOneAndDelete({_id: req.params._id}, (err, deletedWizard) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(202).send(`Wizard ${deletedWizard.firstName} was successfully deleted`)
    })
})

// Update One
wizardRouter.put("/:_id", (req, res, next) => {
    Wizard.findOneAndUpdate(
        {_id: req.params._id}, 
        req.body, 
        {new: true}, 
        (err, updatedWizard) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedWizard)
    })
})


module.exports = wizardRouter