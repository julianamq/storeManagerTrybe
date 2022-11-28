const express = require('express');

const productsController = require('../controllers/products.controllers');
const validationsName = require('../middlewares/validationName');

const router = express.Router(); 

router.get('/:id', productsController.getProductById);
router.get('/', productsController.getProducts);

router.post('/', validationsName, productsController.registerProducts);
router.put('/:id', validationsName, productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;
