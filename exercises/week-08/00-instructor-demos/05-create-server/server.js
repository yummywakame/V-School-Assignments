const express = require('express')
const app = express()

// Middleware
app.use(express.json())

// Routes
app.use("/todos/v1", require('./routes/todos.js'))
// app.use("/characters/v1", require('./routes/characters.js'))

app.listen(7000, () => {
    console.log("Server is running on port 7000")
})