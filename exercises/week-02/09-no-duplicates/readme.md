# No Duplicates
### > For V School // Full Stack JavaScript // January 2019 Cohort

#### Completed according to assignment instructions: 
- https://coursework.vschool.io/no-duplicates/

#### app.js

```javascript
/*
    Given a string, remove any duplicate letters.

    Example:
    var input = "bookkeeper larry";

    // Output: "bokepr lay"
*/
function removeDuplicates(str) {
    str = str.split('')
    for (var i = 0, j = 1; i < str.length; i++) {
        if (str[i] === str[j]) {
            str.splice(j, 1);
            j++;
        } else {
            j++;
        }
    }
    return str.join(''); 
}

console.log("1. " + removeDuplicates("bookkeeper larry"))


/*
    Extra Credit:
*/
//  Create a function that randomly removes a letter.
function randomRemove(str) {
    var randNum = Math.floor(Math.random() * (str.length - 1)) + 1
    
    str = str.split('')
    str.splice(randNum, 1)
    str = str.join('')
    return str
}

console.log("2. " + randomRemove("My Crazy String!"))


//  Create a function that scrambles the original string.
function shuffleString(str) {
    str = str.split('')
    for (var i = str.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [str[i], str[j]] = [str[j], str[i]];
    }
    str = str.join('')
    return str;
}

console.log("3. " + shuffleString("My Crazy String!"))


//  Create a function using regular expressions that remove all vowels.
function removeAllVowels(str) {
    str = str.split('')
    
    for (i = 0, len = str.length; i < len; i++) {
        // Check if character is a vowel
        if(str[i] === 'a' || str[i] === 'e'|| str[i] === 'i' || str[i] === 'o'|| str[i] === 'u'||
        str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U') {
            str.splice(i, 1);
        } 
    }
    str = str.join('')

    return str
}

console.log("4. " + removeAllVowels("My Crazy String!"))
```

*Run:* ~$ node <a href="https://github.com/yummywakame/assignments/blob/master/exercises/loop-olympics/app.js">app.js</a>

#### Console:
```console
foo@bar:~/assignments/exercises/week-02/09-no-duplicates (master) $ node app.js
1. bokeper lary
2. M Crazy String!
3. yzM SngrC! ratyi
4. My Crzy Strng!
```
