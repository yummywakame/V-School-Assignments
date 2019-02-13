var countDown = 10
var timeOut
var interval
var display = document.getElementById("container")
var btn = document.getElementById("btn")
var message = document.getElementById("message")

var count = localStorage.counter
if (!count || count < 0) {
    // if counter not stored before, set it to 0
    count = 0
} else if (count > 0) {
    // if game already played, disable it
    display.textContent = count
    timesUp()
} else {
    // normal game can continue
    display.textContent = count
    message.textContent = "Go!"
}


// event listener for button clicks
btn.addEventListener('click', function () {
    count++
    if (count === 1) {
        startGame()
    }
    localStorage.counter = count
    display.textContent = count
})

// button is disabled after 10 seconds
function startGame() {
    message.textContent = 10
    // countdown
    timeout = setTimeout(timesUp, 10000);
    // show count down timer
    interval = setInterval(showDigits, 1000)
}


// stuff to disable button and restart game
function timesUp() {
    clearInterval(interval)
    btn.style.backgroundColor = "gray"
    btn.disabled = true;
    message.textContent = "Time's Up!"
}

// show the digits
function showDigits() {
    countDown--
    message.textContent = countDown
}

// reset button to reset score everywhere
function reset() {
    count = 0
    countDown = 10
    localStorage.counter = 0
    display.textContent = count
    btn.style.backgroundColor = "#ff00ae"
    btn.disabled = false;
    message.textContent = "Go!"
    clearInterval(interval)
    clearTimeout(timeOut)
}



