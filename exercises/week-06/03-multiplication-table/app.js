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
    Allow for the function to tacole a parameter n and return a table with n * n cells.
    
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