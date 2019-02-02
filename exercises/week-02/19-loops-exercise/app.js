/* 1. Write a function that accepts a string as input. Write a loop and
    add each letter of the string to an array. Then return that new array.
*/
function strToArr(str) {
    var strArr = str.split('')
    var newArr = []

    for (var i = 0; i < strArr.length; i++) {
        newArr.push(strArr[i])
    }
    return newArr

}
console.log("1: " + strToArr("Welcome"))

/* 2. Write a function that accepts a string and a single character as inputs. 
    Write a loop that iterates over the string, and returns the position of 
    the first occurrence of the specified character. If the character is not 
    found, tell that to the user by returning "Character not found!".
*/
function isCharFound(str1, str2) {
    if (str1.indexOf(str2) > -1) {
        return ("For '" + str1 + "', character '" + str2 + "' is first found at index " + str1.indexOf(str2))
    } else {
        return ("Character not found!")
    }
}

console.log("\n2: " + isCharFound("Hello", "e"))
console.log("   " + isCharFound("Goodbye", "a"))

/* 3. Write a function that accepts an array of numbers as a parameter.
    Return "Found 42!" when the number 42 is found, return "42 not found!"
    if it is not in the array.
*/
function find42(arr) {
    if (arr.indexOf(42) > -1) {
        return ("Found 42!")
    } else {
        return ("42 not found!")
    }
}

console.log("\n3: " + find42([1, 5, 6, 42, 55, 9076]))
console.log("   " + find42([561, 45, 0, 420, -55, 4]))
console.log("   " + find42([561, 45, 0, -42, -55, 4]))

/* 4. Write a function that accepts 10 numbers in an array and then prints out 
    the smallest number out of the ten without using Math.min().
*/
function findSmallestNum(numArr) {
    if (numArr.length === 10) {
        var smallestNum
        for (var i = 0; i < 10; i++) {
            if (smallestNum > numArr[i] || !(smallestNum)) {
                smallestNum = numArr[i]
            }
        }
        return (smallestNum)
    } else {
        return ("Array length !== 10")
    }
}

console.log("\n4: Smallest number = " + findSmallestNum([0, 1, 2, -3, 44, 57, 777, 890, -99, 10000]))
console.log("   " + findSmallestNum([0, 1, 2,]))