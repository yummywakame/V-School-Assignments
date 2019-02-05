/* 
    JAVASCRIPT CALCULATOR (NODE)
    
    You are going to create a calculator in pure Javascript using NodeJS and readline-sync.

    Your script must have:
    
    - A function that adds two numbers and returns the result
    - A function that multiplies two numbers and returns the result
    - A function that divides two numbers and returns the result
    - A function that subtracts two numbers and returns the result
    - Each function will have 2 parameters, num1, num2

    On the console the prompt will print to the user:
        - Please enter your first number (store that number)
        - Please enter your second number (store that number)
        - Please enter the operation to perform: add, sub, mul, div (then store the operation)

    Based on the operation entered by the user, you will call one of your 4 functions to perform 
    the correct operation
    You will then print to the console: The result is: [the result]
*/

// all the basic functions needed to add, multiply, subtract or divide
function add(num1, num2) {
    return(num1 + ' + ' + num2 + " = " + (Number(num1) + Number(num2)))
}

function sub(num1, num2) {
    return(num1 + ' - ' + num2 + " = " + num1 - num2)
}

function mul(num1, num2) {
    return(num1 + ' x ' + num2 + " = " + num1 * num2)
}

function div(num1, num2) {
    return(num1 + ' / ' + num2 + " = " + num1 / num2)
}

// Store the entire readline sync library in a variable
var readline = require('readline-sync')

// Initial welcome message displays only once
console.log('Hi! I exist to calculate for you. Number crunching is my passion!')

// keep looping instructions until user decides no more
var morePlease = true;

while (morePlease) {

    var firstNum = readline.question('\nPlease give me a number: ')
    var secondNum = readline.question('Thanks! And a second number please: ')
    
    var operand = ['+', '-', '/', 'x']
    var i = readline.keyInSelect(operand, 'Which operand do you want to use? ')

    var resultMessage = '\nI have done the magic for you! ' 
    
    if (operand[i] === '+') {
    // if '+' selected
        console.log(resultMessage + add(firstNum, secondNum))
    } else if (operand[i] === '-') {
    // if '-' selected
        console.log(resultMessage + sub(firstNum, secondNum))
    } else if (operand[i] === '/') {
    // if '/' selected
        console.log(resultMessage + div(firstNum, secondNum))
    } else if (operand[i] === 'x') {
    // if 'x' selected
        console.log(resultMessage + mul(firstNum, secondNum))
    }
    
    morePlease = readline.keyInYNStrict('Would you like another?')
}