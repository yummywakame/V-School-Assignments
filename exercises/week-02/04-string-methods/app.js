// 1. Make a function that will return any given string into all caps 
//    followed by the same string all lowercase.
//      capilizeAndLowercase("Hello") // => "HELLOhello"

var str = "Hello"

function capilizeAndLowercase (str) {
    str1 = str.toUpperCase()
    str2 = str.toLowerCase()
    return(str1 + str2)

}
console.log("1: Return string '" + str + "' in UPPERCASE then in lowercase:")
console.log("A: " + capilizeAndLowercase(str))

// 2. Make a function that returns a number half the length, and rounded down. 
//    You'll need to use Math.floor().
//      findMiddleIndex("Hello") // => 2
//      findMiddleIndex("Hello World") // => 5

var word = "Hello World"

function findMiddleIndex(str) {
    return(Math.floor(str.length / 2))
}
console.log("\n2: Halve and round down the string length of '" + word + "':")
console.log("A: " + findMiddleIndex(word))

// 3. Make a function that uses slice() and the other functions you've 
//    written to return the first half of the string
//      returnFirstHalf("Hello") // => "He"
//      returnFirstHalf("Hello World") // => "Hello"

str = "Hello World"

function returnFirstHalf(str) {
        return(str.slice(0, Math.floor(str.length / 2)))
}
console.log("\n3: Slice and display the first half of the string '" + str + "'")
console.log("A: " + returnFirstHalf(str))

// 4. Make a function that takes a string and returns that string where 
//    the first half is capitalized, and the second half is lower cased. 
//    (If the string length is odd, capitalize the shorter of the first half.)
//      capilizeAndLowercase("Hello") // => "HEllo"
//      capilizeAndLowercase("Hello World") // => "HELLO world"

str = "Hello"
function capilizeAndLowercase(str) {
    var strIndex = Math.floor(str.length / 2)
    
    var str1 = str.slice(0, strIndex).toUpperCase()
    var str2 = str.slice(strIndex, str.length).toLowerCase()
    return(str1 + str2)
}
console.log("\n4: For the string '" + str + "', uppercase the first half and lowercase the second half:")
console.log("A: " + capilizeAndLowercase(str))

// 5. Optional Code Challenge (This one is a step up in difficulty):
//    Make a function that takes any string and capitalizes any character 
//    that follows a space.
//      capitalize("hey friends! practice practice practice!") // -> "Hey Friends! Practice Practice Practice!"

// Capitalize first letter in each word in the String array
function capitalizeAfterSpace(str) {
    // convert input to lowercase and split each word into an array
    var myStr = str.toLowerCase().split(" ")
    // convert the first letter of each word in the array to uppercase and add the rest
    for (var i = 0; i < myStr.length; i++) {
        myStr[i] = myStr[i][0].toUpperCase() + myStr[i].slice(1)   
    }
    // rejoin array into a single string and return
    return (myStr.join(" "))
}

str = "hey friends! practice Practice practice!"
console.log("\n5: Take string '" + str + "' and capitalize any character that follows a space:")
console.log("A: " + capitalizeAfterSpace(str))