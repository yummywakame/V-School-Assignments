// ES5
function sum(a) {
    return function(b) {
        return a + b
    }
}
console.log(sum(2)(5))

// ES6
const ES6sum = (a) => (b) => a + b
console.ES6sum(sum(2)(5))