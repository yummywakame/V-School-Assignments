// 1. Write a function that accepts two numbers as parameters, 
//    and returns the sum.
function returnTwoNums(x, y) {
    return(x + y)
}
var num1 = 55
var num2 = 77

console.log("1: Return the sum of " + num1 + " and " + num2 + ":\nA: " + returnTwoNums(num1, num2))

// 2. Write a function that accepts three numbers as parameters, 
//    and returns the largest of those numbers.
var num3 = 3

function returnLargestOfThree(x, y, z) {
    return(Math.max(x, y, z))
}
console.log("\n2: The largest between: " + num1 + ", " + num2 + ", " + num3 + ":\nA: " + returnLargestOfThree(num1, num2, num3))

// 3. Write a function that accepts one number as a parameter, 
//    and returns whether that number is even or odd. 
//    (Return the string "even" or "odd");

function oddOrEven(x) {
    if (x % 2) {
        return ("odd");
    } else {
        return ("even");
    }
    
}
console.log("\n3: Is " + num1 + " odd or even?\nA: " + oddOrEven(num1));

// 4. Write a function that accepts a string as a parameter. 
//    If the length of the string is less than or equal to twenty 
//    characters long, return the string concatenated with itself 
//    (string + string). If the string is more than twenty characters 
//    long, return the first half of the string.
var myStr = "abcdefghijklmnopqrstuvwxyz"

function stringTwerk(str) {
    if (str.length <= 20) {
        return(str + str)
    } else {
        var splitIndex = str.length / 2
        return(str.slice(0, splitIndex))
    }
}
console.log("\n4: Twerk the string - '" + myStr + "':\nA: " + stringTwerk(myStr));

// BONUS 1: Write a function that accepts a number ‘n’ as a parameter. 
//          Then print the first ‘n’ Fibonacci numbers and return their sum.

// BONUS 2: Write a function that accepts a string as a parameter. 
//          Return the most frequently occuring letter in that string. 
//          ( White spaces count as a letter )