const express = require("express");

const app = express();

// const blog = require("./blog");

// app.use(express.json());

// app.use("/blogs", blog);

// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });

// HTTP status code
/*app.get("/user", (req, res) => {
    let id = req.query.id;

    if (id == 1) {
        res.status(200).send("User found");
    }
    else {
        res.status(404).send("User not found");
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
}); */




// Express Error Handling
/*app.get("/product/:id", (req, res, next) => {
    try {
        let id = req.params.id;

        if (id == 1) {
            res.status(200).send("Product found");
        }
        else {
            throw new Error("Something went wrong");
        }
    }
    catch (error) {
        next(error);
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(500).send("Internal Server Error");
});

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});*/



// REST API - CRUD Operation
// GET AND POST API

app.use(express.json());

// starting data
let products =[
    {id: 1, name: "Laptop", price: 50000},
    {id: 2, name: "Mouse", price: 500}
];

// GET - All products
app.get("/products", (req, res) => {
    res.status(200).json(products);
});

// POST- Add new product
app.post("/products", (req, res) =>{
    let newProduct = req.body;

    products.push(newProduct);
    res.status(201).json(newProduct);
});

// PUT - Update product
app.put("/products/:id", (req, res) => {
    let id = req.params.id;

    let product = products.find((p) => p.id == id);

    if (product) {
        product.name = req.body.name;
        product.price = req.body.price;

        res.status(200).json(product);
    }
    else {
        res.status(404).send("Product not found");
    }
});

app.patch("/products/:id", (req, res) => {
    let id = req.params.id;

    let product = products.find((p) => p.id == id);

    if (product) {
        if (req.body.name) {
            product.name = req.body.name;
        }

        if (req.body.price) {
            product.price = req.body.price;
        }

        res.status(200).json(product);
    } else {
        res.status(404).send("Product not found");
    }
});

// DELETE - Remove product
app.delete("/products/:id", (req, res) => {
    let id = req.params.id;

    let index = products.findIndex((p) => p.id == id);

    if (index != -1) {
        products.splice(index, 1); // index → kis position se delete karna hai.1 → kitna element delete karna hai.

        res.status(200).send("Product deleted");
    }
    else {
        res.status(404).send("Product not found");
    }
});

app.set("json spaces", 4);
app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});



