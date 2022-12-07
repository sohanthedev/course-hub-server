const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

const Port = process.env.Port || 5000;



app.get("/", (req, res) => {
    console.log(req)
    res.send("api link: /products")
})

products = require("./Data/Data.json");

app.get("/products", (req, res) => {
    res.send(products);
})

app.get("/products/:id", (req, res) => {
    id = req.params.id
    singleItem = products?.find((p)=> p.id==id);
    res.send(singleItem);
    if (!singleItem) {
        res.send("No Data Found");
    }
})


app.listen(Port, () => {
    console.log("Listenin on port ", Port);
})