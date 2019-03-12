const express = require('express')
const app = express()


// Middleware
app.use(express.json())


// Routes 
app.use("/user", require('./routes/user.js'))


// Listen
app.listen(7000, () => {
    console.log("Server is running on Port 7000")
})


// STEPS TO SET UP server.js file
    // 1. npm init -y
    // 2. npm i express
    // 3. Create server.js
    // 4. Require express
    // 5. Create Server Object
    // 6. LISTEN
    // 7. Set up Routes
