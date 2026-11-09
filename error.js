const express = require("express");
const app = express();

// Home Route
app.get("/", (req, res, next) => {
    let error = new Error("Something went wrong");

    next(error);
});

// 404 Middleware
app.use((req, res, next) => {
    let error = new Error("Route not found");

    error.status = 404;

    next(error);
});

// Custom Error Handling Middleware
app.use((err, req, res, next) => {
    let statusCode = err.status || 500;

    res.status(statusCode).send(err.message);
});

app.listen(3002, () => {
    console.log("Server running on port 3002");
});