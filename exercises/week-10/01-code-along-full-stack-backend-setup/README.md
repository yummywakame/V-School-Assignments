1. Backend Setup

* package Json:
$ npm i init

* install dependencies:
$ npm i express mongoose morgan axios dotenv jsonwebtoken express-jwt bcrypt
- express       - for server routes
- mongoose      - connects to DB, creates models(collections), queries DB
- morgan        - helpful console.log in our srver
- axios         - used oon the backend to request data from 3rd party APIs
- dotenv        - configures our local process.env for private environment variables
- jsonwebtoken  - creates JSON web tokens with jwt.sign()
- express-jwt   - checks incoming requests to see if they have a token. Provides `req.user1
- bcrypt          - used to encrypt and compare passwords

* Directory Setup:
- server.js (file)
- .gitignore (file)
    node_modules
    .env
- .env (file)
- routes (dir)
- models (dir)
- client (dir)

* Front end setup
    - cd to client and 
    - $ create-react-app .
    - $ npm init -y
    - delete auto repo `rm -rf .git`
    - install dependencies:
        $ npm i axios react-router-dom prop-types
        axios               - making requests to our server or 3rd party servers
        react-router-dom    - for front end SPA routing
        prop-types          - static type checking on Props
        
    - server.js     - boilerplate code
    - models        - define our data
    - routes        - how will we interact with our data
        
        
