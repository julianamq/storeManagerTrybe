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

module.exports = {
  getProducts,
  getProductById,
};
