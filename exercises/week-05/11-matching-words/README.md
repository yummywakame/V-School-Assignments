# Matching Words
### > For V School // Full Stack JavaScript // January 2019 Cohort

#### Completed according to assignment instructions: 
- https://coursework.vschool.io/matching-words/

*Run:* ~$ node <a href="app.js">app.js</a>

#### Console:
```console
foo@bar:~/assignments/exercises/week-05/11-matching-words (master) $ node app.js
Original inscription:
"Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk cons
equat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on ch
ic eu iceland far next level far lever pull drinking the right vinegar fanny pack p
ull minim right chicharrones migas."

Solution: "pull lever on far right"
```
#### <a href="app.js">app.js</a>:
```javascript
inscription = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."

const matchingWords = (str) => {
    let arr = str.toLowerCase().match(/\w+(?:'\w+)*/g)
    let arr2 = []
    
    // first make an array of only words that appear more than once
    let index = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = index; j < arr.length -1; j++) {
            if (arr[i] === arr[j]) {
                arr2.push(arr[i])
            }
        }
        index++
    }
    
    // remove duplicates from new array
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 1; j < arr2.length -1; j++) {
            if (arr2[i] === arr2[j]) {
                arr2.splice(j, 1)
                j++
            }
        }
    }
    
    return arr2.join(" ")
}
console.log('Original inscription:\n"' + inscription + '"')
console.log('\nSolution: "' + matchingWords(inscription) + '"') // Returns [ 'pull', 'lever', 'on', 'far', 'right' ]
```
