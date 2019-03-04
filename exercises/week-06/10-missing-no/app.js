/*  MissingNo.

    Warm up
    Write a function that returns the missing number from an unsorted array of numbers.
    
    Create a function that identifies the range of numbers within a given array.
    Have the function return all numbers missing within the range.
    Example:
    
    function findMissingNo([3,5,4,8,1,2,7]){
        //Find and return the missing number(s)
    }
    
    //Output: 6
    Conditions:
    
    The array has at least 3 elements.
    There are no repeated numbers.
    Test cases:
    
    [2,1,3,5] 
    //Output: 4
    [12,10, 9] 
    //Output: 11
    [-3,0,-2,3,2,-1] 
    //Output: 1
    
    /////////////////////////
    /// Optional Conditions:
    
    * The array has any number of elements.
    * The array has repeated numbers.
    * The function returns the mean, median, and mode.
    
*/

function findMissingNo(arr) {
    //Find and return the missing number(s)
    result = []
    arr.sort((a, b) => a - b)
    console.log("arr sorted = " + arr)
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] !== 1) {
            if (arr[i] + 1 !== result[result.length - 1]) {
                result.push(arr[i] + 1)
            }
        }
    }
    
    return result
}

console.log("\nTest1: arr = [3, 5, 4, 8, 1, 2, 8, 7, 10]")
console.log(findMissingNo([3, 5, 4, 8, 1, 2, 8, 7, 10]))

console.log("\nTest2: arr = [2, 1, 3, 5]")
console.log(findMissingNo([2, 1, 3, 5]))

console.log("\nTest3: arr = [12, 10, 9]")
console.log(findMissingNo([12, 10, 9]))

console.log("\nTest3: arr = [-3, 0, -2, 3, 2, -1]")
console.log(findMissingNo([-3, 0, -2, 3, 2, -1]))