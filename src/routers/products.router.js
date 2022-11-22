const express = require('express');

const productsController = require('../controllers/products.controllers');
const validationsName = require('../middlewares/validationName');

const router = express.Router(); 

router.get('/:id', productsController.getProductById);
router.get('/', productsController.getProducts);

router.post('/', validationsName, productsController.registerProducts);

module.exports = router;
