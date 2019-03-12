const express = require('express')
const app = express()

// Middleware
app.use(express.json())

// Routes
app.use("/bounty/v1", require ('./routes/bounty.js'))

// Listen
app.listen(5858, () => {
    console.log("Server is running on port 5858")
})