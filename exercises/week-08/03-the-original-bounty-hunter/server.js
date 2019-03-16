const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const PORT = 7000

// Middleware
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use("/bounty/v1", require ('./routes/bountyRoutes.js'))

// DB Connection
mongoose.connect("mongodb://localhost:27017/first-db", { useNewUrlParser: true }, () => { 
    console.log('[o] Connected to the DB')
})

// Listener
app.listen(PORT, () => {
    console.log(`[+] Server is running on port ${PORT}`)
})