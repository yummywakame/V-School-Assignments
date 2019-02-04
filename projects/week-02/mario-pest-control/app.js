// Grab form by 'name' attribute
    var pestForm = document.pestForm
    
// Grab all three inputs and the result output
    var inputBobomb = pestForm.inputBobomb
    var inputGoomba = pestForm.inputGoomba
    var inputCheepCheep = pestForm.inputCheepCheep
    
    var outputResult = pestForm.result
    
// grab each character's div so that it can be clicked
    var bobomb = document["bob-omb"]
    var goomba = document["goomba"]
    var cheepcheep = document["cheep-cheep"]
 
// Create a submit event listener for the whole form
pestForm.addEventListener("submit", addItAllUp)
      
// Add all the values and return the result
function addItAllUp(event) {

    // prevent the page auto-refresing on submit
    event.preventDefault()
    
    // first initialize all fields that haven't been touched 
    // rather than requiring them (ease of use)
    if (inputBobomb.value === "") {
        inputBobomb.value = 0;
    }
    if (inputGoomba.value === "") {
        inputGoomba.value = 0;
    }
    if (inputCheepCheep.value === "") {
        inputCheepCheep.value = 0;
    }
    
    // Return the grand total:
    // Bob-ombs are worth 7 coins each
    // Goombas are worth 5 coins each
    // Cheep-cheeps are worth 11 coins each
    var result = 
        (Number(inputBobomb.value) * 7) + 
        (Number(inputGoomba.value) * 5) + 
        (Number(inputCheepCheep.value) * 11)
         
    // update the output to display the total
    outputResult.value = result;
    
    // reset all the fields
    inputBobomb.value = ""
    inputGoomba.value = ""
    inputCheepCheep.value = ""
    
    // finally, play the coin sound
    playSound()
}

// When a character is clicked, add 1 to its field
// str holds value for "bobomb", "goomba" or "cheepcheep"
// to keep track
function addOne(str) {
    if (str === "bobomb") {
        inputBobomb.value = Number(inputBobomb.value) + 1
    } else if (str === "goomba") {
        inputGoomba.value = Number(inputGoomba.value) + 1
    } else if (str === "cheepcheep") {
        inputCheepCheep.value = Number(inputCheepCheep.value) + 1
    }
}

// Play the mario coin sound
function playSound() {
    var sound = document.getElementById("audio");
    sound.play()
}