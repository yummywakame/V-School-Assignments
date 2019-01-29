// Create a new JavaScript file and put these two arrays at the beginning. 
// You will write a single function that performs many operations on them.
// After every command, use console.log() to inspect your arrays.
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log(" * fruit: " + fruit);
console.log(" * vegetables: " + vegetables);
console.log("");

function arrayManipulation(fruit, vegetables) {
    // 0. Remove the last item from the vegetable array.
    vegetables.pop();
    console.log("0. vegetables: " + vegetables)
    
    // 1. Remove the first item from the fruit array.
    fruit.shift();
    console.log("1. fruit: " + fruit)
    
    // 2. Find the index of "orange."
    var fruitIndex = fruit.indexOf("orange")
    console.log("2. fruitIndex: " + fruitIndex)
    
    // 3. Add that number to the end of the fruit array.
    fruit.push(fruitIndex);
    console.log("3. fruit: " + fruit)
    
    // 4. Use the length property to find the length of the vegetable array.
    var vegArrLen = vegetables.length;
    console.log("4. vegArrLen: " + vegArrLen)
    
    // 5. Add that number to the end of the vegetable array.
    vegetables.push(vegArrLen);
    console.log("5. vegetables: " + vegetables)
    
    // 6. Put the two arrays together into one array. Fruit first. Call the new Array "food".
    var food = fruit.concat(vegetables)
    console.log("6. food: " + food)
    
    // 7. Remove 2 elements from your new array starting at index 4 with one method.
    food.splice(4, 2)
    console.log("7. food: " + food)
    
    // 8. Reverse your array.
    food.reverse();
    console.log("8. food: " + food)
    
    // 9. Turn the array into a string and return it.
    return(food.join())
}

// If you've done everything correctly, the last step should print the following string 
// to the console:
// 3,pepper,1,watermelon,orange,apple

console.log("\n" + arrayManipulation(fruit, vegetables));