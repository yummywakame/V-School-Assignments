// Reddit Clone

    // Models
        - User 
            - username
            - password
            - isAdmin
            - userImg
            - birthday
            - firstName
            - lastName
            - email
            - favoritePosts - Array of Object Ids belonging to Liked Posts

        - Post
            - title
            - summary
            - imgUrl
            - votes
            - user - Object ID
            - thread - [enum]
            - comments - Array of Objects { user, comment, timeStamp }
            - Timestamp
            - tags - []
        

    // Routes
        - User
            - Signup
            - Login
        - Post
            - Add Post    ( Needs User id )
            - Delete Post ( only by user )
            - Upvote
            - Downvote

     

// `1. Backend Stucture Setup`
    - `npm init -y`    - package.json
    - `install dependencies`:
        - express       - For server and routes
        - mongoose      - connects to DB, creates models(collections), queries DB
        - morgan        - Helpful console.log in our server
        - axios         - Used on the backend to request data from 3rd party apis
        - dotenv        - Configures our local process.env for private environment variables
        - jsonwebtoken  - Creates JSON web tokens with jwt.sign()
        - express-jwt   - Checks incoming requests to see if they have a token.  Provides `req.user`
        - bcrypt        - Used to encrypt/compare encrypted passwords
    - `Directory Setup`   
        - server.js
        - .gitignore
        - .env
        - routes (directory)
        - models (directory)
        - client (for front end later)
// `2. Front end Setup`
        - CD into client and run `create-react-app .`
        - delete auto repo by typing in client folder: `rm -rf .git`
        - `Dependencies`
            - axios            - making requests to our server OR 3rd party servers
            - react-router-dom - For front end SPA routing
            - prop-types       - Static Type checking on Props
// `3. Server.js Boilerplate code`
// `4: Models - Define our data`
// `5: Routes - How will we interact with our data`

// `ASIDE:  POSTMAN`
        For each project, create a new "collection" folder in the left hand nav on POSTMAN
        HEADERS: should always have a Content-Type === application/json
            1. Create a sub folder for each express.Router() you are using
            2. Create a new template in each router folder for each request-endpoint you have set up
            3. Set up the template for the request, then save it in the appropriate sub-folder

        For requests that to the /api endpoint
            1. Add 2nd header called Authorization, set equal to  Bearer <token string from logged in user on login route>
            2. Body - the object you are posting that is 'raw' 'json'

// `6: Front-end Auth setup`
    - Add proxy to package.json in client
    - Set up index.js and App.js - boilerplate code
    - Set up context, components, and shared folders
// `7. UserProvider setup`
    - create state, login, signup, and withUser consumer
// `8. Wrap <App/>  with Providers (BrowserRouter & UserProvider)`
// `9. Set up <App /> Switch Statement and Route for login page`
// `10. Develop login page component and form to hook up to our Context` (Next Lesson)