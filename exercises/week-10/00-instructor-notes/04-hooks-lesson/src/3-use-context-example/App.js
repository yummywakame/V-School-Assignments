import React, {useContext, useEffect} from 'react'
import { DataContext } from './context/DataProvider.js'

const App = () => {
    const {characters, getCharacters, toggler, globalToggle} = useContext(DataContext)

    useEffect(() => { getCharacters() }, [])
   
    return (
        <div>
          { characters.map(c => 
              <div style={{ backgroundImage: `url(${c.image})`}}>
                  <h1>{c.name}</h1>
              </div>
          )}
          <div>
            <h1>The toggle is { globalToggle ? "On" : "Off"}</h1>
            <button onClick={toggler}>Toggle</button>
          </div>
        </div>
    )
}

export default App