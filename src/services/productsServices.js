const validateNameProducts = require('../middlewares/validateNameProducts');
const productsModels = require('../models/products.model');

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
  // const validateOfProducts = validateNameProducts(createProductNew);
  // // aqui tá recebendo undefined 
  // console.log(validateOfProducts, 'validação registro'); 
  // if (validateOfProducts) {
  //   console.log(validateOfProducts, 'if'); 
  //   return validateOfProducts;
  // } 
  const products = await productsModels.registerProducts(createProductNew);
  console.log(products, 'services'); // aqui tá retornando 8 e subindo
  const newProductsCreated = await productsModels.getProductById(products);
  return newProductsCreated;
};
module.exports = {
  getProducts,
  getProductById,
  registerProduct,
};
