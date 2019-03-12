function matrix() {
    const matrixArr = []
    for (let i = 0; i < 5; i++) {
        matrixArr[i] = []
        for(let j = 0; j < 5; j++) {
            matrixArr[i][j] = 0
        }
    }
    return matrixArr
}

module.exports = matrix