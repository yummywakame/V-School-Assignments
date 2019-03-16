const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')

// Middlewares
app.use(express.json())
app.use(morgan('dev'))


// Routes
app.use('/todo', require('./routes/todoRoutes.js'))


// DB Connection
mongoose.connect("mongodb://localhost:27017/first-db", { useNewUrlParser: true }, () => { 
    console.log('[o] Connected to the DB')
})


app.listen(7700, () => {
    console.log('[+] Server is running on Port 7700')
})