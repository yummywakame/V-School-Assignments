HTTP:
    - hypertext transfer protocol
    - The set of rules used to govern communication between
    web-servers and web-browsers.
    - Pre-defined methods for these interactions, namely (GET, POST, PUT, DELETE)

Client:
    - The browser/system the user is interacting with and using
    to communicate with web-servers

Server:
    - The entry point to the backend.
    - Does 2 jobs, Listens for requests, and eventually sends a response

Express:
    - The JS library we are using to create a server and server routes to 
    handle incoming client HTTP requests.

Request Response Cycle:
    - The cycle of Client's making requests that a server
    will receive to then send a response back to the client.

API
    - Application Programming Interface
    - The functions we write to handle user's requests to a 
    server, get the needed data from the database, and give it
    back to the server to forward to the client.

req:   
    - The Object given to the server that has everything the 
    user is sending/requesting to the server

res:
    - The Object given to the server to configure and 
    eventually send a response

req.params:
    - The object in the request object that has the variables
    the user send in the url paramaters:  `/wizards/:_id`
    - Typically used to send the ID of a resource from the DB
    so that you can GET, PUT, or DELETE to it.
    - A req.param is a part of the url endpoint

req.query:
    - The object in the request object that has key: value pairs
    from the user's query string
    - ex:  `/wizards?isgood=true&maxage=20` would create a 
    req.query object like this: `{ isgood: true, maxage: 20 }`
    - Typically used in a GET All to filter out specific 
    resources from the DB.

middleware:
    - Our entire express server is essentially little middleware
    functions.
    - Middleware is a function that fires 'in-between' other functions,
    such as our `app.use(express.json())` that fires on every request
    before the request hits our routes for handling.
    - Middleware can be givin a `mount path` such as
        ex:  `app.use("/wizards", express.json())` and that would only
        make this middleware run if the request enpoint was to `/wizards`.
    - A Middleware that accepts `(req, res)` must call either `next()` meaning the server is 
    not done with it's processes and to move onto the next function, or it must
    `res.send()` to signify the process is done and to send the response to the 
    client.
    - `app.use(express.json())`: Makes the `req.body` variable from user's requests.
    - `app.use(morgan('dev`)): Gives helpful console.log's on the server side

Relational Database:
    - Ex: SQL, postgres, mySQL
    - Organizing data in tables where every column/row must be filled.
    - Enforces rigidity and consistency in your data by default.
    - Primary key is the ID of the object, 
    - Foriegn ID is the id of another object in the DB the given object relates
    to  (ex:  User and their Todos.)

Non-relational Database:
    - Ex: MongoDB - Organized as a collection of objects (array of json objects)
    - Will accept anything for saving by default (no rigidity)
    - Every resource (object) in a collection (group of similar objects) are given 
    specific id's.

Mongoose:
    - A JS library that helps us with 2 things in regards to working with MongoDB
        - Enforces data rigidity/consistency with Mongoose.Schema/models
        - Helps us query the DB with methods like `.find()`, `.findOne()`, `.save()`

Schema/Model:
    - How we create the Blueprint of what our data should look like when we save it,
    - Also provides a Model variable we can import in our routes to query the DB for
    that model.