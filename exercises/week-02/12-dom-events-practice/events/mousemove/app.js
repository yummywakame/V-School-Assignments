// Create global vars for coordinates
var cursorX;
var cursorY;

// Create a container inside the box to display coordinates
var newSpanX = document.createElement('span')
var newSpanY = document.createElement('span')

// set eventListener to check if mouse is inside the box
var box = document.getElementsByClassName('red-box')
box[0].addEventListener('mouseover', showCoords)

// Function that displays the coordinates
function showCoords() {
    alert('mouseover')
    
}