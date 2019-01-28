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