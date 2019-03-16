const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')


// Middlewares for every request
app.use(express.json())
app.use(morgan('dev'))


// DB connect
mongoose.connect("mongodb://localhost:27017/wizards", {useNewUrlParser: true}, () => {
    console.log("[o] Connected to theDB")
})

// Routes
app.use("/wizards", require('./routes/wizardRoutes.js'))


// Err Handling
app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})


// Listen
app.listen(7000, () => {
    console.log("[+] Server is running on port 7000!")
})