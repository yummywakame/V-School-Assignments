const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 7000


// Middlewares to run on Every request
app.use(express.json())
app.use(morgan('dev'))


// DB connection
mongoose.connect("mongodb://localhost:27017/happiest-hours", {useNewUrlParser: true}, () => {
    console.log(`[o] Connected to the DB`)
})


// Routes 
app.use("/happyhour", require('./routes/locationRoutes.js'))



// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})


// Listen
app.listen(PORT, () => {
    console.log(`[+] Server is running on Port ${PORT}`)
})