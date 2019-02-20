let intervalID
let message = ""

class player {
    constructor(name, totalCoins, status, hasStar, gameActive) {
        this.name = name // String: 'Mario' or 'Luigi'
        this.totalCoins = totalCoins // number
        this.status = status // Options are 'Powered Up', 'Big', 'Small' or 'Dead'
        this.hasStar = hasStar // Boolean (Is a star active?) 
        this.gameActive = gameActive // boolean: 'true' by default, 'false' when 'dead'
    }

    // Sets name to Mario or Luigi, passed through namePicked
    setName(namePicked) {
        this.name = namePicked

    }

    // called whenever a player is hit by an enemy
    // sets the 'status' property to: 'Powered Up', 'Big', 'Small' or 'Dead'
    gotHit() {
        if (this.hasStar) {
            message = "You got hit! But your star protected you!"
            this.hasStar = false

        } else {
            message = "You got hit!"
            if (this.status === 'Powered Up') {
                this.status = 'Big'
            } else if (this.status === 'Big') {
                this.status = 'Small'
            } else if (this.status === 'Small') {
                this.status = 'Dead'
                this.gameActive = false
            }
        }
    }

    // called when a powerup is received.
    // sets the 'status' property from 'Small' to 'Big' to 'Powered Up'
    // if already Powered Up you get a star
    gotPowerup() {
        message = "You got a Power Up!"
        if (this.status === 'Small') {
            this.status = 'Big'
        } else if (this.status === 'Big') {
            this.status = 'Powered Up'
        } else if (this.status === 'Powered Up') {
            message = "Congratulations! You got a star!"
            this.hasStar = true
        }
    }

    // adds a coin to totalCoins
    addCoin() {
        message = "You found a coin!"
        this.totalCoins += 1
    }

    // prints to the console the name, totalCoins, status, and star properties
    print(str = "") {
    
        if (str !== "") {
            console.log(message)
        }
        
        console.log("Name: " + this.name)
        console.log("Status: " + this.status)
        console.log("Total Coins: " + this.totalCoins)

        if (this.hasStar) {
            console.log("You have a star!")
        }
        console.log("\n")
    }

}

function startGame() {
    // randomly select a player
    const result = Math.floor(Math.random() * 2)
    if (result === 1) {
        myPlayer.setName('Luigi')
    }

    message = "The game begins!"

    gameLoop()
}

function gameLoop() {
    // create a 1.5 second delay
    intervalID = setInterval(randomRange, 1000)

}

function randomRange() {

    if (myPlayer.gameActive) {
    
        myPlayer.print(message)
        
        const result = Math.floor(Math.random() * 3)

        if (result === 0) {
            myPlayer.gotHit()

        } else if (result === 1) {
            myPlayer.gotPowerup()

        } else {
            myPlayer.addCoin()

        }
        
    } else {
        // game over - print out the final score
        myPlayer.print("Your final score is: " + player.totalCoins)

        clearInterval(intervalID)
    }

}

// instantiate player defaulted to Mario
const myPlayer = new player('Mario', 0, 'Big', false, true)

startGame()