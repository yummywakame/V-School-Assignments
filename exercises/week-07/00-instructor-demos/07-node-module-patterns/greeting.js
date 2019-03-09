function greeting(){
    return "Hello"
}

function sum(a, b){
    return a + b
}

const data = {
    name: "Steve",
    age: 20
}

// These two lines are equivalent
    // module.exports = greeting
    // export default greeting

// Line 19 and lines 21 - 23 are equivalent
    module.exports = { greeting, sum, data }
    // export greeting
    // export sum
    // export data

// You can add more properties to your `exports` object using dot '.' notation
module.exports.sayHi = function(){
    console.log('hi')
}






