// SETUP
var xhr = new XMLHttpRequest()

xhr.onreadystatechange = function() {
    if(xhr.status === 200 && xhr.readyState === 4) {
        var jsonData = xhr.responseText
        var pokemonData = JSON.parse(jsonData)
        listDataToDOM(pokemonData.objects[0].pokemon)
    }
}

xhr.open("GET", "https://api.vschool.io/pokemon", true) // true enables async

// EXECUTE
xhr.send()

function listDataToDOM(pokemonArr) {
    console.log(pokemonArr)
    
    // loop through all the pokemon
    for (var i = 0, len = pokemonArr.length; i < len; i++) {
        
        var pokemon = pokemonArr[i]
        
        // create html elements
        var dataContainer = document.createElement("div")
        var name = document.createElement('h2')
        var url = document.createElement('a')
        
        dataContainer.appendChild(name)
        url.setAttribute("href", pokemon.resource_uri)
        dataContainer.appendChild(url)
        dataContainer.className = "pokemon"
        
        // edit element
        name.textContent = pokemon.name
        url.textContent = pokemon.resource_uri
        
        // add to container
        container.appendChild(dataContainer)
    
    }
    
    

}
