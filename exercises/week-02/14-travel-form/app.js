// Grab the form element
var bookForm = document.bookingForm

// Create the event listener for the submit button
bookForm.addEventListener("submit", showBooking)

function showBooking(event) {
    // prevent default page refresh
    event.preventDefault()
    
    // grab all the form elements
    var firstName = bookForm.firstName.value
    var lastName = bookForm.lastName.value
    var age = bookForm.age.value
    var gender = bookForm.gender.value
    var destination = bookForm.destination.value
    
    // Get chosen stuff from checkboxes
    var restrictionsArr = bookForm.restrictions
    var restrictions = []
    for (var i = 0, len = restrictionsArr.length; i < len; i++) {
        if (restrictionsArr[i].checked) {
            restrictions.push(restrictionsArr[i].value)
        }
    }
    
    // Display all choices in an alert
    alert(
        "First name: " + firstName
        + "\nLast name: " + lastName
        + "\nAge: " + age
        + "\nGender: " + gender
        + "\nLocation: " + destination
        + "\nDietary restrictions: " + restrictions)
}
