const express = require('express')
const app = express()


// Middleware
app.use(express.json())


// Routes
app.use("/todos", require('./routes/todos.js'))


app.listen(7000, () => {
    console.log("Server is running on Port 7000")
}) 