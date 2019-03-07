/* TWO SUM

    Given an array of integers and a target integer, return the 
    indices of the FIRST two numbers which add up to the target.
    
    Assume the same element may not be used twice.
    
    Example:
    twoSum([1,2,3], 4);
    //returns [0, 2] because 1 + 3 equals 4
*/

twoSum = (arr, num) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i]+arr[j] === num && i !== j) {
                newArr.push(i, j)
            }
        }
    }
    return (newArr.length) ? newArr : "Sum not found"
}

console.log("\nTest1: return the indexes of [1, 2, 3] that add up to '4'")
console.log(twoSum([1, 2, 3], 4)) //returns [0, 2] because 1 + 3 equals 4

console.log("\nTest2: return the indexes of [1, 17, 5, 3] that add up to '20'")
console.log(twoSum([1, 17, 5, 3], 20)) //returns [1, 3] because 17 + 3 equals 20

console.log("\nTest3: return the indexes of [1, 17, 5, 3] that add up to '20'")
console.log(twoSum([1, 17, 5, 3], 20)) //returns [1, 3] because 17 + 3 equals 20

console.log("\nTest4: return the indexes of [1, 17, 5, 3] that add up to '50'")
console.log(twoSum([1, 17, 5, 3], 50)) //returns "Sum not found"