/*  Adjacent Difference

    Given an array of strings, find the 3 adjacent elements with the 
    longest combined length. Return them in the form of an array.

    Example
        function combined(arr){
            // Find the 3 adjacent elements with longest combined length
        }
    
    combined(["this", "is", "an", "array"])
        // Output:  ["is", "an", "array"]
            they have the longest combined length of any 3 adjacent 
            elements. (9 characters)
            In contract, ["this", "is", "an"] only has a combined length 
            of 8 character
*/
    
function combined(arr){
    // Find the 3 adjacent elements with longest combined length

    if (arr.length >= 3) {
    
        let arr2 = []
        for (let i = 0; i < arr.length - 2; i++) {
        
            if (arr2[2]) {
                if ((arr[i].length + arr[i + 1].length + arr[i + 2].length) > (arr2[0].length + arr2[1].length + arr2[2].length)) {
                    arr2 = []
                    arr2 = arr.slice(i, i + 3)
                }   
                         
            } else {
            
                arr2 = arr.slice(0, 3)
                
            }

        }
        
        return arr2
        
    } else {
    
        return "Array too short."
        
    }
}    
console.log("--------------------")
console.log('Test 1: ["this", "is", "an", "array"]')
console.log(combined(["this", "is", "an", "array"])) // [ 'is', 'an', 'array' ]
console.log("-------\n")
console.log('Test 2: ["Find", "the", "3", "adjacent", "elements", "with", "longest", "combined", "length"]')
console.log(combined(["Find", "the", "3", "adjacent", "elements", "with", "longest", "combined", "length"])) // [ 'longest', 'combined', 'length' ]
console.log("-------\n")
console.log('Test 3: ["too", "short"]')
console.log(combined(["too", "short"])) // "Array too short.""
console.log("-------\n")
console.log('Test 4: ["three", "item", "array"]')
console.log(combined(["three", "item", "array"])) // [ 'three', 'item', 'array' ]
console.log("-------\n")
console.log('Test 5: ["lets", "try", "another", "one"]')
console.log(combined(["lets", "try", "another", "one"])) // [ 'lets', 'try', 'another' ]
console.log("-------\n")