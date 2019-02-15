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

const {location, duration} = vacation

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

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = favoriteActivities
    return `My top three favorite activities are, ${firstFav}, ${secondFav} and, ${thirdFav}`
}

console.log("\n5:")
console.log(returnFavorites(favoriteActivities))