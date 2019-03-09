module.exports = function(){

    const server = function(){
        console.log("I create a server")
    }

    const errorHandlingStuff = function(){
        console.log("I do other stuff for errors")
    }

    return { errorHandlingStuff, server }
}