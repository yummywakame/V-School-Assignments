import React from 'react'
import Animal from './Animal.js'
const App = () => {
    return (
        <div>
            <Animal type="Lion" sound="Raaaawrrr" legs={4} coat="furry" diet="Carnivore" />
        </div>
    )
}

export default App