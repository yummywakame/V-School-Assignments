// PRELIMINARIES
// 1. Write an if statement that prints "is greater than" if 5 is greater than 3
if (5 > 3) {
    console.log("is greater than")
}

// 2. Write an if statement that prints "is the length" if the length of "cat" is 3
var cat = [1,2,3]

if (cat.length === 3) {
    console.log("is the length")
}

// 3. Write an if/else statement that checks if "cat" is equal to "dog" and prints, 
//    "not the same" when they are not equal.
if ("cat" !== "dog") {
    console.log("not the same")
}

// BRONZE MEDAL
// 1. Using the below object, write an if statement that prints 
//    <theNameOfThePersonInObject> 
//    is allowed to go to the movie if they are old enough (18 or older), 
//    and the opposite if they are not older than 18.
var person = {
    name: "Bryce",
    age: "42"
}
if (person.age >= 18) {
    console.log(person.name + " is 18 or over and allowed to go to an R-Rated movie.")
} else {
    console.log(person.name + " is NOT 18 or over, so is not allowed to go to an R-Rated movie.")
}

// 2. Using that same object, only allow them into the movie if their name starts with "B"
if (person.name.charAt(0) === "B") {
    console.log(person.name + "'s name starts with 'B' so they are allowed into movie.")
} else {
    console.log(person.name + "'s name does NOT start with 'B' so they are not allowed into movie.")
}

// 3. Using that same object, only allow them into the movie if their name starts with "B" 
//    and they are older than 18.
if (person.name.charAt(0) === "B" && person.age >= 18) {
    console.log(person.name + "'s name starts with 'B' and they are 18 or over, so they are allowed into movie.")
} else {
    console.log(person.name + "'s name either does NOT start with 'B' and or they are under the age of 18, so they are not allowed into movie.")
}

// SILVER MEDAL
// 1. Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", 
//    prints "loose" or "abstract" if 1 equals "1" without type checking, and prints 
//    "not equal at all" if it doesn't print the other stuff.
if (1 === "1") {
    console.log("strict")
} else if (1 == "1") {
    console.log("loose")
} else {
    console.log("not equal at all")
}

// 2. Write an if statement that prints "yes" if 1 is less than or equal to 2 and 2 is equal to 4
//    OR!!!
//    3 * 4 is greater than 10 and 5 plus 10 is greater than 10.
if ((1 <= 2 && 2 === 4) || (3 * 4 > 10 && 5 + 10 > 10)) {
    console.log("yes")
}

// GOLD MEDAL
// 1. Write an if statement that checks to see if "dog" is a string
if (typeof "dog") {
    console.log("'dog' is a string.")
}

// 2. Write an if statement that checks to see if "true" is a boolean
if (typeof true) {
    console.log("'true' is not a boolean")
} else {
    console.log("'true' is a boolean")
}

// 3. Write an if statement that checks to see if a variable has been defined or not
var myVar;

if (myVar) {
    console.log("myVar is defined")
} else {
    console.log("myVar is undefined")
}

// 4. Write an if statement comparing letters to numbers using < and >. 
//    Try to figure out what letters are going to be "greater than" other numbers or letters. 
//    For example: is "s" greater than 12?
if ("s" > 12) {
    console.log("'s' is greater than 12")
} else {
    console.log("'s' is not greater than 12")
}

// 5. Write a ternary statement that console.logs whether a number is odd or even. For example:
//         var myNum = 10;
//         // Write your ternary here to log if `myNum` is odd or even.
//    (It should continue to work correctly even if myNum changes to a different number).
myNum = 10

if(myNum % 2) {
    console.log("myNum is odd.")
} else {
    console.log("myNum is even.")
}