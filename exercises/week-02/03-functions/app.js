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


/* 
    BONUS 1: Write a function that accepts a number ‘n’ as a parameter. 
    Then print the first ‘n’ Fibonacci numbers and return their sum.
*/
var n = 12

// Basic Fibonacci recursive function
function fibonacci(n) {
    if (n <= 1) return 1;
  
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// First find the number in the 'n' position of the fibonacci sequence
console.log("\n5: The number in position " + n + " of the fibonacci sequence = " + fibonacci(n - 1))

// Create an array with all the numbers in sequence up to n
function fibonacciArray(n) {
    var fibArray = []

    for (i = 0; i < n; i++) {
      fibArray[i] = fibonacci(i)
    }
    return(fibArray)
}
console.log("   Fibonacci sequence for n = " + n + ": " + fibonacciArray(n))

// Now add them all up
var reducer = (accumulator, currentValue) => accumulator + currentValue
console.log("   The sum of the first " + n + " numbers = " + fibonacciArray(n).reduce(reducer))  


/* 
    BONUS 2: Write a function that accepts a string as a parameter. 
    Return the most frequently occuring letter in that string. 
    ( White spaces count as a letter )
*/
var myStr = "Sassafrass"

// convert to uppercase and split to an array
myStr = myStr.toUpperCase().split()

// find the letter with the most occurrances
function getMax(str) {
    var letterCount = [[]]
    var row = 0;
    var col = 0;
    
    return(str)
}
console.log("\n\n6: The most frequent letter in the string '" + myStr + "' is: ")
console.log("A: " + getMax(myStr))

/*
    BONUS 3: Write a function to solve the quadratic equation. 
    (It should accept three numbers as parameters, and then return an array 
    with the resulting x values.)
*/