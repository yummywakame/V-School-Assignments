import React from 'react'
import './style.css'
import NameCard from './NameCard.js'

function App(props) {
    console.log(props)
    
    const obj = {
        color: "blue"
    }
    
    const styles = {
        color1: "blue",
        color2: "green"
    }
    
    return (
        <div>
            <NameCard myStyle="color1" name="Rick" age={70} myObj={obj} styleProp={styles.color1} />
            <NameCard myStyle="color2" name="Morty" age={13} myObj={obj} styleProp={styles.color2} />
        </div>
    )
}

export default App