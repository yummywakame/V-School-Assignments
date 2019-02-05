// NPM - Node Package Manager
// npmjs.org

// 1. To create a node project $ npn init
// OR > $ npm init -y (says yes to everything / saves defaults)
// which creates a package.json file that saves configurations

// 2. Create package using Readline-sync
// Install readline-sync
// $ npm install readline-sync
// all packages are stored in the "node_modules" folder

// 2.b $ npm install readline-sync
// will look at the package.json file and download everything
// in the package list.

// 3. add a .gitignore file

// 4. Store the entire readline sync library in a variable
var readline = require('readline-sync') // require no html page
// for the browser version we'd do it with a script tag.

var name = readline.question("What is your name? ")

// console.log(name) // What is your name? Olivia

console.log("Hello " + name)

var answer = readline.keyInYNStrict("Do you like Node? ")
console.log(answer)

var animals = ['Buffalo', 'Sheep', 'Cat']
var animalNotSelected = true

while(animalNotSelected) {
    var favAnimal = readline.keyInSelect(animals, 'What is your favorite animal? ')

    if (favAnimal === -1) {
        console.log("Choose an animal, don't cancel.")
    } else {
        console.log("Your favorite animal is: " + animals[favAnimal])
        animalNotSelected = false;
    }
} 