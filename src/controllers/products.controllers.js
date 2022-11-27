// ele vai servir para fazer as requisições. 
const productsService = require('../services/productsServices');

const getProducts = async (request, response) => {
  const products = await productsService.getProducts();
  return response.status(200).json(products);
};

const getProductById = async (request, response) => {
  const product = await productsService.getProductById(request.params.id);
  if (!product) {
    return response.status(404).json({ message: 'Product not found' });
  }
  return response.status(200).json(product);
};

const registerProducts = async (request, response) => {
  const { name } = request.body;
  const product = await productsService.registerProduct(name);
 // (Rubens) 
  // console.log(product, 'controller');// também está imprimindo o { id: 9, name: 'Produto1' }
  if (product.type) {
 return response.status(422).json({
    message: product.message,
  }); 
} //  a chaves é para tornar objeto
   return response.status(201).json(product);
};

const updateProduct = async (request, response) => {
  const { id } = request.params;
  const { name } = request.body;
  const lengthName = name.length;
  // checar o nome antes ajuda a não armazenar informações desnecessárias. * Rubens
  if (lengthName < 5) {
    return response.status(422)
    .json({ message: '"name" length must be at least 5 characters long' });
  }
  // destruturação
  const message = await productsService.updateProduct(id, name);
  console.log(message, 'mensagem update'); // tem que usar o id ***
 // erro !message ela nunca vai estar vazia. Por isso usar o message.type
  if (message.type) {
    return response.status(404).json({ message: 'Product not found' });
  }
  return response.status(200).json({ id, name });
};
module.exports = {
  getProducts,
  getProductById,
  registerProducts,
  updateProduct,
};
