/*
    Exercise A:
*/
// get element by ID and save to a var
var mytitleId = document.getElementById('title')
var myTitleText = document.getElementById('title').textContent

// console.log #title and #title's text content
console.log("mytitleId = " + mytitleId)
console.log("myTitleText = " + myTitleText)

/*
    Exercise B:
*/
// Create an h1 in js
var newH1 = document.createElement('h1')

// Give that h1 text content
newH1.textContent = "JavaScript just wrote this header to the DOM!"

// Select the div from your HTML
var container = document.getElementById('container')

// Append the h1 into the div so it shows up on the webpage
container.appendChild(newH1)