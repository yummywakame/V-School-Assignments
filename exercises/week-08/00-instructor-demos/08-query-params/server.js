const express = require('express')
const app = express()
const uuid = require('uuid/v4')
const PORT = process.env.PORT || 7000


app.use("/wizards", require('./routes/wizardRoutes.js'))


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

