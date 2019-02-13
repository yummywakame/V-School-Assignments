var todoList = document.getElementById('container')

// GET REQUEST WITH AXIOS
function getData() {
    axios.get("https://api.vschool.io/oliviameiring/todo").then(function (response) {
        var todos = response.data
        listTodos(todos)
        console.log(todos)

    }).catch(function (error) {
        console.log(error)
    })
}

function listTodos(todos) {
    for (var i = 0; i < todos.length; i++) {
        // create HTML elements
        var dataContainer = document.createElement("div")
        var title = document.createElement('h2')
        var description = document.createElement('p')
        var image = document.createElement('img')
    
        //edit elements
        title.textContent = todos[i].title
        description.textContent = todos[i].description
        
        // set special attributes or styling and images
        image.setAttribute("src", todos[i].imgUrl)
        dataContainer.className = "item"
        
        // add to dataContainer
        dataContainer.appendChild(image)
        dataContainer.appendChild(title)
        dataContainer.appendChild(description)
        
        // add dataContainer to main container
        container.appendChild(dataContainer)
    }
}

getData()