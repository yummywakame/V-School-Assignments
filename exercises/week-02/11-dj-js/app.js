// grab element by ID
var square = document.getElementById('square')

// add event listeners to square
square.addEventListener("mouseover", changeColor)
square.addEventListener("mousedown", (e) => changeColor(e, "red"))
square.addEventListener("mouseup", (e) => changeColor(e, "yellow"))
square.addEventListener("dblclick", (e) => changeColor(e, "green"))
window.addEventListener("scroll", (e) => changeColor(e, "orange"))
square.addEventListener("mouseout", (e) => changeColor(e, "white"))
window.addEventListener("keydown", changeColor)

// function that changes the color according to argument provided
function changeColor(event, str) {
    console.log(event)
    if(event.type === 'mouseover' || event.code === "KeyB") {
        square.classList.remove("fade-to-blue", "fade-to-red", "fade-to-yellow", "fade-to-orange", "fade-to-green", "fade-to-white" )
        square.classList.add("fade-to-blue")
    } else if(event.type === 'mousedown' || event.code === "KeyR") {
        square.classList.remove("fade-to-blue", "fade-to-red", "fade-to-yellow", "fade-to-orange", "fade-to-green", "fade-to-white" )
        square.classList.add("fade-to-red")
    } else if(event.type === 'mouseup' || event.code === "KeyY") {
        square.classList.remove("fade-to-blue", "fade-to-red", "fade-to-yellow", "fade-to-orange", "fade-to-green", "fade-to-white" )
        square.classList.add("fade-to-yellow")
    } else if(event.type === 'scroll' || event.code === "KeyO") {
        square.classList.remove("fade-to-blue", "fade-to-red", "fade-to-yellow", "fade-to-orange", "fade-to-green", "fade-to-white" )
        square.classList.add("fade-to-orange")
    } else if(event.type === 'dblclick' || event.code === "KeyG") {
        square.classList.remove("fade-to-blue", "fade-to-red", "fade-to-yellow", "fade-to-orange", "fade-to-green", "fade-to-white" )
        square.classList.add("fade-to-green")
    } else if(event.type === 'mouseout' || event.code === "KeyW") {
            square.classList.remove("fade-to-blue", "fade-to-red", "fade-to-yellow", "fade-to-orange", "fade-to-green", "fade-to-white" )
            square.classList.add("fade-to-white")
    } 
}