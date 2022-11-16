// ele vai servir para fazer as requisições. 
const productsService = require('../services/productsServices');

const STATUS_OK = 200;
const HTTP_404 = 404;

const getProducts = async (request, response) => {
  const products = await productsService.getProducts();
  return response.status(STATUS_OK).json(products);
};

const getProductById = async (request, response) => {
  const product = await productsService.getProductById(request.params.id);
  if (product.message) {
    return response.status(HTTP_404).json(product);
  }
  return response.status(STATUS_OK).json(product);
};
module.exports = {
  getProducts,
  getProductById,
};
