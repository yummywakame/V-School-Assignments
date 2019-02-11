///////////////////////
// Global variables //

var ask = require('readline-sync')

// Array that will hold all characters
var characters = []

// Constructor function for creating each character
function Character(name, type, description, health, isAlive, inventory) {
    this.name = name
    this.type = type
    this.description = description
    this.health = health || 100
    this.isAlive = isAlive || true
    this.inventory = inventory || []
}

// player, friends and enemies
var player = new Character(
    '',
    'player',
    'just a regular, every day clownfish',
    100,
    true,
    []
)

var crab = new Character(
    'Salty',
    'friend',
    'harmless-looking hermit crab',
    100,
    true,
    ["hard shell"]
)

var octopus = new Character(
    'Doom',
    'enemy',
    'deadly but sparkly, sequined pufferfish',
    100,
    true,
    ["razorblade"]
)

var whale = new Character(
    'Churchill',
    'enemy',
    'baby killer whale who believes he\'s the reincarnation of Winston',
    100,
    true,
    ["an old rusty key"]
)

var swordfish = new Character(
    'Sharpie',
    'enemy',
    'sarcastic swordfish',
    100,
    true,
    ["sordid snout"]
)

// Push all the characters to the characters array
characters.push(player)
characters.push(crab)
characters.push(octopus)
characters.push(whale)
characters.push(swordfish)

// Prototype function for Character Constructor that prints
// character stats to the console when player selects "View my stats"
// or "View enemy stats"
Character.prototype.printCharacterStats = function () {
    var printOut =
        "\n" + (this.type).toUpperCase() + ':\t\t' + this.name +
        "\n---------------------------------------------------" +
        '\n* Description:\t' + this.description +
        '\n* Health:\t' + this.health + "/100"

    printOut += '\n* Inventory:\t[ ' + this.inventory + ' ]'

    return (printOut)
}

// Holds current enemy for easy data extraction
var currentEnemy

// Holds the array ID of each defeated enemy
var defeatedEnemies = []

// Set to false until all enemies are defeated
var areAllDefeated = false



/////////////////////
// Game Functions //
function swim() {
    // get random number between 1 - 3 to decide player's fate
    var fate = getRandomNum(1, 3)

    // if number is 1 === player is attacked by enemy
    if (fate === 1) {
    
        // create current enemy
        currentEnemy = undefined
        while (currentEnemy === undefined) {
            currentEnemy = enemyCreation()
        }
        
        // enemy's attack sequence
        enemyAttacks()

    } else {
        console.log("\n" + randomSwimMessage())
    }
}

// The list of random swim messages when nothing happens
function randomSwimMessage() {
    // get random number between 1 - 10
    var fate = getRandomNum(1, 10)

    switch (fate) {
        case 1:
            return ("You feel a cool breeze... which is a bit odd.")
            break;
        case 2:
            return ('A thankfully uneventful swim.');
            break;
        case 4:
            return ('You realise you are naked but its too late to go back and get dressed. Oh well.');
            break;
        case 5:
            return ('Your left eye is twitching again. Why?');
            break;
        case 6:
            return ('You pass through a school of manta rays, unscathed.');
            break;
        case 7:
            return ("You contemplate the meaning of your existance this far.");
            break;
        case 8:
            return ('A babe fish with luxuriously long tail fins checks you out, but then you remember your mission.');
            break;
        case 9:
            return ('In the distance you see some orcas tossing a penguin around and decide to take a slight detour.');
            break;
        case 10:
            return ('You ponder your chances of making it out alive.');
            break;
        default:
            return ("Swimming along some more.");
    }

}

// Called from swim() to create an enemy when there is an attack
function enemyCreation() {
    // randomly select an enemy character
    var num = getRandomNum(2, 4)
    var newEnemy = characters[num]
    
    // check to see if selected enemy was previously defeated
    // and rerun function if it needs to reselect
    if (!newEnemy.isAlive) {
        enemyCreation()
        
    } else {
        return newEnemy
        
    }

}

// Called from swim() to do the attack sequence
function enemyAttacks() {
    // initialize fleeing success to false
    var fleeSuccess = false

    // Notify the player about the attack
    console.log("\nYou are approached by an enemy!")
    console.log((currentEnemy.name).toUpperCase() + " the " + currentEnemy.description + "!")

    // continue this loop until the enemy is defeated, escaped or player dies
    while ((fleeSuccess === false && currentEnemy.isAlive && player.isAlive)) {

        var userChoice = ask.keyInSelect(enemyOptions, "What would you like to do? ")

        if (userChoice === 0) {
            // attack enemy
            attackEnemy()

        } else if (userChoice === 1) {
            // flee enemy and find out if fleeing is successful or failure
            // and return fleeSuccess value
            fleeSuccess = fleeEnemy()

        } else if (userChoice === 2) {
            // show player's stats and inventory
            console.log(player.printCharacterStats())

        } else if (userChoice === 3) {
            // show enemy's stats and inventory
            console.log(currentEnemy.printCharacterStats())

        } else if (userChoice === -1) {
            // player cancels
            console.log("Pfft! You cannot cancel, weakling!")

        }
    }
}

