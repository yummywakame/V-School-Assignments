// Promises (are asynchronous)
    // RESOLVE:
    // REJECT:
    
function flipCoin() {
    const num = Math.floor(Math.random() * 2)
    
    if (num === 0) {
        return "heads"
    } else {
        return "tails"
    }
}

function testFlipCoin() {
    return new Promise((resolve, reject) => {
        const side = flipCoin()
        if (side === "heads") {
            resolve("It was heads!")
        } else {
            reject("It was tails!")
        }
    })
}

testFlipCoin() 
    .then(response => console.log("Response " + response))
    .catch(error => console.log("Error " + error))


    