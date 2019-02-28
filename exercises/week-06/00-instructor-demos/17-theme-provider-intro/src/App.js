import React from 'react'
import { avecTheme } from './context/ThemeProvider.js'
import './style.css'

const App = props => {
    return (
        <div>
            <div className={`home-${props.theme}`}>
            <p>stuff</p>
                This is the Home Page, Woohoo.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Omnis, tempore. Accusamus, minima illo! Quibusdam at 
                laboriosam facilis unde, neque sapiente adipisci. Maiores 
                recusandae necessitatibus fugit, in accusamus a velit dolore?
            </div>
            <div>
                <button onClick={props.toggleTheme}>Change Theme to {props.theme === "light" ? "dark" : "light"} !</button>
            </div>
        </div>
    )
}

export default avecTheme(App)