const express = require('express')
const locationRouter = express.Router()
const Location = require('../models/location.js')


// GET All
locationRouter.get("/", (req, res, next) => {
    Location.find((err, locations) => {
        if(err){
            res.status(500)
            return next(err)
        }

        // Throwing a custom error 
        // const user = {
        //     password: "123"
        // }

        // if(user.password !== req.body.password){
            // return next(new Error("Username or Password are Incorrect"))
        // }

        return res.status(200).send(locations)
    })
})

// POST
locationRouter.post("/", (req, res, next) => {
    const newLocation = new Location(req.body)
    newLocation.save((err, savedLocation) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedLocation)
    })
})

module.exports = locationRouter