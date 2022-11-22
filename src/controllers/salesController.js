const salesService = require('../services/sales.services');

const createSales = async (request, response) => {
  const sales = request.body;
  // console.log(sales);
  const { id, type, message } = await salesService.create(sales);
  // console.log(id);
  if (type) {
    return response.status(404).json({ message });
  }
  return response.status(201).json({ id, itemsSold: sales });
};
const deleteProduct = async (request, response) => {
  const { id } = request.params;
  const { type, message } = await salesService.deleteProduct(id);
  if (type) {
    return response.status(404).json({ message: 'Sale not found' });
  }
  return response.status(204).json(message);
};
 
module.exports = {
  createSales,
  deleteProduct,
};

// seis com ajuda graças a Deus e ao Rubens!!