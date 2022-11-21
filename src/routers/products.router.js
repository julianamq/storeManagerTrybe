const express = require('express');

const productsController = require('../controllers/products.controllers');
const validationsName = require('../middlewares/validationName');

const router = express.Router(); 

router.get('/', productsController.getProducts);

router.post('/', validationsName, productsController.registerProducts);

router.get('/:id', productsController.getProductById);

module.exports = router;
