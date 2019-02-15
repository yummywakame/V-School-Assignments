/*
//  REST AND SPREAD OPERATOR
*/

/* EXERCISE 1:
    Use the Rest Operator to help this function return an array of animals, 
    no matter how many animals are passed to it:
*/

function collectAnimals(...collection) {
    return collection
}
console.log("\n1:")
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))
// ["dog", "cat", "mouse", "jackolope", "platypus"]


/* EXERCISE 2:
    Write a function that returns a food object with the array names 
    as properties using Object Literals:
*/

function combineFruit(fruit, sweets, vegetables) {
    return {
        fruit,
        sweets,
        vegetables
    }
}

console.log("\n2:")
console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]))


/* EXERCISE 3:
    Use destructuring to fill in the blanks and use the property names as variables:
*/

const vacation = {
    location: "Burly Idaho",
    duration: "2 weeks"
};

const {
    location,
    duration
} = vacation

function parseSentence() {
    return `We're going to have a good time in ${location} for ${duration}`
}

console.log("\n3:")
console.log(parseSentence())


/* EXERCISE 4:
    Use destructuring to make this code ES6:

    function returnFirst(items){
        const firstItem = items[0]; 
        return firstItem
    }
*/

const returnFirst = (items) => {

    const [firstItem] = items;
    return firstItem
}
console.log("\n4:")
console.log(returnFirst(["cat", "dog", "cow", "pig"]))


/* EXERCISE 5:
    Write destructuring code to assign variables that will help us 
    return the expected string. Also, change the string to be using 
    Template literals:

    function returnFirst(items){
        const firstItem = items[0]; 
        return firstItem
    }
*/

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr) {
    const [firstFav, secondFav, thirdFav] = favoriteActivities
    return `My top three favorite activities are, ${firstFav}, ${secondFav} and, ${thirdFav}`
}

console.log("\n5:")
console.log(returnFavorites(favoriteActivities))

/* EXERCISE 6:
    Use the Rest and Spread Operator to help take any number of arrays, 
    and return one array. You will need to change how the arrays are passed in. 
    You may write it assuming you will always recieve three arrays if you would like to.
*/

function combineAnimals(arr1, arr2, arr3) {
    return ([...arr1, ...arr2, ...arr3])
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);

// ["dog", "cat", "mouse", "jackolope", "platypus"]
console.log("\n6:")
console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))


/* EXERCISE 7:
    Try to make the following function more ES6xy:

        function product(a, b, c, d, e) {  
          var numbers = [a,b,c,d,e];
        
          return numbers.reduce(function(acc, number) {
            return acc * number;
          }, 1)
        }
        
    Make the following function more ES6xy. Use at least both the rest and spread operators:
        
        function unshift(array, a, b, c, d, e) {  
          return [a, b, c, d, e].concat(array);
        }
*/

product = (a, b, c, d, e) => {
    const numbers = [a, b, c, d, e];
    return numbers.reduce((acc, number) => acc * number, 1)
}

unshift = (array, a, b, c, d, e) => [a, b, c, d, e, ...array]

console.log("\n7:")
console.log(product(1, 2, 3, 4, 5))
console.log(unshift(["cat", "dog", "mouse"], 1, 2, 3, 4, 5))


/* EXERCISE 8:
    Write some destructuring code to help this function out. Use object literals to simplify it:

    function populatePeople(names){
        return names.map(function(name){
            name = name.split(" ");
            // your code
            return {
                firstName: firstName,
                lastName: lastName
            }
    }
    
    populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
    //[
    //  {firstName: "Frank", lastName: "Peterson"},
    //  {firstName: "Suzy", lastName: "Degual"},
    //  {firstName: "Liza", lastName: "Jones"},
    //]
*/

function populatePeople(names) {
    return names.map(function (name) {
        name = name.split(" ");
        const firstName = name[0]
        const lastName = name[1]

        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}  

//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]

console.log("\n8:")
console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))