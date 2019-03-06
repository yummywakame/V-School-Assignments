/* Every and Some

    Write two functions that mimic the .every and .some array methods.
    
    every(arr, callback): Given an array and a callback function, 
    return true or false based on whether each element of the array, 
    when inserted as a parameter to the callback, returns true.
    
    Example:
    
    every([1,2,"3"], (num)=>{
      return typeof num === "number";
    });
    
    // returns false
    
    some(arr, callback): Given an array and a callback function, return 
    true or false based on whether at least ONE element of the array, 
    when inserted as a parameter to the callback, returns true.
    
    Example:
    
    some(["ben", "jacob", "bob"], (name)=>{
      return name === "jacob";
    });
    
    // returns true

*/

function every(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i])) {
      return false
    }
  }
  return true
  
}
console.log("\n1a: for [1, 2, 3] \ncriteria: return true/false if EVERY item is typeof 'number'")
console.log(every([1, 2, 3], (num) => { // should return true
  return typeof num === "number";
}))

console.log("\n1b: for [1, 2, '3'] \ncriteria: return true/false if EVERY item is typeof 'number'")
console.log(every([1, 2, "3"], (num) => { // should return false
  return typeof num === "number";
}))

console.log("\n1c: for ['ben', 'jacob', 'bob'] \ncriteria: return true/false if EVERY item is 'jacob'")
console.log(every(["ben", "jacob", "bob"], (name) => { // should return false
    return name === "jacob";
}))

console.log("\n1d: for ['jacob', 'jacob', 'jacob'] \ncriteria: return true/false if EVERY item is 'jacob'")
console.log(every(["jacob", "jacob", "jacob"], (name) => { // should return true
    return name === "jacob";
}))

function some(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return true
    }
  }
  return false
  
}

console.log("\n2a: for ['ben', 'jacob', 'bob'] \ncriteria: return true/false if ANY item is 'jacob'")
console.log(some(["ben", "jacob", "bob"], (name) => { // should return true
    return name === "jacob";
}))

console.log("\n2b: for ['ben', 'jacob', 'bob'] \ncriteria: return true/false if ANY item is 'hello'")
console.log(some(["ben", "jacob", "bob"], (name) => { // should return false
  return name === "hello";
}))

console.log("\n2c: for [1, 2, 3] \ncriteria: return true/false if ANY item is typeof 'number'")
console.log(some([1, 2, 3], (num) => { // should return true
  return typeof num === "number";
}))

console.log("\n2d: for [1, 2, '3'] \ncriteria: return true/false if ANY item is typeof 'number'")
console.log(some([1, 2, "3"], (num) => { // should return true
  return typeof num === "number";
}))

console.log("\n2d: for ['1', '2', '3'] \ncriteria: return true/false if ANY item is typeof 'number'")
console.log(some(['1', '2', '3'], (num) => { // should return true
  return typeof num === "number";
}))