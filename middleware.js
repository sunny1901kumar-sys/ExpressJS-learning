const express = require("express");
const app = express();

/*app.use((req, res, next) => {
    console.log("Request Method:", req.method);
    console.log("Request URL:", req.url);

    next();
});

app.use((req, res, next) => {
    console.log("Middleware 1");
});

app.use((req, res, next) => {
    console.log("Middleware 2");
    next();
});*/

app.use((req, res, next) => {
    console.log("Middleware");
    next();
});

// middleware se request ko rokna
/*app.use((req, res, next) => {
    res.send("Request stopped here");
});

app.get("/", (req, res) => {
    res.send("Home Page");
});*/

// Authentication Middleware - Maan lo tumhari website par ek /profile route hai. Tum chahte ho ki sirf authorized user hi profile access kar sake.
function checkToken(req, res, next) {
    let token = req.headers.token;

    if (token == "sunny123") {
        next();
    } else {
        res.status(401).send("Unauthorized");
    }
}

app.get("/profile", checkToken, (req, res) => {
    res.send("Welcome to your profile");
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});