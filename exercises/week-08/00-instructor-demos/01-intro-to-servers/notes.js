
// RESTful API Architecture 
    // What is RESTful API design?
        // Representational State Transfer

    //   www.myWebsite.com/api/v1/people
            // GET -
            // POST - 

    //   www.myWebsite.com/api/people/3l23d898fD89f
            // PUT
            // DELETE
            // GET ONE

    // What portion of the Request - Response cycle are we working with now?
        // Request =>  We do, the user (Client)
        // Response => Server sends it back

// Vocabulary
    // Collection
        // All entries (people)

    // Resource
        // Singular entry in a DB (person)

    // Base (root url)
        //  www.myWebsite.com/api/v1/

    // Api Endpoint - What part of state (DB) am I making the request to
        // The part that comes AFTER the base url

    // Client
        // We the people, the device being used to make the request.

    // Server
         // Take the order (listen for orders/request)
         // Send the order back (200 - Things are good, ERROR ERROR ERROR)

    // Request Method(s)
        // GET  / GET ONE
        // POST
        // PUT
        // DELETE


// Writing servers is Javascript using Express
    // Setting up server to listen
    // Set up a mock(fake-static) database (for now)
        // Creating _id's before we are using a database
    // Setting up endpoints for request methods(GET, POST, PUT, Delete)



