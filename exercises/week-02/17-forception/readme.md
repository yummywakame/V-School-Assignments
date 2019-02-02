# Forception
### > For V School // Full Stack JavaScript // January 2019 Cohort

#### Completed according to assignment instructions: 
- https://coursework.vschool.io/for-within-for-within-for/

*Run:* ~$ node <a href="app.js">app.js</a>

#### app.js:
```javascript
/* 
    Write a function that takes two arrays as parameters. 
    The first array will be an array of people's names, 
    and the second array will be the alphabet. Using a for 
    loop within a for loop, create and return array that 
    looks like this:

        function forception(people, alphabet){
            // your code here
        }
        
        // Output: 
        ["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jacob:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jingle:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Heimer:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Schmidt:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    
    Here's the array of names and the alphabet to get you started:

        var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
        var alphabet = "abcdefghijklmnopqrstuvwxyz"
*/
function forception(people, alphabet) {
    // new array to hold the final output so it can console.log in one line
    combinedArr = []

    // loop through the people names first
    for (var i = 0, len1 = people.length; i < len1; i++) {
        combinedArr.push(people[i])

        // then loop through the alphabet to add all of them after each name
        for (var j = 0, len2 = alphabet.length; j < len2; j++) {
            combinedArr.push(alphabet[j].toUpperCase())
        }
    }
    return (combinedArr)
}

console.log(
    "["
    + forception(["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"], "abcdefghijklmnopqrstuvwxyz")
    + "]")
```

#### Console:
```console
foo@bar:~/assignments/exercises/week-02/17-forception (master) $ node app.js
[Jon,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,Jacob,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,
X,Y,Z,Jingle,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,Heimer,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S
,T,U,V,W,X,Y,Z,Schmidt,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z]
```
