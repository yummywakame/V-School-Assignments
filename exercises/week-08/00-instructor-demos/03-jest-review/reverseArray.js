function reverseArray(arr) {
    if (arr.length === 0) {
        return("Please provide array with contents.")
    }
    return arr.reverse()
}

module.exports = reverseArray
