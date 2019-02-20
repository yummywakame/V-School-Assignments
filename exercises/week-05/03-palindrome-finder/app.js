/*
    Palindrome Finder
    
    Write a function that accepts a string as an argument and returns true if the string is a palindrome (the string is the same forward and backward), or false if it is not.
    
    A string is still considered a palindrome despite letter capitalization, spaces, or punctuation.
    
    E.g.:
    
        isPalindrome("Star Rats!");  // true
        isPalindrome("palindrome");  // false
        isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!");  // true
*/

function isPalindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, '')
    const len = Math.floor(str.length / 2)
    const str1 = str.slice(0, len)
    const str2 = str.split("").reverse().join("").slice(0, len)

    if (str1 === str2) {
        return true
    } else {
        return false
    }
    
}

console.log(isPalindrome("Star Rats!"))  // true
console.log(isPalindrome("palindrome"))  // false
console.log(isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!"))  // true