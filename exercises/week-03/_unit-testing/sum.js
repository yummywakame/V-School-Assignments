
function sum(num1, num2){
    // if(typeof num1 !== "number" || typeof num2 !== "number"){
    //     return "Please provide 2 numercial values"
    // }

    if(!num1 || !num2){
        return "Please provide 2 numbers"
    }

    return num1 + num2
}

// module.exports makes this data available to all other files in the project
module.exports = { 
    sum: sum 
}























// Unit Testing
    // 2 main approaches;  TDD & BDD
        // TDD: Test Driven Development 
        // BDD: Behavior driven development
        // Mocha & chai
// Testing with Jest

// MOCK TEST
// if(sum(2, 3) !== 5){
//     console.log("Test failed")
// } else {
//     console.log("Test Passed")
// }