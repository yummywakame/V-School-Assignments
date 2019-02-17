apiUrl = "https://api.vschool.io/oliviameiring/todo"

const containerIncomplete = document.getElementById('containerIncomplete')
const containerComplete = document.getElementById('containerComplete')
const addForm = document['addForm']
const addEditContainers = document.getElementsByClassName('add-edit-container')
const viewContainers = document.getElementsByClassName('view-container')
const cardContent = document.getElementsByClassName('card-content')

// GET TO DOS FROM DATABASE
function getData() {
    axios.get(apiUrl).then((response) => {
        const todos = response.data
        listAllToDos(todos)
    }).catch((error) => {
        throw new Error(error)
    })
}

// List all to dos, sorted in columns by completed or incomplete
function listAllToDos(todos) {
    // reverse the array so that it shows most recent first
    todos.reverse()

    for (let i = 0; i < todos.length; i++) {

        // grab the current ID
        const id = todos[i]._id

        // create HTML elements
        const card = document.createElement('div')
        const editForm = document.createElement('form')
        const editIcon = document.createElement('div')
        const cardContent = document.createElement('div')
        const title = document.createElement('p')
        const description = document.createElement('h6')
        const price = document.createElement('h6')
        const image = document.createElement('a')

        // edit elements
        card.className = "card"
        card.id = id
        editForm.name = "editform-" + id

        card.addEventListener("click", formToggleVisibility)

        editIcon.innerHTML = `                        <a class="waves-effect waves-light lighten-4 secondary-content btn-flat blue-text" onclick="formToggleVisibility('editContainer')"><i
        class="material-icons right">edit</i></a>`

        cardContent.classList = "view-container card-content"

        title.classList = "card-title"

        if (todos[i].completed) {
            title.innerHTML = `<p class="card-title">
            <label>
                <input type="checkbox" onclick="toggleCompleted(this, '${id}')" checked />
                <span class="black-text">${todos[i].title}</span>
            </label>
        </p>`
        } else {
            title.innerHTML = `<p class="card-title">
            <label>
                <input type="checkbox" onclick="toggleCompleted(this, '${id}')" />
                <span class="black-text">${todos[i].title}</span>
            </label>
        </p>`
        }

        if (todos[i].description) {
            description.textContent = todos[i].description
            description.classList = "grey-text"
        }

        if (todos[i].price) {
            price.textContent = "$" + todos[i].price
            price.classList = "grey-text"
        }

        if (todos[i].imgUrl) {
            image.setAttribute("href", todos[i].imgUrl)
            image.setAttribute("target", "_blank")
            image.style = "margin-bottom: 20pt; margin-top: -20pt; display: block;"
            image.innerHTML = `<i class="material-icons right">image</i>`
        }

        // add edit form stuff
        const editFormContainer = document.createElement('div')
        editFormContainer.classList = "card-content toggle-content add-edit-container"
        editFormContainer.id = "add-edit-" + card.id
        editFormContainer.innerHTML = `                            <p>
            <input value="${todos[i].title || ''}" placeholder="Title" id="title" type="text" class="validate" required />
            <label for="title" class="hide-me">Title</label>
        </p>

        <p>
            <input value="${todos[i].description || ''}" placeholder="Notes" id="description" type="text" class="validate" />
            <label for="description" class="hide-me">Notes</label>
        </p>

        <p>
            <input value="${todos[i].price || ''}" placeholder="Price" id="price" type="number" class="validate" />
            <label for="number" class="hide-me">Price</label>
        </p>

        <p>
            <input value="${todos[i].imgUrl || ''}" placeholder="Image URL" id="imgUrl" type="url" class="validate" />
            <label for="imgUrl" class="hide-me">Image URL</label>
        </p>

        <a class="waves-effect waves-light light-blue btn" onclick="updateAToDo('${todos[i]._id}')"><i class="material-icons left">save</i>update</a>
        <a class="waves-effect waves-light pink secondary-content btn" onclick="deleteAToDo('${todos[i]._id}')"><i class="material-icons left">delete</i>delete</a>`

        card.appendChild(editIcon)
        card.appendChild(editForm)
        cardContent.appendChild(title)


        if (todos[i].description) cardContent.appendChild(description)

        if (todos[i].price) cardContent.appendChild(price)

        if (todos[i].imgUrl) cardContent.appendChild(image)

        // add cardContent to main container
        editForm.appendChild(cardContent)
        editForm.appendChild(editFormContainer)

        // Display to do in the appropriate column
        if (todos[i].completed) {
            containerComplete.appendChild(card)
        } else {
            containerIncomplete.appendChild(card)
        }

    }
}

