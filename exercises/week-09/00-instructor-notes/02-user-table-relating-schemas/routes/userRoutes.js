const express = require('express')
const userRouter = express.Router()
const User = require('../models/user.js')

// Create a new User
userRouter.post("/", (req, res, next) => {
    const newUser = new User(req.body)
    newUser.save((err, newSavedUser) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newSavedUser)
    })
})


module.exports = userRouter