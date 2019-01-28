/* 
    PRELIMINARIES 
*/
console.log("PRELIMINARIES:")

// 1. Write a for loop that prints to the console the numbers 0 through 9.
console.log("\n1:")
for (i = 0; i < 10; i++) {
    console.log(i);
};

// 2. Write a for loop that prints to the console 9 through 0.
console.log("\n2:")
for (i = 9; i > -1; i--) {
    console.log(i);
}
// 3. Write a for loop that prints these fruits to the console.
var fruit = ["banana", "orange", "apple", "kiwi"]
console.log("\n3:")
for (i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}


/* 
    BRONZE MEDAL 
*/
console.log("\nBRONZE MEDAL:")

// 1. Write a for loop that will push the numbers 0 through 9 to an array.
var myArray = [];

for (i = 0; i < 10; i++) {
    myArray.push(i);
};
console.log("\n1: myArray = [" + myArray + "]");

// 2. Write a for loop that prints to the console only even numbers 0 through 100.
var message = "";
for (i = 0; i <= 100; i++) {
    if (!(i % 2)) {
        message += i + " ";
    };
};
console.log("\n2: " + message);

// 3. Write a for loop that will push every other fruit to an array.
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

var newArray = [];

for (i = 0; i < fruit.length; i++) {
    if (i % 2) {
        newArray.push(fruit[i]);
    };
};
console.log("\n3: newArray = [" + newArray + "]");

/* 
    SILVER MEDAL 
*/
console.log("\nSILVER MEDAL:");

// 1. Write a loop that will print out all the names of the people of the people array
var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
]
var message = "";

for (i = 0; i < peopleArray.length; i++) {
    message += peopleArray[i].name;
    if (i !== peopleArray.length - 1) {
        message += ", ";
    };
};
console.log("\n1: " + message);

// 2. Write a loop that pushes the names into a names array, and the occupations into an occupations array.
var names = [];
var occupations = [];

for (i = 0; i < peopleArray.length; i++) {
    names.push(peopleArray[i].name);
    occupations.push(peopleArray[i].occupation);
}
console.log("\n2:");
console.log("names = [" + names + "]");
console.log("occupations = [" + occupations + "]");

// 3. Write a loop that pushes every other name to an array starting with "Harrison Ford", and every other occupation to another array starting with "Singer".
var array1 = [];
var array2 = [];
for (i = 0; i < peopleArray.length; i++) {
    if (i % 2) {
        array2.push(peopleArray[i].occupation);
    } else {
        array1.push(peopleArray[i].name);
    };
}
console.log("\n3: ");
console.log("array1 = [" + array1 + "]");
console.log("array2 = [" + array2 + "]");
    
/* 
    GOLD MEDAL 
*/
console.log("\nGOLD MEDAL:");

// 1. Create an array that mimics a grid like the following using for loops:
// [[0, 0, 0], 
// [0, 0, 0], 
// [0, 0, 0]]

var grid1 = [];
var rows = 3;
var cols = 3;

for (x = 0; x < rows; x++) {
    grid1.push([]);
    for (y = 0; y < cols; y++) {
        grid1[x].push(0);
    }
}
console.log("\n1:");
console.log(grid1);

// 2.Create an array that mimics a grid like the following using for loops:
// [[0, 0, 0], 
// [1, 1, 1], 
// [2, 2, 2]]

var grid2 = [];

for (x = 0; x < rows; x++) {
    grid2.push([]);
    for (y = 0; y < cols; y++) {
        grid2[x].push(x);
    }
}
console.log("\n2:");
console.log(grid2);

// 3.Create an array that mimics a grid like the following using for loops:
// [[0, 1, 2], 
// [0, 1, 2], 
// [0, 1, 2]]
var grid3 = [];

for (x = 0; x < rows; x++) {
    grid3.push([]);
    for (y = 0; y < cols; y++) {
        grid3[x].push(y);
    }
}
console.log("\n3:");
console.log(grid3);

// 4. Given a grid like the previous ones, write a for loop that would change every number to an x.
// var grid = [[0, ...], 
//             [0, ...], 
//             [0,...], ...] 
var grid4 = [
    [0, 1, 2], 
    [0, 1, 2], 
    [0, 1, 2]
];

for (x = 0; x < rows; x++) {
    for (y = 0; y < cols; y++) {
        grid4[x][y] = "x";
    }
}
console.log("\n4:");
console.log(grid4);