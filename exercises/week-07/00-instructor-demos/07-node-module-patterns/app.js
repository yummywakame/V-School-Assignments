// This shows all the ways you can pull in data from an exported module (file)

// Calling the function directly after requiring the export object
    console.log(require('./greeting.js').greeting())
    console.log(require('./greeting.js').sum(1, 3))
    console.log(require('./greeting.js').data)
    console.log(require('./greeting.js').sayHi())

// importing the export object, then using that object to call the functions
    const greeting = require('./greeting.js')
    greeting.greeting()
    greeting.sum(1, 2)

// destructuring the import object to get the properties out if it
// I had to use the : notation to rename the imports so they wouldn't
// conflict with the variables above
    const { greeting: newGreeting, sum: newSum } = require('./greeting.js')
    console.log(newGreeting())
    console.log(newSum(3, 4))



//////////////////////////////
// REVEALING MODULE PATTERN //
//////////////////////////////

// Were keeping the greeting phrase private and only allowing the 
// user to change it through the method `setGreeting` we give them
    // const { greeting, setGreeting } = require('./greeting-reveal.js')
    // console.log(greeting()) // Hello world
    // setGreeting("Yo")
    // console.log(greeting()) // Yo



//////////////////////////////////////////////////////////////////
// Importing a Function that gives you other functions and data //
    const express = require('./express.js')
    // Express is the exported function we can now call and it will 
    // return the other two functions, server & handleErrorStuff
    const app = express()
    app.server()
    app.errorHandlingStuff()



/////////////////////////////////////////////////////////////////////////////
// Stuff has our State object, and our Increment method that changes state //

const stuff = require('./creatingPrivateState.js')
const { state, increment } = stuff()

console.log(state.count) // 0
increment()
console.log(state.count) // 1