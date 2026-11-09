const express = require("express");

const app = express();

app.use(express.json());

app.post("/blog", (req, res) => {
    let title = req.body.title;
    let author = req.body.author;

    res.send("Title: " + title + " | Author: " + author);
});

app.listen(3003, () => {
    console.log("Server running on port 3003");
});