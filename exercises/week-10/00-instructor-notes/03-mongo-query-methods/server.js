const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 7000

// Middlewares
app.use(express.json())
app.use(morgan('dev'))

// DB connect
mongoose.connect("mongodb://localhost:27017/query-practice", {useNewUrlParser: true}, () => {
    console.log('connect to the db')
})

// Routes
app.use("/movies", require('./routes/movieRoutes.js'))

// Errors
app.use((err, req, res, next) => {
    console.error(err)
    return res.send({ errMsg: err.message })
})

// Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})