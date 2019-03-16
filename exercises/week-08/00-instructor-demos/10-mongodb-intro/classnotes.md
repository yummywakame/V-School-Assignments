Use latest version of Homebrew to install MongoDB
https://coursework.vschool.io/installing-mongodb-and-postgresql/

> brew install mongodb
> brew services start mongodb

>mongod (restarts the server)

to get into the shell
> mongo
to exit out of the shell
CTRL+C

MongoDB Compass
https://www.mongodb.com/download-center/
Visual representation of the database

Mongoose:
- library for connecting to MongoDB and connecting to it from Node, instead of using the terminal.
- Helps us write document (Resource)    Schemas (Blueprints or Models)
- This is what enforces rigidity similar to a relational DB
- It gives us methods to query our DB with
- Connects to our DB