// FORM EVENT LISTENER FOR DOING OUR POST REQUEST TO THE API
addForm.addEventListener("submit", function (event) {
    event.preventDefault()

    // Generate newTodo object
    const newTodo = {
        title: addForm.title.value,
        description: addForm.description.value,
        price: addForm.price.value,
        imgUrl: addForm.imgUrl.value,
        completed: false
    }

    // Reset the form values to be empty after grabbing the info
    addForm.title.value = ""
    addForm.description.value = ""
    addForm.price.value = ""
    addForm.imgUrl.value = ""

    // POST THE DATA
    axios.post(apiUrl, newTodo).then(res => {
        // Not necessary, but this is a way you can clear the DOM and re-print the new data
        // todoListContainer.innerHTML = ""
        getData()
        window.location.reload(true);

    }).catch((error) => {
        throw new Error(error)
    })

})


// FUNCTION FOR DOING OUR PUT REQUEST TO THE API
function updateAToDo(id) {

    const formName = "editform-" + id
    const editForm = document[formName]

    // Generate updatedTodo object
    const updatedTodo = {
        title: editForm.title.value,
        description: editForm.description.value,
        price: editForm.price.value,
        imgUrl: editForm.imgUrl.value,
    }
    
    // If the required title has been filled in
    if (editForm.title.value) {
    // PUT THE DATA
    axios.put(apiUrl + "/" + id, updatedTodo).then(res => {
        getData()
        window.location.reload(true);

    }).catch((error) => {
        throw new Error(error)
    })    
    }


}


// FUNCTION FOR UPDATING THE COMPLETION OF A TO DO
function toggleCompleted(element, id) {

    let updatedTodo

    if (element.checked) {
        // Generate updatedTodo object
        updatedTodo = {
            completed: true
        }
    } else {
        // Generate updatedTodo object
        updatedTodo = {
            completed: false
        }
    }

    // PUT THE DATA
    axios.put(apiUrl + "/" + id, updatedTodo).then(res => {
        getData()
        window.location.reload(true);

    }).catch((error) => {
        throw new Error(error)
    })

}


// FUNCTION FOR DELETING A SELECTED TO DO
function deleteAToDo(id) {
    // DELETE THE DATA
    axios.delete(apiUrl + "/" + id).then(res => {
        getData()
        window.location.reload(true);

    }).catch((error) => {
        throw new Error(error)
    })
}

// TOGGLE VISIBILITY OF ADD & EDIT FORMS
// Show Form - pass it the ID of the div you are showing/hiding
function formToggleVisibility(hardId) {

    let id
    let cardContentById

    if (hardId === "editContainer" || hardId === "addContainer") {
        // grab the selected div by its hardcoded ID
        id = hardId
        cardContentById = document.getElementById("add-edit-" + hardId)

    } else {
        // grab the selected div by its db ID
        id = this.id
        cardContentById = document.getElementById("add-edit-" + id)
    }

    // toggle visibility of add div

    // if container is visible? Hide it by ID and ALL divs by class
    if (cardContentById.style.display === "block") {

        // initialize all add and edit containers to hidden
        for (let i = 0; i < addEditContainers.length; i++) {
            addEditContainers[i].style.display = "none"
            addEditContainers[i].style.height = 0

        }

        // show selected form
        cardContentById.style.display = "none";
        cardContentById.style.height = 0;


        // block is invisible? show it by ID and hide all other divs by class
    } else {

        // initialize all add and edit containers to hidden
        for (let i = 0; i < addEditContainers.length; i++) {
            addEditContainers[i].style.display = "none"
            addEditContainers[i].style.height = 0
        }

        // show selected div by its ID
        cardContentById.style.display = "block";
        cardContentById.style.height = "auto";

    }
    
    document.getElementById('add-edit-' + id).addEventListener('click', function (event) {
        event.stopPropagation();
    });

}

// RUN THE APP
getData()