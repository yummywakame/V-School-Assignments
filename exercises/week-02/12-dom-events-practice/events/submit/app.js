// The "submit" event refreshed your brower by default
// use "e.preventDefault" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function

var myForm = document["submit-me"]
var myName = myForm.name
var myAge = myForm.age

myForm.addEventListener("submit", showFullName)

function showFullName(event) {
    event.preventDefault()
    alert("Hi, " + myName.value + "! You are " + myAge.value + " years old.")
}