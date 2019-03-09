module.exports = function(){
    const state = {
        count: 0
    }

    function increment(){
        state.count++
    }

    return { count: state.count, increment}
}


