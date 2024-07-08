// Loading Dependencies
const Express = require("express");

// Setting up Express to create an App and configure it to parse requests w/ JSON payloads
const app = Express();
app.use(Express.json());

// Defining a Server
const PORT = process.env.PORT || 8080;

// Setting up the Server to Listen on a Specified Port
app.listen(PORT, () => {
    console.log("Server Listening on Port:", PORT);
});

// Defining a Status Endpoint to ensure the API is Working
app.get("/status", (request, response) => {
    const status = {
        "Status": "Running"
    };
    response.send(status);
    console.log("Response Sent.");
});