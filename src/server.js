const port = 3003;

const express = require('express');
const app = express();
const dataBase = require('./dataBase');

app.use(express.urlencoded({ extended: true }));

app.get('/products', (req, res, next) => {
    res.send(dataBase.getProducts());
});

app.get('/products/:id', (req, res, next) => {
    res.send(dataBase.getProduct(req.params.id));
});

app.post('/products', (req, res, next) => {
    const product = dataBase.saveProduct({
        name: req.body.name,
        price: req.body.price
    });
    res.send(product); // JSON
});

app.put('/products/:id', (req, res, next) => {
    const product = dataBase.saveProduct({
        name: req.body.name,
        price: req.body.price,
        id: req.params.id
    });
    res.send(product); // JSON
});

app.delete('/products/:id', (req, res, next) => {
    const product = dataBase.removeProduct(req.params.id);
    res.send(product); // JSON
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});