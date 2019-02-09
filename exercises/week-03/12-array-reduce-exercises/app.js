/*
    ARRAY REDUCE EXERCISES
    Use the built-in .reduce() method on arrays to solve all of these problems
*/

/* 1) Turn an array of numbers into a total of all the numbers */

function total(arr) {
    return arr.reduce(function (result, num) {
        return result += num
    })
}

var arr = [1, 2, 3]

console.log("\n*** ARRAY:***")
console.log(arr)
console.log("\n1: Turn an array of numbers into a total of all the numbers")
console.log(total(arr)); // 6


/* 2) Turn an array of numbers into a long string of all those numbers. */

function stringConcat(arr) {
    return arr.reduce(function (result, num) {
        return result += num.toString()
    })
}

console.log("\n2: Turn an array of numbers into a long string of all those numbers.")
console.log(stringConcat([1, 2, 3])); // "123"


/* 3) Turn an array of voter objects into a count of how many people voted */
// Note: You don't necessarily have to use reduce for this, so try 
// to think of multiple ways you could solve this.

function totalVotes(arr) {
    return arr.reduce(function (result, voter) {
        if (voter.voted) {
            result++
        }
        return result
    }, 0)
}

var voters = [{
        name: 'Bob',
        age: 30,
        voted: true
    },
    {
        name: 'Jake',
        age: 32,
        voted: true
    },
    {
        name: 'Kate',
        age: 25,
        voted: false
    },
    {
        name: 'Sam',
        age: 20,
        voted: false
    },
    {
        name: 'Phil',
        age: 21,
        voted: true
    },
    {
        name: 'Ed',
        age: 55,
        voted: true
    },
    {
        name: 'Tami',
        age: 54,
        voted: true
    },
    {
        name: 'Mary',
        age: 31,
        voted: false
    },
    {
        name: 'Becky',
        age: 43,
        voted: false
    },
    {
        name: 'Joey',
        age: 41,
        voted: true
    },
    {
        name: 'Jeff',
        age: 30,
        voted: true
    },
    {
        name: 'Zack',
        age: 19,
        voted: false
    }
];

console.log("\n*** ARRAY:***")
console.log(voters)
console.log("\n3: Turn an array of voter objects into a count of how many people voted")
console.log(totalVotes(voters)); // 7


/* 4) Given an array of all your wishlist items, figure out how much it 
would cost to just buy everything at once */

function shoppingSpree(arr) {
    return arr.reduce(function (result, item) {
        return (result += item.price)
    }, 0)
}

var wishlist = [{
        title: "Tesla Model S",
        price: 90000
    },
    {
        title: "4 carat diamond ring",
        price: 45000
    },
    {
        title: "Fancy hacky Sack",
        price: 5
    },
    {
        title: "Gold fidgit spinner",
        price: 2000
    },
    {
        title: "A second Tesla Model S",
        price: 90000
    }
];

console.log("\n*** ARRAY:***")
console.log(wishlist)
console.log("\n4: Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once")
console.log(shoppingSpree(wishlist)); // 227005


/* 5) Given an array of arrays, flatten them into a single array */
// Note: Take a look at Array.concat() to help with this one

function flatten(arr) {
    return arr.reduce(function (a, b) {
        return a.concat(b)
    })
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log("\n*** ARRAY:***")
console.log(arrays)
console.log("\n5: Given an array of arrays, flatten them into a single array")
console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];


/* 6) Given an array of potential voters, return an object representing the results of the vote */
// Include how many of the potential voters were in the ages 18-25, how many from 26-35, 
// how many from 36-55, and how many of each of those age ranges actually voted. 
// The resulting object containing this data should have 6 properties. 
// See the example output at the bottom.

function voterResults(arr) {
    return arr.reduce(function (result, voter) {
        // Ages 18-25 
        if (voter.age >= 18 && voter.age <= 25) {
            result.youth++
            if (voter.voted) {
                result.youngVotes++
            }
        }
        // Ages 26-35 
        if (voter.age >= 26 && voter.age <= 35) {
            result.mids++
            if (voter.voted) {
                result.midVotes++
            }
        }
        // Ages 36-55 
        if (voter.age >= 36 && voter.age <= 55) {
            result.olds++
            if (voter.voted) {
                result.oldVotes++
            }
        }
        return result;
    }, {
        youngVotes: 0, // 18-25 
        youth: 0,
        midVotes: 0, // 26-35
        mids: 0,
        oldVotes: 0, // 36-55
        olds: 0
    })
}

console.log("\n*** ARRAY:***")
console.log(voters)
console.log("\n6: Given an array of potential voters, return an object representing the results of the vote")
console.log(voterResults(voters)); // Returned value shown below:

/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}
*/