// Called when user selects "Attack"
function attackEnemy() {

    var attackSuccess = getRandomBool()

    if (attackSuccess) {
        // successful attack gets minimal damage to player
        var damage = getRandomNum(1, 2)
        var enemyDamage = getRandomNum(15, 25)

        // update enemy's health after damage to see if still alive
        currentEnemy.health -= enemyDamage
        
        // if this sets to false, displays enemy defeated!
        currentEnemy.isAlive = isAliveOrDead(currentEnemy)

        if (currentEnemy.isAlive) {

            // update players health after damage to see if still alive
            player.health -= damage
            player.isAlive = isAliveOrDead(player) // will quit the game if false        

            // if still alive continue
            console.log("\nAMAZING! You inflicted considerable damage to the enemy!")
            console.log("You received minimal damage: -" + damage + "hp")
            console.log("The enemy received more damage: -" + enemyDamage + "hp")

        } 
        
        if (areAllDefeated) {
            // All the enemies are defeated and the game is won!
            console.log("\nCONGRATULATIONS!")
            console.log("\nYou have defeated all the enemies and won the game. You never did find the portal to Atlantis, because the developer didn\'t have time to code it.\n")
            process.exit(1)
        }

    } else {
        // unsuccessful attack gets heavy damage to player
        // nothing happens to the enemy
        var damage = getRandomNum(5, 10)

        // update players health after damage to see if still alive
        player.health -= damage
        player.isAlive = isAliveOrDead(player) // will quit the game if false

        // if still alive continue
        console.log("\nDISASTER! The attack was a failure and you were injured :(")
        console.log("You lost " + damage + "hp.")
    }

}

// Called when user selects "Flee"
function fleeEnemy() {
    var fleeSuccess = getRandomBool()

    if (fleeSuccess) {
        // successful fleeing gets less damage
        var damage = getRandomNum(2, 5)

        // update players health after damage to see if still alive
        player.health -= damage
        player.isAlive = isAliveOrDead(player) // will quit the game if false

        // if still alive continue
        console.log("\nPHEW! You manage to get away but got a little wounded :(")
        console.log("You lost " + damage + "hp.")

    } else {
        // unsuccessful fleeing gets heavy damage
        var damage = getRandomNum(5, 10)

        // update players health after damage to see if still alive
        player.health -= damage
        player.isAlive = isAliveOrDead(player) // will quit the game if false

        // if still alive continue
        console.log("\nOH NO! You got caught trying to escape :(")
        console.log("You received -" + damage + "hp heavy damage.")
    }

    return fleeSuccess
}

// Called when player runs out of health
function characterDies() {
    console.log("\nI'm sorry, " + player.name + ".")
    console.log("In the scuffle your health ran out :(")
    console.log("You received too much damage to your fins and die alone at the bottom of the Abyss.\n")
    process.exit(1)
}

// Sequence when enemy dies
function enemyDies() {
    // restore some health to player with random hp between 15 and 25
    var hp = getRandomNum(15, 25)

    if ((player.health + hp) >= 100) {
        player.health = 100
    } else {
        player.health += hp
    }

    // Message the player
    console.log("\nWOW! You defeated " + currentEnemy.name + " the " + currentEnemy.description + "!")
    console.log("\nYour health is restored with " + hp + "hp to " + player.health + "/100")
    console.log("Over his dead body you find a " + currentEnemy.inventory[0] + ", which has been added to your inventory.")

    // enemy drops an item into your inventory
    player.inventory.push(currentEnemy.inventory[0])
    // enemy loses his item.
    currentEnemy.inventory = []

    // Add enemy's name to the defeated list
    defeatedEnemies.push(currentEnemy.name)

    // Set enemy isAlive to false
    currentEnemy.isAlive = false

    // checks to see if all enemies are defeated and returns result
    if (defeatedEnemies.length === 3) {
        areAllDefeated = true
    }
    return false

}

// Check to see if any chosen character is alive or dead
function isAliveOrDead(creature) {
    if (creature === player) {
        return (creature.health > 0) ? true : characterDies()
    } else {
        return (creature.health > 0) ? true : enemyDies()
    }

}

// Get any random number
function getRandomNum(min, max) {
    // returns a random number between min (inclusive) and max (inclusive)
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Get any random boolean
function getRandomBool() {
    return (Math.random() >= 0.5)
}


///////////////////////////////////////////////////////////////////////////////
/// GAME INTRO //

// keep asking player for name until they enter one
while (!player.name) {
    player.name = ask.question("\nWhat is your name? ");
}
console.log("\nWelcome to the abyss, " + player.name + ".")

console.log("\nYou are trapped below the City of Atlantis. No fish or foe has ever made it out of here alive.")
console.log("\nAccording to the Prophet Puffyfish, during the Great Battle the Atlanteans created escape portals and it is believed some might still be active. But proceed with caution...")

var options = ["Swim", "View my stats"]
var enemyOptions = ["Attack", "Flee", "View my stats", "View enemy's stats"]

/////////////
// GAME LOOP
while (player.health > 0) {
    var userChoice = ask.keyInSelect(options, "What would you like to do? ")
    if (userChoice === 0) {
        // player swim
        swim()
    } else if (userChoice === 1) {
        // show inventory
        console.log(player.printCharacterStats())
    } else if (userChoice === -1) {
        // player cancels
        console.log('\nGoodbye.')
        console.log('*sniff*')
        process.exit(1)
    }
}