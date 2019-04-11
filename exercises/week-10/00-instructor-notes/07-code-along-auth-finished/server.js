const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const morgan = require('morgan')
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 7000


// Middlewares that fire on every request
app.use(express.json())   // Parses Objects -  req.body
app.use(morgan('dev'))

// DB Connect
mongoose.connect("mongodb://localhost:27017/code-along", {useNewUrlParser: true}, () => {
    console.log("[+] Connected to the DB")
})

// Routes
app.use("/auth", require("./routes/authRouter.js"))
app.use("/public", require('./routes/publicRouter.js'))

// expressJwt: Checks to see if there is a 'Authorization: Bearer <token>'
    // If there is a token, it creates the `req.user` object from the token payload
    // If there is not, it throws an "UnauthorizedError" that we send in our global error handler below
app.use("/api", expressJwt({secret: process.env.SECRET})) 
app.use("/api/posts", require('./routes/postRouter.js'))


// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})


// Server Listen
app.listen(PORT, () => {
    console.log(`[o] Server is running on Port ${PORT}`)
})