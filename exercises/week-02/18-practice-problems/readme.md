# Practice Problems
### > For V School // Full Stack JavaScript // January 2019 Cohort

#### Completed according to assignment instructions: 
- https://coursework.vschool.io/practice/

*Run:* ~$ node <a href="https://github.com/yummywakame/V-School-Assignments/blob/master/exercises/week-02/18-practice-problems/app.js">app.js</a>

#### app.js
```javascript
/* 1 Make a function that takes a string and returns that string reversed.

    Example:
    
    Input: "Hello World"
    Output: "dlroW olleH"
*/

let reverseStr = function(str) {
    return(str.split('').reverse().join(''))

}
console.log("1: " + reverseStr("Hello World"))

/* 2. Make a function that takes a string and returns true if the 
    string could be a number else return false.

    Example:
    
    Input: "3"
    Output: true
    
    Input: "three"
    Output: false
*/

let isNum = function(str) {
    if (str == Number(str)) {
        return(true)
    } else {
        return(false)
    }
}
console.log("\n2: " + isNum("3"))
console.log("2: " + isNum("three"))

/* 3. Make a function that takes a number and returns true 
    if the number is even else return false.

    Example
    
    Input: 4
    Output: true
    
    Input: 3
    Output: false
*/

let isEven = function(num) {
    if (!(num % 2)) {
        return (true)
    } else {
        return (false)
    }
  
}
console.log("\n3: " + isEven(4))
console.log("3: " + isEven(3))

/* 4. Make a function that takes an array and returns the average of the array.
    Example
    
    Input: [1, 2, 3]
    Output: 2
    
    Input: [5, -10, 10, 20]
    Output: 6.25
*/

let averageArray = function(arr) {
    var reducer = (accumulator, currentValue) => accumulator + currentValue
    return(arr.reduce(reducer)/arr.length)
}
console.log("\n4: " + averageArray([1, 2, 3]))
console.log("4: " + averageArray([5, -10, 10, 20]))

/* 5. Make a function that takes two arrays and returns a single array of the items from the arrays added alternatingly.
    Example
    
    Input: ["a", "b", "c"] and [1, 2, 3]
    Output: ["a", 1, "b", 2, "c", 3]
*/

let combineArrays = function(arr1, arr2) {
    newArr = []
    
    for (var i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i],arr2[i])
    }
    return(newArr)
}
console.log("\n5:")
console.log(combineArrays(["a", "b", "c"],[1, 2, 3]))
```

#### Console:
```console
foo@bar:~/assignments/exercises/week-02/18-practice-problems (master) $ node app.js
1: dlroW olleH

2: true
2: false

3: true
3: false

4: 2
4: 6.25

5:
[ 'a', 1, 'b', 2, 'c', 3 ]
```
