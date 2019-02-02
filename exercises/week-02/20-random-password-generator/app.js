/*
    Write a function that generates a random password.

    The function should have a parameter that dictates the length of the password.
    The function may contain any upper and lower case characters.
    The function may contain any numbers and symbols.
    
    Example
    function randomPasswordGenerator(number) {
        //creates a password
        //number specifies length
    }
    
    randomPasswordGenerator(5)
    
    //Returns a password with the length of 5
    //Example: s*3Lj
*/

function randomPasswordGenerator(number) {
    // container for a generated password
    var password = ""
    // all the characters the password could possibly contain
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()*&^%$#@!~~';.,/?><|"

    // choose a random character as many times as the value 
    // of number and add it to the password string
    for (var i = 0; i < number; i++) {
        // find a random index that is no longer than the length of the possible characters string
        // and use it to find a charAt that index in the string
        password += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return password
}
var charNum = 16
var word = "Olivia"

console.log("Random " + charNum + " character password:\n" + randomPasswordGenerator(charNum))


/*** Extra credit ***
    The password should have an additional parameter that accepts a string as an argument, 
    whose characters are all found within the generated password.
*/
function randomPasswordGeneratorWithWord(charNum, string) {
    // container for a generated password
    var password = string

    // all the characters the password could possibly contain
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()*&^%$#@!~~';.,/?><|"

    // Find out if the number of characters in the provided string is 
    // long enough, otherwise add more random characters to
    // to the password to ensure it's length matches provided charNum

    // If string is less than charNum, add more random characters to password
    if (string.length < charNum) {
        charNum = charNum - string.length
        for (var i = 0; i < charNum; i++) {
            // find a random index that is no longer than the length of the possible characters string
            // and use it to find a charAt that index in the string
            password += possible.charAt(Math.floor(Math.random() * possible.length))
        }
    } else if (string.length > charNum) {
        // if the password string is too long, use substring to trim it
        password = password.substring(0, charNum)
    }
    // Now take the password string and shuffle the characters
    return (shuffleString(password))
}

// Shuffle any string
function shuffleString(str) {
    str = str.split('')
    for (var i = str.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        // switch places using their indexes
        [str[i], str[j]] = [str[j], str[i]];
    }
    str = str.join('')
    return str;
}

console.log("\nRandom " + charNum + " character password containing letters from '" + word + "':\n(string length < charNum) \n" + randomPasswordGeneratorWithWord(charNum, word))
charNum = 10
word = "HelloKitty"
console.log("\nRandom " + charNum + " character password containing letters from '" + word + "':\n(string length = charNum) \n" + randomPasswordGeneratorWithWord(charNum, word))
charNum = 5
word = "MyCat1984"
console.log("\nRandom " + charNum + " character password containing letters from '" + word + "':\n(string length > charNum) \n" + randomPasswordGeneratorWithWord(charNum, word))