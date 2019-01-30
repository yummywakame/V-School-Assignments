var input = document.getElementById("change-me");
// select our input by ID and assign it to the variable, "input"

// use the add event listener method to put an event on "input"
// "change" is one of a few dozen strings and add event listener will understand. It's our first argument 
input.addEventListener("change", function(e){ // we pass an entire function as the second argument. 
    document.getElementById("output").textContent = e.target.value
    // select the div, and change the "textContent" property to the value of the events target (the input box)
})

// "e" is important here. You can define it as "event" or whatever you need, but it's common to just call it "e"
// it has properties that help describe the event, includeing the "e.target" object
// if the target (whatever you put the event listener on) is an input box, "e.target" has a ".value" property. And it's whatever is in the input box. 
// Even if your input box is a number, the value will be a string. Like, "243" vs 243. Remember, "1" + "1" === "11"