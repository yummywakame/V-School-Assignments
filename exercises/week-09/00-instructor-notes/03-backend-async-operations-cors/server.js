const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 7000


// Every Request middleware
app.use(express.json())
app.use(morgan('dev'))


// DB connect
mongoose.connect("mongodb://localhost:27017/backend-requests", {useNewUrlParser: true}, () => {
    console.log("[o] Connected to the DB")
})


// Routes
app.use("/data", require('./routes/dataRoutes.js'))
app.use("/todo", require('./routes/todoRoutes.js'))


// Error Handling
app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})


// Server Connect
app.listen(PORT, () => {
    console.log(`[+]Server is running on port ${PORT}`)
})