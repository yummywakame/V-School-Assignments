var lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];
              
/* 
    Create three functions using the provided array as an argument.
 */
// 1. First function: returns contents of the array, lyrics, to the 
//  console as a string, including necessary spaces.
function stringLyrics() {
    var newStr = ""
    
    for (i = 0, len = lyrics.length; i < len; i++) {
        newStr += lyrics[i]
        if (i+1 !== len) {
            newStr += " "
        }
    }
    return newStr
}
console.log("1: " + stringLyrics())

// 2. Second function: returns lyrics backwards 
//  ("pretty so I'm myself kiss Gotta...").
function stringRevLyrics() {
    var newStr = ""
    
    for (i = lyrics.length - 1; i > 0; i--) {
        newStr += lyrics[i]
        if (i - 1 > 0) {
            newStr += " "
        }
    }
    return newStr
}
console.log("\n2: " + stringRevLyrics())

// 3. Third function: returns a string of just every other word, 
//  (e.g. "this that cold Pfeiffer...").
function everyOtherWord() {
    var newStr = ""
    
    for (i = 0, len = lyrics.length; i < len; i += 2) {
        newStr += lyrics[i]
        if (i+1 !== len) {
            newStr += " "
        }
    }
    return newStr
}
console.log("\n3: " + everyOtherWord())

/* 
    Extra Challenge
 */
// 4. Fourth function: returns all of lyrics, but every two words are switched
//  ( "hit This ice that Michelle cold...").

// 5. Fifth function: returns lyrics in a random order.