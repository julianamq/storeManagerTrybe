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
  if (!product) {
    return response.status(HTTP_404).json({ message: 'Product not found' });
  }
  return response.status(STATUS_OK).json(product);
};

const registerProducts = async (request, response) => {
  const { name } = request.body;
  const product = await productsService.registerProduct(name);
 // (Rubens)
  // console.log(product, 'controller');// também está imprimindo o { id: 9, name: 'Produto1' }
  if (product.type) return response.status(422).json({ message: product.message }); //  a chaves é para tornar objeto
   return response.status(201).json(product);
};
module.exports = {
  getProducts,
  getProductById,
  registerProducts,
};
