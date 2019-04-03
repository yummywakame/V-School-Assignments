const express = require('express')
const movieRouter = express.Router()
const Movie = require('../models/movie.js')

// Add a movie
movieRouter.post("/", (req, res, next) => {
    const newMovie = new Movie(req.body)
    newMovie.save((err, savedMovie) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedMovie)
    })
})

// Get all movies
movieRouter.get("/", (req, res, next) => {
    Movie.find((err, movies) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })
})

// $methods

// Increment Likes
movieRouter.put("/:movieID", (req, res, next) => {
    Movie.findOneAndUpdate(
        {_id: req.params.movieID},
        {$inc: {likes: 1} /*, $push: {likedByUsers: req.user._id} */},
        {new: true},
        (err, updatedMovie) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedMovie)
        }
    )
})

// Push in a comment string
movieRouter.put("/addcomment/:movieID", (req, res, next) => {
    Movie.findOneAndUpdate(
        {_id: req.params.movieID},
        {$push: {comments: req.body.comment}},
        {new: true},
        (err, updatedMovie) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedMovie)
        }
    )
})

// Pull out a comment String
movieRouter.put("/removecomment/:movieID", (req, res, next) => {
    Movie.findOneAndUpdate(
        {_id: req.params.movieID},
        {$pull: {comments: req.body.comment }},
        {new: true},
        (err, updatedMovie) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedMovie)
        }
    )
})

// Find by genre
movieRouter.get("/genre", (req, res, next) => {
    const { genre } = req.query
    Movie.find({genre}, (err, movies) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })
})

// Find by title search term - regex
movieRouter.get("/search", (req, res, next) => {
    const { search } = req.query
    Movie.find(
        {title: {$regex: new RegExp(search), $options: "i"}},
        (err, movies) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(movies)
        })
})

// Find by likes above 10
movieRouter.get("/mostliked", (req, res, next) => {
    Movie.where("likes").gte(10).lte(100).exec((err, foundMovies) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundMovies)
    })
})




// honorable mentions
    // $in
    // Collection.insertMany()





module.exports = movieRouter