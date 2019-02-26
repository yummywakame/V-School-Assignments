# Multiplication Table
### > For V School // Full Stack JavaScript // January 2019 Cohort

#### Completed according to assignment instructions: 
- https://coursework.vschool.io/loop-olympics/

#### Warm up
Write a function that returns a 10 X 10 multiplication table (2D array).

For example:

```
multTable();
// Output:
//  [
//    [1,2,3,4,5...],
//    [2,4,6,8,10...],
//    [3,6,9,12,15...],
//    ...
//  ]
```

BONUS:
Allow for the function to take a parameter n and return a table with n * n cells.

```
//if n === 5
```

multTable(n);
```
// Output:
//  [
//    [1,2,3,4,5],
//    [2,4,6,8,10],
//    [3,6,9,12,15],
//    [4,8,12,16,20],
//    [5,10,15,20,25]
//  ]
```

*Run:* ~$ node <a href="app.js">app.js</a>

#### Console:
```console
assignments/assignments/exercises/week-06/03-multiplication-table (master) $ node app.js

0 * 0:
0

1 * 1:
[
 [1]
]

2 * 2:
[
 [1,2],
 [2,4]
]

5 * 5:
[
 [1,2,3,4,5],
 [2,4,6,8,10],
 [3,6,9,12,15],
 [4,8,12,16,20],
 [5,10,15,20,25]
]

10 * 10:
[
 [1,2,3,4,5,6,7,8,9,10],
 [2,4,6,8,10,12,14,16,18,20],
 [3,6,9,12,15,18,21,24,27,30],
 [4,8,12,16,20,24,28,32,36,40],
 [5,10,15,20,25,30,35,40,45,50],
 [6,12,18,24,30,36,42,48,54,60],
 [7,14,21,28,35,42,49,56,63,70],
 [8,16,24,32,40,48,56,64,72,80],
 [9,18,27,36,45,54,63,72,81,90],
 [10,20,30,40,50,60,70,80,90,100]
]

12 * 12:
[
 [1,2,3,4,5,6,7,8,9,10,11,12],
 [2,4,6,8,10,12,14,16,18,20,22,24],
 [3,6,9,12,15,18,21,24,27,30,33,36],
 [4,8,12,16,20,24,28,32,36,40,44,48],
 [5,10,15,20,25,30,35,40,45,50,55,60],
 [6,12,18,24,30,36,42,48,54,60,66,72],
 [7,14,21,28,35,42,49,56,63,70,77,84],
 [8,16,24,32,40,48,56,64,72,80,88,96],
 [9,18,27,36,45,54,63,72,81,90,99,108],
 [10,20,30,40,50,60,70,80,90,100,110,120],
 [11,22,33,44,55,66,77,88,99,110,121,132],
 [12,24,36,48,60,72,84,96,108,120,132,144]
]
```

#### app.js:
```javascript
const multiplicationTable = (n) => {
    // notify user which table we are multiplying
    console.log("\n" + n + " * " + n + ":")

    // fill up the 2D array with multiplication values
    if (n) {

        // initialize arr to have 'n' many rows
        let arr = []
        for (let row = n; row > 0; row--) {
            arr.push([]);
        }

        // add each multiplication row to the array
        for (let i = n, row = 1; i > 0; i--, row++) {
            for (let col = 1; col <= n; col++) {
                arr[row - 1].push(row * col)
            }
        }
        // finally, show the multiplication table
        console.log("[\n [" + arr.join("],\n [") + "]\n]")
    } else {
        console.log("0")
    }
}

multiplicationTable(0)
multiplicationTable(1)
multiplicationTable(2)
multiplicationTable(5)
multiplicationTable(10)
multiplicationTable(12)
```
