import React from 'react'
import photo1 from './photos/abandoned/01.jpg'
import photo2 from './photos/architecture/02.jpg'
import photo3 from './photos/portraits/03.jpg'
import photo4 from './photos/spirals/04.jpg'
import photo5 from './photos/tunnels/04.jpg'

function HomePage() {
    return (
        <main>
            <article>
                <a href="./abandoned.html"><img src={ photo1 } alt="Abandoned" /></a>
                <h3><a href="./abandoned.html">Abandoned</a></h3>
            </article>
            <article>
                <a href="./architecture.html"><img src={ photo2 } alt="Architecture" /></a>
                <h3><a href="./architecture.html">Architecture</a></h3>
            </article>
            <article>
                <a href="./portraits.html"><img src={ photo3 } alt="Portraits" /></a>
                <h3><a href="./portraits.html">Portraits</a></h3>
            </article>
            <article>
                <a href="./spirals.html"><img src={ photo4 } alt="Spirals" /></a>
                <h3><a href="./spirals.html">Spirals</a></h3>
            </article>
            <article>
                <a href="./tunnels.html"><img src={ photo5 } alt="Tunnels" /></a>
                <h3><a href="./tunnels.html">Tunnels</a></h3>
            </article>
        </main>
    )
}

export default HomePage