const express = require('express')
const postRouter = express.Router()
const Post = require('../models/post.js')

// ALREADY INCLUDES AUTHENTICATION - So we have req.user._id

// POST - Add new Post
postRouter.post("/", (req, res, next) => {
    const newPost = new Post(req.body)
    // Grab the User's ID to add to the post before saving
    newPost.user = req.user._id
    newPost.save((err, savedPost) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedPost)
    })
    
})

module.exports = postRouter