const express = require('express')
const dataRouter = express.Router()
const axios = require('axios')
const Todo = require('../models/todo.js')

// My single /data endpoint that both gets data from a 3rd party API and
// the data from my personal database, it then sends both the client at
// the same time.
dataRouter.get("/", async (req, res, next) => {
    // 'Try' the following code, if no errors occur then this will work as planned
    // If an error occurs, the try block will be closed/stop processes and 
    // immediately send Error to 'catch' to have the error sent to the user.
    try {
        // First get the comic object from the 3rd party server
        const response = await axios.get("http://xkcd.com/614/info.0.json")
        // Then go get the array of todos from my database
        const myDBData = await Todo.find() // could pass filtering obj as well  ex: `await Todo.find({title: req.params.title})`
        // Send back and object that has both the todos and the comic included
        return res.status(200).send({todos: myDBData, comic: response.data})
    }
    catch(err){
        // catch an error if either request goes bad.
        res.status(500)
        // Forward the error to our error handler at the bottom of the 'server.js' file
        return next(err)
    }
})

// Same code as above but using the Router.route() syntax
// dataRouter.route("/")
//     .get(async (req, res, next) => {
//         try {
//             const response = await axios.get("http://xkcd.com/614/info.0.json")
//             const myDBData = await Todo.find()
//             return res.status(200).send({todos: myDBData, comic: response.data})
//         }
//         catch(err){
//             res.status(500)
//             return next(err)
//         }
//     })
//     .post(async (req, res, next) => {

//     })



// Getting weather data example.
// dataRouter.get("/", async (req, res, next) => {
//     try {
//         const locationData = await axios.get("/google/location?city=salt+lake+city")
//         const weatherData = await axios.get(`http://darksky?lat=${locationData.lat}&lon=${locationData.lon}`)
//         return res.status(200).send(weatherData)
//     }
//     catch(err){
//         res.status(500)
//         return next(err)
//     }
// })


module.exports = dataRouter