# Every and Some
### > For V School // Full Stack JavaScript // January 2019 Cohort

#### Completed according to assignment instructions: 
- https://coursework.vschool.io/every-and-some/

>Write two functions that mimic the .every and .some array methods.

>every(arr, callback): Given an array and a callback function, return true or false based on whether each element of the array, when inserted as a parameter to the callback, returns true.

>Example:

```javascript
every([1,2,"3"], (num)=>{
  return typeof num === "number";
});
// returns false
```
>some(arr, callback): Given an array and a callback function, return true or false based on whether at least ONE element of the array, when inserted as a parameter to the callback, returns true.

>Example:

```javascript
some(["ben", "jacob", "bob"], (name)=>{
  return name === "jacob";
});
// returns true
```

*Run:* ~$ node <a href="app.js">app.js</a>

#### Console:
```console
foo@bar:~/assignments/exercises/week-07/01-every-and-some (master) $ node app.js

1a: for [1, 2, 3] 
criteria: return true/false if EVERY item is typeof 'number'
true

1b: for [1, 2, '3'] 
criteria: return true/false if EVERY item is typeof 'number'
false

1c: for ['ben', 'jacob', 'bob'] 
criteria: return true/false if EVERY item is 'jacob'
false

1d: for ['jacob', 'jacob', 'jacob'] 
criteria: return true/false if EVERY item is 'jacob'
true

2a: for ['ben', 'jacob', 'bob'] 
criteria: return true/false if ANY item is 'jacob'
true

2b: for ['ben', 'jacob', 'bob'] 
criteria: return true/false if ANY item is 'hello'
false

2c: for [1, 2, 3] 
criteria: return true/false if ANY item is typeof 'number'
true

2d: for [1, 2, '3'] 
criteria: return true/false if ANY item is typeof 'number'
true

2d: for ['1', '2', '3'] 
criteria: return true/false if ANY item is typeof 'number'
false
```
