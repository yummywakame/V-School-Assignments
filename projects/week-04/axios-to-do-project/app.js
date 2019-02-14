var containerIncomplete = document.getElementById('containerIncomplete')
var containerComplete = document.getElementById('containerComplete')

// GET REQUEST WITH AXIOS
function getData() {
    axios.get("https://api.vschool.io/oliviameiring/todo").then(function (response) {
        var todos = response.data
        listIncompleteToDos(todos)
        console.log(todos)

    }).catch(function (error) {
        throw new Error(error)
    })
}

function listIncompleteToDos(todos) {
    for (var i = 0; i < todos.length; i++) {

        // create HTML elements
        var card = document.createElement('div')
        var cardContent = document.createElement('div')
        var title = document.createElement('span')
        var description = document.createElement('p')
        // var image = document.createElement('img')

        // edit elements
        card.className = "card"
        cardContent.className = "card-content"
        title.classname = "card-title"
        title.textContent = todos[i].title
        description.textContent = todos[i].description

        // // add to cardContent
        // if (!(todos[i].imgUrl === undefined || todos[i].imgUrl === "")) {
        //     // only display image if available
        //     // set special attributes or styling and images
        //     image.setAttribute("src", todos[i].imgUrl)
        //     cardContent.appendChild(image)
        // }

        cardContent.appendChild(title)
        cardContent.appendChild(description)

        // add cardContent to main container
        card.appendChild(cardContent)
        
        if (todos[i].completed) {
            containerComplete.appendChild(card)
        } else {
            containerIncomplete.appendChild(card)
        }
        console.log(todos[i].completed)
    }
}

getData()