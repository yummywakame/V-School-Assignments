# Tuesday Morning Warmup
### > For V School // Full Stack JavaScript // January 2019 Cohort

#### Completed according to assignment instructions: 
- <a href="https://github.com/yummywakame/V-School-Assignments/blob/master/exercises/week-02/06-tuesday-morning-warmup/instructions.js">instructions.js</a>

#### app.js:
```javascript
/*
    1. Write a function that takes a string as an parameter/argument and returns
    that string uppercased.
*/

function upperCaseMe(str){
    return(str.toUpperCase())
}

console.log(upperCaseMe("good morning!")) // GOOD MORNING!



/*
    2. Write a function that takes a string and returns that string reversed.
*/

function reverseMe(str){
    return(str.split("").reverse().join(""))
}

console.log(reverseMe("What do I spell backwards?")) // ?sdrawkcab lleps I od tahW



/*
    3. Write a function that takes a string and a number.
    Return the string slice from index 0 to that argument number.
*/

function sliceMe(str, num){
    return(str.slice(0, num))
}

console.log(sliceMe("This is the string to slice.", 10)) // This is th
```

#### Console:

```console
foo@bar:~/assignments/exercises/week-02/06-tuesday-morning-warmup (master) $ node app.js
GOOD MORNING!
?sdrawkcab lleps I od tahW
This is th
```
