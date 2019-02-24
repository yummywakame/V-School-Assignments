inscription = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."

const matchingWords = (str) => {
    let arr = str.toLowerCase().match(/\w+(?:'\w+)*/g)
    let arr2 = []
    
    // first make an array of only words that appear more than once
    let index = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = index; j < arr.length -1; j++) {
            if (arr[i] === arr[j]) {
                arr2.push(arr[i])
            }
        }
        index++
    }
    
    // remove duplicates from new array
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 1; j < arr2.length -1; j++) {
            if (arr2[i] === arr2[j]) {
                arr2.splice(j, 1)
                j++
            }
        }
    }
    
    return arr2.join(" ")
}
console.log('Original inscription:\n"' + inscription + '"')
console.log('\nSolution: "' + matchingWords(inscription) + '"') // Solution: "pull lever on far right"