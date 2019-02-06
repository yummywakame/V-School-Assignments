/*
    Write a function that takes an array of numbers and returns the largest (without using Math.max())
        
        largest([3, 5, 2, 8, 1]) // => 8
*/
arr = [3, 5, 2, 8, 1]

function largest(arr) {
    num = arr[0]
    
    for(var i = 0, len = arr.length; i < len; i++) {
        if(arr[i] > num) {
            num = arr[i]
        }
    }
    return num;

}
console.log('1. The largest number in array [' + arr + '] is: ' + largest(arr))

/*
    Write a function that takes an array of words and a character and return each word that has that letter present.

        lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") // => ["C%4!", "Hey!"]

*/
str = '!'
arr = ["#3", "$$$", "C%4!", "Hey!"]

function lettersWithStrings(arr, str) {
    var newArr = []
    for (var i = 0, len = arr.length; i < len; i++) {
        // if "!" found in the array's chosen string
        if (arr[i].match(/!/g)) {
            // add the string to newArr
            newArr.push(arr[i])
        }
    }

    return newArr
}
console.log(
    '\n2. In the array [' + 
    arr + '], the char "' + 
    str + '" appears in the following words: [' + 
    lettersWithStrings(arr, str) 
    + '].'
)

/*
    Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
    
        isDivisible(4, 2) // => true
        isDivisible(9, 3) // => true
        isDivisible(15, 4) // => false
*/

num1 = 4
num2 = 2

function isDivisible(num1, num2) {
    if (!(num1 % num2)) {
        return (true)
    } else {
        return (false)
    }
}

if (isDivisible(num1, num2)) {
    console.log('\n3. ' + num1 + ' is divisible by ' + num2 + '.')
} else {
    console.log('\n3. ' + num1 + ' is not divisible by ' + num2 + '.')
}

num1 = 9
num2 = 3

if (isDivisible(num1, num2)) {
    console.log('   ' + num1 + ' is divisible by ' + num2 + '.')
} else {
    console.log('   ' + num1 + ' is not divisible by ' + num2 + '.')
}

num1 = 15
num2 = 4

if (isDivisible(num1, num2)) {
    console.log('   ' + num1 + ' is divisible by ' + num2 + '.')
} else {
    console.log('   ' + num1 + ' is not divisible by ' + num2 + '.')
}



