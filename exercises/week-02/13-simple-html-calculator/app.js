//Grab forms by 'name' attribute
var formAdd = document.addForm
var formSubtract = document.subtractForm
var formMultiply = document.multiplyForm

// target form fields
var addInput1 = formAdd.add1
var addInput2 = formAdd.add2

var subtractInput1 = formSubtract.subtract1
var subtractInput2 = formSubtract.subtract2

var multiplyInput1 = formMultiply.multiply1
var multiplyInput2 = formMultiply.multiply2

var doesAddResultExist = false;
var doesSubtractResultExist = false;
var doesMultiplyResultExist = false;

// Submit EventListener for each form
formAdd.addEventListener('submit', addIt)
formSubtract.addEventListener('submit', subtractIt)
formMultiply.addEventListener('submit', multiplyIt)

// Calculator functions
function addIt(e) {
    // Prevent event default of page refreshing, and keep the data
    e.preventDefault()
    
    // Target the result container
    var container = document.getElementById('resultAdd')

    // create the p tags for the div
    var result1 = document.createElement('p')
    // convert the strings to numbers and get the content ready
    result1.textContent = Number(addInput1.value) + Number(addInput2.value)
    // if a previous result exists, replace it otherwise append it
    if (doesAddResultExist) {
        container.replaceChild(result1, container.childNodes[0])
    } else {
        container.appendChild(result1)
        doesAddResultExist = true;
    }
}
function subtractIt(e) {
    e.preventDefault()
    var container = document.getElementById('resultSubtract')

    var result2 = document.createElement('p')
    result2.textContent = Number(subtractInput1.value) - Number(subtractInput2.value)
    if (doesSubtractResultExist) {
        container.replaceChild(result2, container.childNodes[0])
    } else {
        container.appendChild(result2)
        doesSubtractResultExist = true;
    }
}
function multiplyIt(e) {
    e.preventDefault()
    var container = document.getElementById('resultMultiply')

    var result3 = document.createElement('p')
    result3.textContent = Number(multiplyInput1.value) * Number(multiplyInput2.value)
    if (doesMultiplyResultExist) {
        container.replaceChild(result3, container.childNodes[0])
    } else {
        container.appendChild(result3)
        doesMultiplyResultExist = true;
    }
}
