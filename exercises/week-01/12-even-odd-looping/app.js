// Create a for loop that iterates through 101 numbers (from 0 - 100). 
// If the current iteration is an Odd number, print "Odd" to the console, 
// otherwise print "Even".

var message;

for (i = 0; i < 101; i++) {
    if (i % 2) {
        message = "Odd";
    } else {
        message = "Even";
    }
   console.log(i + ": " + message);
}