/*
    MULTIPLICATION TABLE
    
    Warm up
    Write a function that returns a 10 X 10 multiplication table (2D array).
    
    For example:
    
    multTable();
    // Output:
    //  [
    //    [1,2,3,4,5...],
    //    [2,4,6,8,10...],
    //    [3,6,9,12,15...],
    //    ...
    //  ]

    BONUS:
    Allow for the function to take a parameter n and return a table with n * n cells.
    
    //if n === 5
    
    multTable(n);
    // Output:
    //  [
    //    [1,2,3,4,5],
    //    [2,4,6,8,10],
    //    [3,6,9,12,15],
    //    [4,8,12,16,20],
    //    [5,10,15,20,25]
    //  ]
*/

const multiplicationTable = (n) => {
    console.log("\n" + n + " * " + n +":")
    let arr = []
    if (n) {
        for (i = n, j = 1; i > 0; i--, j++) {
            for (k = 1; k <= n; k++) {
                arr.push(j * k)
            }
            console.log(arr.toString())
            arr = []
        }    
    } else {
        console.log("0")
    }

    console.log("\n")
}

multiplicationTable(0)
multiplicationTable(1)
multiplicationTable(2)
multiplicationTable(5)
multiplicationTable(10)
multiplicationTable(12)