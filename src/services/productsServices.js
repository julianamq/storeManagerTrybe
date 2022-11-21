const productsModels = require('../models/products.model');
const { validateNameCaracteres } = require('./validateRequest');

const getProducts = async () => {
  const products = await productsModels.getProducts();
  return products;
};
const getProductById = async (id) => {
  const product = await productsModels.getProductById(id);
  if (!product) {
    return { message: 'Product not found' };
  }
  return product;
};
// no service tenho que chamar pelo novo produto , ter uma validação 
const registerProduct = async (createProductNew) => {
  const validateProducts = validateNameCaracteres(createProductNew);

  if (validateProducts) return validateProducts;
  const products = await productsModels.registerProducts(createProductNew);
// aqui tá imprimindo 6,7,8 
  const newProductsCreated = await productsModels.getProductById(products);
  // console.log(newProductsCreated, 'new');
  return newProductsCreated;
};
module.exports = {
  getProducts,
  getProductById,
  registerProduct,
};
