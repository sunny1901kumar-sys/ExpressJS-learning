
const express = require("express");

const app = express();

app.get("/search", (req, res) => {
    let title = req.query.title;
    let author = req.query.author;

    res.send("Title: " + title + " | Author: " + author);
});

app.listen(3001, () => {
    console.log("Server running at http://localhost:3001");
});
