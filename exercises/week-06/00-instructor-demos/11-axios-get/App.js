// This is the axios.get() function written out so we dont have to use Axios

function get(url) {
    const xhr = new XMLHttpRequest()
    
    xhr.open("GET", url)
    xhr.send()
    
    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4 && xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText))
            } else if (xhr.readyState === 4 && xhr.status !== 200) {
                reject("Error on the server.")
            }
        }
    })
    
}

get("https://api.vschool.io/natej/todo")
    .then(response => console.log(response))
    .catch(error => console.log(error))
