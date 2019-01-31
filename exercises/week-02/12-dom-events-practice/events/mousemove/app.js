// Grab container divs
var xyContainer = document.getElementById("coords")

// Create a container inside the box to display coordinates
var newSpanXY = document.createElement('p')

// set eventListener to check if mouse is inside the box
var box = document.getElementsByClassName('red-box')
box[0].addEventListener('mousemove', showCoords)

// Function that displays the coordinates
function showCoords(event) {
    // prepare the p tags with x y cordinates
    newSpanXY.textContent = event.pageX + ", " + event.pageY   
    
    // clear the container of previous results
    xyContainer.innerHTML = ""
    // append all of them to the html
    xyContainer.appendChild(newSpanXY)
}