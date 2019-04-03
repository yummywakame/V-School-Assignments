import React, { useState, useEffect } from 'react'
import axios from 'axios'

// useEffect
    // componentDidMount
    // componentDidUpdate
    // componentWillUnmount

// url: https://rickandmortyapi.com/api/character

// Ex1.  Component Did Mount
// const App = () => {
//     const [characters, setCharacters] = useState([])

//     useEffect(() => {
//         // componentDidMount
//         axios.get("https://rickandmortyapi.com/api/character")
//             .then(res => {
//                 setCharacters(res.data.results)
//             })
//             .catch(err => console.log(err))
//     }, []) // Whatever value we put in this array, useEffect will check on every re-render
//             // after initial mounting to see if it should run the request again.
//             // And empty is telling react to use this like componentDidMount, run it once.

//     console.log(characters)
//     return (
//         <div>
//             <div>
//                 { characters.map(c => 
//                     <div style={{ backgroundImage: `url(${c.image})`}}>
//                         <h1>{c.name}</h1>
//                     </div>
//                     )}
//             </div>
//         </div>
//     )
// }


const App = () => {
    const [color, setColor] = useState("cornflowerblue") 

    function colorPicker(e){
        if(e.which === 82){
            setColor("red")
        } else if(e.which === 89){
            setColor("yellow")
        } else if(e.which === 71){
            setColor('green')
        } else if(e.which === 66){
            setColor('cornflowerblue')
        }
    }

    useEffect(() => {
        // componentDidMount
        window.addEventListener("keydown", colorPicker)
        // componentWillUnmount
        return () => {
            window.removeEventListener('keydown', colorPicker)
        }
    })

    return (
        <div style={{width: 200, height: 200, backgroundColor: color}}>

        </div>
    )
}

export default App