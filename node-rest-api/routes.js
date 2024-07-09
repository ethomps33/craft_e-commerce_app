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
        res.status(400).json({
            status: false,
            error: {
                message: 'Bad Request. Not able to Register User with the provided Credentials.',
            },
        })
    };
    const user = payload.user
    req.send(user);

    const status = {
        "Status" : "Created"
    };
    res.send(status);
});
//  Defining Route to Login



module.exports = router;