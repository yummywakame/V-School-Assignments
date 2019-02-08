/* 
    ARRAY MAP EXERCISES
    Use the built-in .map() method on arrays to solve all of these problems
    Feel free to copy and paste the function and tests in this assignment.
*/

/* 1) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr){
  // your code here
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
*/

function doubleNumbers(arr) {
    return arr.map(function (num) {
        return (num * 2)
    })
}
var nums = [2, 5, 100]

console.log("*** ARRAY: ***")
console.log(nums)
console.log("\n1: Return an array that doubles every number in the original array")
console.log(doubleNumbers(nums)); // [4, 10, 200]

/* 2) Take an array of numbers and make them strings
function stringItUp(arr){
  // your code here
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
*/

function stringItUp(arr) {
    return arr.map(function (num) {
        return num.toString()
    })
}

console.log("\n2: Return an array that converts every number in the original array to a string")
console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

/* 3) Capitalize each of an array of names
function capitalizeNames(arr){
  // your code here
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]
*/

function capitalizeNames(arr) {
    return arr.map(function (name) {
        return name.toLowerCase().charAt(0).toUpperCase();
    })
}
var names = ["john", "JACOB", "jinGleHeimer", "schmidt"]

console.log("\n*** ARRAY: ***")
console.log(names)
console.log("\n3: Return an array that Uppercases every name in the original array")
console.log(capitalizeNames(names)); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

/* 4) Make an array of strings of the names
function namesOnly(arr){
  // your code here
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
*/

function namesOnly(arr) {
    return arr.map(function (person) {
        return (person.name)
    })
}

var people = [{
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

console.log("\n*** ARRAY: ***")
console.log(people)
console.log("\n4: Return an array with only the names from the original array")
console.log(namesOnly(people));

// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

/* 4) Make an array of strings of the names saying whether or not they can go to The Matrix
function makeStrings(arr){
  // your code here
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]
*/

function makeStrings(arr) {
    return arr.map(function (person) {
        if (person.age > 17) {
            return (person.name + " can go to The Matrix")
        } else {
            return (person.name + " is under age")
        }
    })
}
console.log("\n*** ARRAY: ***")
console.log(people)
console.log("\n5: Return an array only the people old enough to go to the Matrix (over 18)")
console.log(makeStrings(people));

/* 6) Make an array of the names in h1s, and the ages in h2s
function readyToPutInTheDOM(arr){
  // your code here
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]
*/

function readyToPutInTheDOM(arr) {
    return arr.map(function(person) {
        return ("<h1>" + person.name + "</h1><h2>" + person.age + "</h2>")
    })
}

console.log("\n6: Make an array of the names in h1s, and the ages in h2s")
console.log(readyToPutInTheDOM(people));