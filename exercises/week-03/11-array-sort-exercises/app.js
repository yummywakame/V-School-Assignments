/* 
    ARRAY SORT EXERCISES
    Use the built-in .sort() method on arrays to solve all of these problems
*/


/* 1) Sort an array from smallest number to largest */

function leastToGreatest(arr) {
    return arr.sort(function(a, b) {
        return a - b
    })
}

var arr = [1, 3, 5, 2, 90, 20]

console.log("\n*** ARRAY:***")
console.log(arr)
console.log("\n1: Sort an array from smallest number to largest")
console.log(leastToGreatest(arr)); // [1, 2, 3, 5, 20, 90] 


/* 2) Sort an array from largest number to smallest */

function greatestToLeast(arr) {
    return arr.sort(function(a, b) {
        return b - a
    })
}

console.log("\n2: Sort an array from largest number to smallest")
console.log(greatestToLeast(arr)); // [90, 20, 5, 3, 2, 1]


/* 3) Sort an array from shortest string to longest */

function lengthSort(arr) {
    return arr.sort(function(a, b) {
        return (a.length - b.length)
    })
}

var arr = ["dog", "wolf", "by", "family", "eaten"]

console.log("\n*** ARRAY:***")
console.log(arr)
console.log("\n3: Sort an array from shortest string to longest")
console.log(lengthSort(arr)); // ["by", "dog", "wolf", "eaten", "family"] 


/* 4) Sort an array alphabetically */

function alphabetical(arr) {
    return arr.sort(function(a, b) {
        return (a.localeCompare(b))
    })

}

console.log("\n4: Sort an array alphabetically")
console.log(alphabetical(arr)); // ["by", "dog", "eaten", "family", "wolf"]