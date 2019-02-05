// store the readline sync package into the variable
var readline = require('readline-sync')

// ask the name
var name = readline.question('What is your name? ')
console.log('Welcome to the Escape Room, ' + name)

var gameOver = false
var hasKey = false

// User options
var options = ['Put hand in hole', 'Find the key', 'Open door']

// Game loop continues until the game ends
while(!gameOver) {

    var userChoice = readline.keyInSelect(options, 'What would you like to do? ')
    if (userChoice === 0) {
        console.log('You put your hand in the hole, and got bitten by a deadly snake.')
        gameOver = true
        break
    } else if (userChoice === 1) {
        console.log('You found the key! Now where is the door...')
        hasKey = true
    } else if (userChoice === 2 && !hasKey) {
        console.log('You try the door, but it\'s locked.')
    } else if (userChoice === 2 && hasKey) {
        console.log('You escaped the room! Congrats!')
        break
    } else if (userChoice === -1) {
        console.log('You are trapped in the Escape Room. Cancelling is not an option.')
    }

}
if (gameOver) {
    console.log('\nGame over.')
}