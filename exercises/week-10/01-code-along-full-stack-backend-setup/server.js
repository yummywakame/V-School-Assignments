// create environment first
const express = require('express')
const app = express()
require('dotenv').config()

const mongoose = require('mongoose')
const morgan = require('morgan')
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 7000

// Middlewares that fire on every request (except express.Jwt)
app.use(express.json()) // Parses Objects to get the req.body
app.use(morgan('dev'))

// DB Connect
mongoose.connect('mongodb://localhost:27017/raddish', {useNewUrlParser: true}, () => {
    console.log("[+] Connected to the DB")
})

// ROUTES
// Public
app.use("/auth", require("./routes/authRouter.js"))
app.use("/public", require('./routes/publicRouter.js'))

// Private
app.use("/api", expressJwt({secret: process.env.SECRET})) // all /api/ urls check if authenticated
app.use("/api/posts", require('./routes/postRouter.js'))

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err)
    if(err.name === "UnauthorizedError") { // the only way to do error handling with jwt
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

// Server Listen (activates the server)
app.listen(PORT, () => {
    console.log(`[o] Server is running on Port ${PORT}`)
})