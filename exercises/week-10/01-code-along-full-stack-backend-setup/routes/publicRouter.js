const express = require('express')
const publicRouter = express.Router()
const Post = require('../models/post.js')

// GET - Posts sorted by most recent = /public/
publicRouter.get("/", async (err, res, next) => {
    try {
        // Find ALL posts and sort in descending order
        // error will exit and fall through to catch block below
        const posts = await Post.find().sort({timeStamp: -1})
        // const posts = await Post.find().sort({timeStamp: -1}).slice(0, 10) // get only 10
        return res.status(200).send(posts)
    }
    catch(err) {
        res.status(500)
        return next(err)
    }
})

// GET - Posts by thread
publicRouter.get("/thread/:thread", (req, res, next) => {
    Post.find({thread: req.params.thread}, (err, posts) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(posts)
    })
})

module.exports = publicRouter