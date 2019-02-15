const containerIncomplete = document.getElementById('containerIncomplete')
const containerComplete = document.getElementById('containerComplete')
const addForm = document.getElementById('addForm')
const addEditContainers = document.getElementsByClassName('add-edit-container')
const viewContainers = document.getElementsByClassName('view-container')
const cardContent = document.getElementsByClassName('card-content')


// GET REQUEST WITH AXIOS
function getData() {
    axios.get("https://api.vschool.io/oliviameiring/todo").then(function (response) {
        var todos = response.data
        listAllToDos(todos)

    }).catch(function (error) {
        throw new Error(error)
    })
}

// List all to dos, sorted in columns by completed or incomplete
function listAllToDos(todos) {
    for (var i = 0; i < todos.length; i++) {

        // create HTML elements
        var card = document.createElement('div')
        var cardContent = document.createElement('div')
        var title = document.createElement('span')
        var description = document.createElement('p')
        // var image = document.createElement('img')

        // edit elements
        card.className = "card"
        card.id = todos[i]._id
        console.log(card.id)
        // card.onclick = function (e) {
        //     formToggleVisibility(e, card.id)
        // }
        card.addEventListener("click", formToggleVisibility)

        cardContent.classList = "view-container card-content"

        title.classList = "card-title"
        title.textContent = todos[i].title
        description.textContent = todos[i].description

        // // add to cardContent
        // if (!(todos[i].imgUrl === undefined || todos[i].imgUrl === "")) {
        //     // only display image if available
        //     // set special attributes or styling and images
        //     image.setAttribute("src", todos[i].imgUrl)
        //     cardContent.appendChild(image)
        // }

        // add edit form stuff
        const editFormContainer = document.createElement('div')
        editFormContainer.classList = "toggle-content add-edit-container"
        editFormContainer.id = "add-edit-" + card.id
        editFormContainer.innerHTML =
            `                            <form name="editForm">
        <p>
            <input placeholder="Title" id="title" type="text" class="validate" required />
            <label for="title">Title</label>
        </p>

        <p>
            <input placeholder="Notes" id="description" type="text" class="validate" />
            <label for="description">Notes</label>
        </p>

        <p>
            <input placeholder="Price" id="number" type="number" class="validate" />
            <label for="number">Price</label>
        </p>

        <p>
            <input placeholder="Image URL" id="imgUrl" type="url" class="validate" />
            <label for="imgUrl">Image URL</label>
        </p>

        <button class="waves-effect waves-light light-blue btn"><i class="material-icons left">save</i>update</button>
        <button class="waves-effect waves-light pink secondary-content btn"><i class="material-icons left">delete</i>delete</button>
    </form>`

        cardContent.appendChild(title)
        cardContent.appendChild(description)
        cardContent.appendChild(editFormContainer)

        // add cardContent to main container
        card.appendChild(cardContent)

        if (todos[i].completed) {
            containerComplete.appendChild(card)
        } else {
            containerIncomplete.appendChild(card)
        }

    }
}

// add an eventListener for any ID that is a number
// this listens for clicks on to do divs
// containerIncomplete.addEventListener('click', function (event) {
//     // alert(event.target.id)
//     // formToggleVisibility(event.target.id)
// });


// Show Form - pass it the ID of the div you are showing/hiding
function formToggleVisibility(hardId) {

    console.log(hardId)
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
    console.log("id: " + id)
    console.log("cardContentById: " + cardContentById.id)

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

}

// RUN THE APP
getData()