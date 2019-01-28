# Hello Class
### > For V School // Full Stack JavaScript // January 2019 Cohort

View js file: https://github.com/yummywakame/assignments/blob/master/exercises/hello-class/app.js

#### Completed according to assignment instructions: 
- https://coursework.vschool.io/hello-class/

#### app.js
```javascript
var name = "Matt";
var age = "42";

// ORIGINAL function expression:
// var sayHello = function(){
//     console.log("hello class")
// }

// CHANGED to a function declaration with
// added name parameter
// added age parameter
function sayHello(name, age){
    console.log("Hello " + name + "! How do you like being " + age + "?");
}

sayHello(name, age);
```
