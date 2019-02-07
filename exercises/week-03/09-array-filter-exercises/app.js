/*
    ARRAY .FILTER() EXERCISES
    Use the built-in array method .filter() to solve all of these problems:
    Feel free to copy and paste the function and tests in this assignment.
*/

/* 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
    
    function fiveAndGreaterOnly(arr) {
        // your code here
    }
    
    // test
    console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]
*/

function fiveAndGreaterOnly(arr) {
    return arr.filter(function (num) {
        if (num > 4)
            return num
    })
}

var arr = [3, 6, 8, 2]
// test
console.log("*** ARRAY: [ " + arr + " ] ***")
console.log("\n1: Return only numbers greater than 4")
console.log(fiveAndGreaterOnly(arr)); /// [6, 8]

/* 2) Given an array of numbers, return a new array that only includes the even numbers.

    function evensOnly(arr) {
        // your code here
    }
    
    // test
    console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]
*/

function evensOnly(arr) {
    return arr.filter(function (num) {
        if (!(num % 2))
            return num
    })
}

// test
console.log("\n2: Return only even numbers")
console.log(evensOnly(arr)); /// [6, 8, 2]

/* 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
    
    function fiveCharactersOrFewerOnly(arr) {
      // your code here
    }
    
    // test
    console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]
*/

function fiveCharactersOrFewerOnly(arr) {
    return arr.filter(function (item) {
        if (item.length < 6)
            return item
    })
}

arr = ["dog", "wolf", "by", "family", "eaten", "camping"]

// test
console.log("\n*** ARRAY: [ " + arr + " ] ***")
console.log("\n3: Return only words 5 characters or less")
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

/* 4) Given an array of people objects, return a new array that has filtered out 
    all those who don't belong to the club.
    
    function peopleWhoBelongToTheIlluminati(arr){
      // your code here
    }
    
    // test
    console.log(peopleWhoBelongToTheIlluminati([
        {
            name: "Angelina Jolie",
            member: true
        },
        {
            name: "Eric Jones",
            member: false
        },
        {
            name: "Paris Hilton",
            member: true
        },
        {
            name: "Kayne West",
            member: false
        },
        {
            name: "Bob Ziroll",
            member: true
        }
    ]));

*/

function peopleWhoBelongToTheIlluminati(arrObj) {
    return arrObj.filter(function (item) {
        if (item.member)
            return item
    })
}

var arrObj = [{
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
]

// test
console.log("\n*** ARRAY: ***")
console.log(arrObj)
console.log("\n4: Return only people who are Illuminati members")
console.log(peopleWhoBelongToTheIlluminati(arrObj));

/* 5) Filter out all the people who are not old enough to see The Matrix (younger than 18)
    
    function ofAge(arr){
      // your code here
    }
    
    // test
    console.log(ofAge([
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
*/

function ofAge(arrObj) {
    return arrObj.filter(function(item) {
        if(item.age >= 18)
            return item
    })
}

arrObj = [
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
]

// test
console.log("\n*** ARRAY: ***")
console.log(arrObj)
console.log("\n5: Return only people old enough to see the Matrix (over 18")
console.log(ofAge(arrObj));