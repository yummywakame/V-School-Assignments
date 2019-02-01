# FizzBuzz
### > For V School // Full Stack JavaScript // January 2019 Cohort

*Run:* ~$ node <a href="https://github.com/yummywakame/V-School-Assignments/blob/master/exercises/week-02/16-fizz-buzz/app.js">app.js</a>

### app.js:
```javascript
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
```

#### Console:
```console
foo@bar:~/assignments/exercises/week-02/16-fizz-buzz (master) $ node app.js
1 2 Buzz 4 Fizz Buzz 7 8 Buzz Fizz 11 Buzz 13 14 FizzBuzz 16 17 Buzz 19 Fizz Buzz 22 23 Buzz Fizz 26 Buzz 28 29 FizzBuzz 31 32 Buzz 34 Fizz Buzz 37 38 Buzz Fizz 41 Buzz 43 44 FizzBuzz 46 47 Buzz 49 Fizz Buzz 52 53 Buzz Fizz 56 Buzz 58 59 FizzBuzz 61 62 Buzz 64 Fizz Buzz 67 68 Buzz Fizz 71 Buzz 73 74 FizzBuzz 76 77 Buzz 79 Fizz Buzz 82 83 Buzz Fizz 86 Buzz 88 89 FizzBuzz 91 92 Buzz 94 Fizz Buzz 97 98 Buzz Fizz
```
