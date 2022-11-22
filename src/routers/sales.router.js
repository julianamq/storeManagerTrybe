const express = require('express');
const salesController = require('../controllers/salesController');

const { checkQuantityOfSales,
  validationProductValiation } = require('../middlewares/validateSales');

const router = express.Router();

router.post('/', checkQuantityOfSales, validationProductValiation,
  salesController.createSales);

module.exports = router;