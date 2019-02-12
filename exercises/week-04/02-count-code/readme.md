# Code Count
### > For V School // Full Stack JavaScript // January 2019 Cohort

#### Completed according to assignment instructions: 
- https://coursework.vschool.io/count-code/

*Run:* ~$ node <a href="app.js">app.js</a>

#### app.js:

```javascript
/* 
    Write a function that returns the number of times that the string "code" 
    appears anywhere in the given string, except we'll accept any letter for 
    "d", so "cope" and "cooe" would also count.

    Return the count, including any substitutions for the letter "d".
*/
function countCode(string) {  
  var regex = /co.e/g
  return ((string || '').match(regex) || []).length
}

console.log(countCode("aaacodebbb"))
console.log(countCode("codexxcode"))
console.log(countCode("cozexxcope"))

console.log("\n")
// Output: 
// countCode("aaacodebbb") returns 1
// countCode("codexxcode") returns 2
// countCode("cozexxcope") returns 2


/* 
    Extra credit
    Allow any uppercase characters to substitute for "c"
*/
function countCode2(string) {  
    var regex = /[A-Z,a-z]o.e/g
    return ((string || '').match(regex) || []).length
}

console.log(countCode2("aaaAodebbb"))
console.log(countCode2("codexxZode"))
console.log(countCode2("cozexxcope"))
```
