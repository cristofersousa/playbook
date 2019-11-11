const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

// get all products
routes.get('/products', ProductController.index);

// save one product
routes.post('/products', ProductController.store);

// get one product by id
routes.get('/products/:id', ProductController.show);

// update one product by id
routes.put('/products/:id', ProductController.update);

// delete one product by id
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;