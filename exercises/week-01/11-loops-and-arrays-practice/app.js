// #1 
// Loop through the following array and count how many "computers" there are. 
// Log the final count:

var officeItems = [
                    "stapler", 
                    "monitor", 
                    "computer", 
                    "desk", 
                    "lamp", 
                    "computer", 
                    "lamp", 
                    "stapler", 
                    "computer",  
                    "computer"
                ];
                
var computers = 0;
         
for (i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        computers++;
    };
};
console.log("#1:\nThe 'officeItems' array contains " + computers + " computers.") ;

// #2
// Loop through the following array and log to the console "old enough" if they are 18 or older, 
// and "not old enough" if they aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    pronoun: "male"
  },{
    name: "Madeline",
    age: 80,
    pronoun: "female"
  },{
    name: "Cheryl",
    age: 22,
    pronoun: "female"
  },{
    name: "Sam",
    age: 30,
    pronoun: "male"
  },{
    name: "Suzy",
    age: 4,
    pronoun: "female"
  }
];

console.log("\n#2");
var pronoun;
var message;

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
  message = peopleWhoWantToSeeMadMaxFuryRoad[i].name;
  if (peopleWhoWantToSeeMadMaxFuryRoad[i].pronoun === "female") {
    pronoun = "her";
  } else {
    pronoun = "him";
  };
  if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
    message += " is not old enough to see Mad Max Fury Road. Do not let " + pronoun + " in."
  } else {
    message += " is old enough to see Mad Max Fury Road. Let " + pronoun + " in."
  };
  console.log(message);
  message = "";
};

// #3: OPTIONAL BONUS CHALLENGE
// Imagine you have a button that toggles a light on and off. Loop through the following array 
// of numbers and toggle the button the numbers of times for each number. 
// The array [2, 3, 2] would toggle the button 7 times.

// The light is off to start with. Log to the console whether or not the light is on at the end.
// Sample Arrays:

//  [2, 5, 435, 4, 3] // "The light is on"
//  [1, 1, 1, 1, 3]   // "The light is on"
//  [9, 3, 4, 2]      // "The light is off"

var isOn = false;
var myArray = [9, 3, 4, 2];

// function for adding two numbers
const add = (a, b) => a + b;

// use reduce to sum our array
const sum = myArray.reduce(add)

if (sum % 2) {
  console.log("\n#3:\nThe light is on");
} else {
  console.log("\n#3:\nThe light is off");
}

