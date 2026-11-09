
const express = require("express");
const router = express.Router();

app.use("/blogs", blog);
// GET - All Blogs
router.get("/", (req, res) => {
    res.send("All Blogs");
});

// GET - Single Blog
router.get("/:id", (req, res) => {
    res.send("Blog ID: " + req.params.id);
});

// POST - Create Blog
router.post("/", (req, res) => {
    res.send("New Blog Created");
});

// PUT - Update Blog
router.put("/:id", (req, res) => {
    res.send("Blog Completely Updated");
});

// PATCH - Update Blog Partially
router.patch("/:id", (req, res) => {
    res.send("Blog Partially Updated");
});

// DELETE - Delete Blog
router.delete("/:id", (req, res) => {
    res.send("Blog Deleted");
});

module.exports = router;

