const express = require("express");
const app = express();

// Middleware
app.use((req, res, next) => {
    console.log("Request received at: " + req.url);
    next();
});

// route
app.get("/", (req, res) => {
    res.send("Home Page");
});
app.get("/about", (req, res) => {
    res.send("This is about page");
});

app.listen(3002, () => {
    console.log("Server running on port 3002");
});