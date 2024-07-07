// Loading Dependencies
const express = require('express');

// Setting up Express to create an App and configure it to parse requests w/ JSON payloads
const app = express ();
app.use(express.json());

// Defining a Server
const PORT = process.env.PORT || 3000;

// Setting up the Server to Listen on a Specified Port
app.listen(PORT, () => { 
    console.log("Server Listening on Port:", port);
});

// Defining a Status Endpoint to ensure the API is Working
app.get("/status", (request, response) => {
    const status = {
        "Status": "Running"
    };
    response.send(status);
});