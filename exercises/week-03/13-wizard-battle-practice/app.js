/*
    WIZARD BATTLE PRACTICE
    
    forEach(), find(), findIndex(), some(), and every() 
*/

// Log to the console every Wizard in the array using forEach().
// Using the following array, complete the following tasks in order. 
// Some tasks will change the behavior of later tasks.
var wizards = [{
        name: "Edwin Odesseiron",
        age: 37,
        alignment: "lawful evil"
    },
    {
        name: "Harry Potter",
        age: 21,
        alignment: "neutral good"
    },
    {
        name: "Hermony Granger",
        age: 21,
        alignment: "lawful good"
    },
    {
        name: "Ronny the Bear",
        age: 21,
        alignment: "neutral good"
    },
    {
        name: "Gandalf",
        age: 100,
        alignment: "neutral good"
    }
]
console.log("WIZARDS:")
console.log(wizards)


/* Log to the console every wizard's name. */
console.log("\n1: Log to the console every wizard's name.")
wizards.forEach(function (wizard) {
    console.log(wizard);
});


/* Add an isAlive property to every wizard, setting it to true. */
console.log("\n2: Add an isAlive property to every wizard, setting it to true.")
wizards.forEach(function(wizard) {
    wizard.isAlive = true
})

console.log(wizards)


/* Make a new array of all the Wizards that are "neutral good". */
console.log("\n3: Make a new array of all the Wizards that are 'neutral good'.")
var neutralGoodWizards = []

wizards.forEach(function(wizard) {
    if (wizard.alignment === 'neutral good') {
        neutralGoodWizards.push(wizard)
    }
})
console.log(neutralGoodWizards)


/* Find the index of a wizard that is "lawful good". */
console.log("\n4: Find the index of a wizard that is 'lawful good'.")

console.log(
    wizards.findIndex(function(wizard) {
        return wizard.alignment === "lawful good"
    })
)


/* Return a Boolean that states whether or not all the wizards are alive. */
console.log("\n5: Return a Boolean that states whether or not all the wizards are alive.")

console.log(
    wizards.every(function(wizard) {
        return wizard.isAlive === true
    })
)

/* Return a Boolean that states whether or not at least one wizard is "neutral good". */
console.log("\n6: Return a Boolean that states whether or not at least one wizard is 'neutral good'.")

console.log(
    wizards.some(function(wizard) {
        return wizard.alignment === "neutral good"
    })
)

/* Check every "alignment" for every wizard. Kill every "neutral good" wizard. 
   (Modify every "neutral good" wizard's isAlive property to false.) */
console.log("\n7: Check every 'alignment' for every wizard. Kill every 'neutral good' wizard. ")

wizards.find(function(wizard) {
    if (wizard.alignment === "neutral good") {
        wizard.isAlive = false
    }
})

console.log(wizards)
   
   
/* Return a Boolean that states whether or not all the wizards are alive. */
console.log("\n8: Return a Boolean that states whether or not all the wizards are alive.")

console.log(
    wizards.every(function(wizard) {
        return (wizard.isAlive)
    })
)

/* Return a Boolean that states whether or not some of the wizards are alive. */
console.log("\n9: Return a Boolean that states whether or not some of the wizards are alive.")

console.log(
    wizards.some(function(wizard) {
        return (wizard.isAlive)
    })
)