import React, { useState } from 'react'

// Functional(stateless - display), Class (stateful - lifecycle)
// Function - Functional component that uses hooks

// Ex1
const App = () => {
    const [counter, setCounter] = useState(10)
    return (
        <div>
            <div>
                <h1>{counter}</h1>
            </div>
            <div>
                <button onClick={() => setCounter(counter + 1)}>Increment</button>
                <button onClick={() => setCounter(counter - 1)}>Decrement</button>
            </div>
        </div>
    ) 
}


// Ex. 2
// const App = () => {
//     const initialState = ["Rick", "Morty", "Birdperson"]
//     const [namesArr, setNamesArr] = useState(initialState)
    
//     function removeLastPerson(arr){
//         arr.pop()
//         return [...arr]
//     }

//     return (
//         <div>
//             <div>
//                 { namesArr.map(name => <h1 key={name}>{name}</h1>) }
//             </div>
//             <div>
//                <button onClick={() => setNamesArr(removeLastPerson(namesArr))}>
//                    Remove A person
//                 </button>
//             </div>
//         </div>
//     )   
// }


// Ex. 3
// const App = () => {
//     const initialInputsState = {
//         title: "",
//         description: ""
//     }

//     const [inputs, setInputs] = useState(initialInputsState)
//     const [data, setData] = useState([])

//     const handleChange = e => {
//         setInputs({
//             ...inputs,
//             [e.target.name]: e.target.value
//         })
//     }
    
//     const handleSubmit = e => {
//         e.preventDefault()
//         const newObj = {
//             title: inputs.title, 
//             description: inputs.description
//         }
//         setData([...data, newObj])
//         setInputs(initialInputsState)
//     }

//     const { title, description } = inputs
//     return (
//         <div>
//             <div>
//                 <form onSubmit={handleSubmit}>
//                     <input type="text" name="title" value={title} onChange={handleChange}/>
//                     <input type="text" name="description" value={description} onChange={handleChange}/>
//                     <button>Submit</button>
//                 </form>
//             </div>
//             <div>
//                 { data.map((item, i) => 
//                     <div key={i}>
//                         <h1>{item.title}</h1>
//                         <p>{item.description}</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }

export default App