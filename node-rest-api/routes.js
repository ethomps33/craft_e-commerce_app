const router = require("express").Router();



// Defining a Health-Check Endpoint to ensure the API is Working
router.get("/healthcheck/status", (req, res) => {
    const status = {
        "Status": "Running"
    };
    res.send(status);
});

// Defining an Endpoint for Registering a New User
router.post("/signup", (req, res) => {
    if (!payload.user) {
        const status = {
            "Status" : "400 Bad Request"
        };
        res.send(status);
    };
    const user = payload.user
    req.send(user);

    const status = {
        "Status" : "Created"
    };
    res.send(status);
});

module.exports = router;