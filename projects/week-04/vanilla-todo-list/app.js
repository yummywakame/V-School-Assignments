const apiUrl = "https://api.vschool.io/oliviameiring/todo"

const todoListContainer = document.getElementById('todolist-container')
const todoForm = document["add-todo-form"]

// Reuseable function to get our Todos from the database
function getData(){
    axios.get(apiUrl).then(res => {
        const todos = res.data
        // Send the data to our function so it can print the todos to the DOM
        listTodos(todos)
    }).catch(err => console.log(err))
}


function listTodos(todosArr){
    for(let i = 0; i < todosArr.length; i++){
        // Make it show on the DOM
        // Create Elements
        const todoContainer = document.createElement('div')
        const title = document.createElement('h1')
        const imgUrl = document.createElement('img')


        // Edit the element / Give it content
        todoContainer.classList.add("todo-container")
        title.textContent = todosArr[i].title
        imgUrl.setAttribute("src", todosArr[i].imgUrl)

        // if the current todo is completed, make the title have a line-through
        if(todosArr[i].completed){
            title.style.textDecoration = "line-through"
        }

        // Append it to the DOM
        todoContainer.appendChild(title)
        todoContainer.appendChild(imgUrl)
        todoListContainer.appendChild(todoContainer)
    }
}

// FORM EVENT LISTENER FOR DOING OUR POST REQUEST TO THE API
todoForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Generate newTodo obj
    const newTodo = {
        title: todoForm.title.value
    }

    // Reset the form value to be empty
    todoForm.title.value = ""

    
    //////////
    // POST //
                // URL for POST                     // Object we are sending to be added
    axios.post("https://api.vschool.io/oliviameiring/todo", newTodo).then(res => {
        // Not necessary, but this is a way you can clear the DOM and re-print the new data
        todoListContainer.innerHTML = ""
        getData()
        // the .catch is ensure that any issues/errors in our post request are shown in the console.
    }).catch(err => console.log(err))

})  


// Calling getData() on page load so our axios.get goes out right away.
getData()