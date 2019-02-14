/*
    ES6 Practice 
    - Let, Const, Arrow Functions, Default Arguments, Template Literals
*/

// TASK 0

let name = "John"
const age = 101
const pets = ["cat", "dog"]
const petObjects = []

function runForLoop() {
    for (let i = 0; i < pets.length; i++) {
        const pet = {
            type: pets[i]
        }
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        pet.name = name
        petObjects.push(pet)
    }
    return name
}

console.log("\n1: " + runForLoop())

// TASK 1

/*
Re-write this .map() using an arrow function:

Be aware that if JavaScript sees a { directly after the => it will think it's 
starting a function, and not starting an object, so the : will be an unexpected symbol.

    const carrots = ["bright orange", "ripe", "rotten"]

    function mapVegetables(arr) {
        return arr.map(function(carrot) {
            return { type: "carrot", name: carrot }
        })
    }
*/

const carrots = ["bright orange", "ripe", "rotten"]

const mapVegetables = (arr) => arr.map((carrot) => ({
    type: "carrot",
    name: carrot
}))

console.log("\n2: ")
console.log(mapVegetables(carrots))

/* TASK 2

Re-write this .filter() using an arrow function:

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(function(person) {
        return !!person.friendly
    })
}
*/

const people = [{
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]
const filterForFriendly = (arr) => arr.filter((person) => !!person.friendly)

console.log(filterForFriendly(people))

/* TASK 3
    Re-write the following functions to be arrow functions:
    
    function doMathSum(a, b) {
        return a + b
    }
    
    var produceProduct = function(a, b) {
        return a * b
    }
*/
let a = 3
let b = 4

let doMathSum = (a, b) => a + b

let produceProduct = (a, b) => a * b

console.log("\n3: ")
console.log(a + " + " + b + " = " + doMathSum(a, b))
console.log(a + " * " + b + " = " + produceProduct(a, b))

/* TASK 4
    Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:
    
        Hi Kat Stark, how does it feel to be 40?
        
    firstName should default to "Jane"
    lastName should default to "Doe"
    age should default to 100
    
    Extra Credit
    Use template literals to build the string
*/

let printString = (firstName = "Jane", lastName = "Doe", age = 100) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`

console.log("\n4: ")
console.log(printString("Olivia", "Meiring", 42))
console.log(printString())

/* TASK 5
    Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.
    
    const animals = [
       {
           type: "dog",
           name: "theodore"
       },
       {
           type: "cat",
           name: "whiskers"
       },
       {
           type: "pig",
           name: "piglette"
       },
       {
           type: "dog",
           name: "sparky"
       }
    ];
    
    function filterForDogs(arr) {
        return arr.filter(animal => {
            if (animal.type === "dog") {
                return true
            } else {
                return false
            }
        })
    }
*/
const animals = [{
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
];

const filterForDogs = (arr) => arr.filter(animal => (animal.type === "dog") ? true : false)

console.log("\n5:")
console.log(filterForDogs(animals))

/*
    TASK 6
    
    Template Literals
    Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:
    
        Hi Janice!
        
        Welcome to Hawaii. 
        
        I hope you enjoy your stay. Please ask the president of Hawaii if you need anything. 
*/

const welcomeMessage = (name, location) => 
`Hi ${name}!
        
Welcome to ${location}. 
    
I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.`

console.log("\n6: ")
console.log(welcomeMessage("Janice", "Hawaii"))