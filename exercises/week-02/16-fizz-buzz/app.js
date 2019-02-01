/* 
    Write a for loop that plays the FizzBuzz game. 

    Your output should count 1 to 100 and replace 
    everything divisible by 3 with "Fizz", everything 
    divisible by 5 with "Buzz", and everything divisible 
    by both 3 and 5 with "FizzBuzz"
*/
var fizzbuzz = ""

for (var i = 1; i <= 100; i++) {
    if (!(i % 5) && !(i % 3)) {
        fizzbuzz = fizzbuzz + "FizzBuzz "
    } else if (!(i % 5)) {
        fizzbuzz = fizzbuzz + "Fizz "
    } else if (!(i % 3)) {
        fizzbuzz = fizzbuzz + "Buzz "
    } else {
        fizzbuzz = fizzbuzz + i + " "
    }

}
console.log(fizzbuzz)