const express = require('express')
const authRouter = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/user.js')

// Signup - POST
authRouter.post("/signup", (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        // Check if user exists
        if(user) {
            res.status(403)
            return next(new Error("That username is already in use."))
        }
        // Create user
        const newUser = new User(req.body)
        // pre-hook fires on "save", encrypts password, and then save() is executed
        newUser.save((err, savedUser) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            // Create Token
            const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
            
            // Send Response (send user without password, but token in lieu of password)
            return res.status(201).send({user: savedUser.withoutPassword(), token})
        })
    })
})

// Login - POST
authRouter.post("/login", (req, res, next) => {
    // Find user by that username - returns (err, user)
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if(err) {
            res.status(500)
            return next(err)
        }

        // Does that user exist - returns err "Username or password incorrect."
        if(!user) {
            res.status(403)
            return next(new Error("Username or password incorrect."))
        }
        // Check user's password - returns (err, isMatch)
        user.checkPassword(req.body.password, (err, isMatch) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            // if not a match - returns "Username or Password incorrect."
            if(!isMatch) {
                res.status(401)
                return next(new Error("Username or password incorrect."))
            }
            // Create Token
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
    
            // Send Response
            return res.status(200).send({user: user.withoutPassword(), token})
        })

    })    
})

module.exports = authRouter
