const express = require('express');

const productsController = require('../controllers/products.controllers');
const validateNameProducts = require('../middlewares/validateNameProducts');

const router = express.Router(); 

router.get('/', productsController.getProducts);
router.post('/', validateNameProducts, productsController.registerProduct);
router.get('/:id', productsController.getProductById);

module.exports = router;
