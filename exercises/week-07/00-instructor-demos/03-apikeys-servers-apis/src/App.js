import React from 'react'

const App = () => {
    return (
        <div>
            <h3>Servers</h3>
                <ul>
                    <li>Listens for requests (GET, POST, PUT, DELETE)</li>
                    <li>Eventually, sends back a response</li>
                    <li>Request => Response Cycle</li>
                </ul>
            <h4>HTTP</h4>
                <ul>
                    <li>HyperText Transfer Protocol (XML)</li>
                    <li>JSON => The better way</li>
                </ul>
            <h3>APIs</h3>
                <span>Application Programming Interface</span>
                <ol>
                    <li>Do the cooking (Server passes request to API)</li>
                    <li>API queries the DB</li>
                    <li>Gives server response to then send to the Client</li>
                </ol>
            <h3>URIs</h3>
                <ul>
                    <li>Uniform Resource Identifier</li>
                    <li>www.rickandmortyapi.com/api/characters?api_key={process.env.REACT_APP_API_KEY}</li>
                </ul>


            <h6>Hiding an API key Appropriately</h6>
                <p>
                    1. To hide an API key, create an .env file OUTSIDE of your src folder.
                </p>
                <p>
                    2. Decare env variables by declaring them with `REACT_APP_NAME_OF_VAR`
                </p>
                <p>
                    Example:  REACT_APP_APIKEY="859294j239jiojfo3298f09823"
                </p>
                <p>
                    3. Use the environment variable by saying process.env.REACT_APP_APIKEY in your React code.
                </p>
                <p>
                    4. <span style={{borderBottom: '1px solid red', backgroundColor: 'firebrick'}}>IMPORTANT!!</span> Add .env to your .gitignore so it never goes to github.
                </p>
        </div>
    )
}

export default App;