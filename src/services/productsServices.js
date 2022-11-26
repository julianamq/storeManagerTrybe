const productsModels = require('../models/products.model');
const { validateNameCaracteres, verifyProduct } = require('../middlewares/validateRequest');
const { validationIndId } = require('../middlewares/validateJoi');

const getProducts = async () => {
  const products = await productsModels.getProducts();
  return products;
};
const getProductById = async (id) => {
  const product = await productsModels.getProductById(id);
  // console.log(product, 'product service');
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

const updateProduct = async (id, name) => {
  const { type, message } = await validationIndId(); 
  console.log(type, 'type');
  console.log(message, 'message');
  if (type) return { type, message };
  const products = await productsModels.updateProduct(id, name);
 
  if (products < 1) return { type: 'error', message: 'Product not found' };
  console.log(products);
  const updatedProducts = await productsModels.getProductById(id);
  console.log(updatedProducts);
  return { type: null, message: updatedProducts };
};
// const updateProduct = async (id, name) => {
//   const getId = await validateNameCaracteres(name);
//   console.log(getId, ' get id update');
//   if (getId) return getId;   
//   const updatedProducts = await productsModels.getProductById(id);
//   return { type: null, message: updatedProducts };
// };
// console.log(validateProducts, 'validate service');
module.exports = {
  getProducts,
  getProductById,
  registerProduct,
  updateProduct,
};
