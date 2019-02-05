/*
    Using the NodeJS package readline-sync, create an interactive program that asks you 
    some personal information (name, age, favorite color, etc.) and reports back to you 
    what you entered. Make sure to include the following string manipulations:
    
    Program specifications:

    - You must use the readline-sync package.
    - Make sure to store all input from the user in a variable using the question method 
      of the readline-sync package.
    - Use special string characters such as the newline character \n, or the tab character 
      \t to make your output more readable.
*/

// Storing the entire readline sync library in a variable
var readline = require('readline-sync')

console.log('Hello, my name is Alice. Help me get to know you!')

/* 1. Make one of the inputs all uppercase (i.e., given the string “hello” prints “HELLO”) */
var firstName = readline.question('What is your first name? ')
var lastName = readline.question('and your last name? ')
console.log('\nThanks! Nice to meet you ' + firstName.toUpperCase() + '.')

/* 2. Concatenate (add) two separate strings together */
var age = readline.question('\nI am older than your mom. What\'s your age? ')
console.log('\nAwesome. So far I know that your name is ' + firstName + ' ' + lastName + ' and you\'re ' + age + ' years old.')

var background = readline.question('\nGive me a short background about you, and I\'ll repeat back what I remember: ')

// getting the length of the background string for reuse
var charLength = background.length
var halfStrIndex = Math.floor(background.length / 2)

function sliceStringFromIndex(str, strIndex) {
    var str = str.slice(strIndex, str.length)
    return(str)
}

/* 3. Report back the number of characters in a given input */
console.log('\nSo, the info you gave me is ' + charLength + ' characters long.')
console.log('\nThis was the last half:')

/* 4. Given a long message (more than twenty letters), return only the last half of the message */
console.log('"' + sliceStringFromIndex(background, halfStrIndex) + '"')

/* 5. Using the same long message (but without making the user type it in again), have your program
        print it to the terminal for the user to read again, but specify from where it will print.
        Example: If the long message given in #4 was hello my name is John and I'm 30 then the user 
        could give any number. So if the user entered 14 it would print off s John and I'm 30
*/
var chosenIndex = readline.question(
    '\nWould you like me to start from somwewhere else in your info?'
    + '\nChoose a number in the range [0 - ' + (charLength - 1) + '] '
)
console.log('\nHere ya go:')
console.log('"' + sliceStringFromIndex(background, chosenIndex) + '"')







