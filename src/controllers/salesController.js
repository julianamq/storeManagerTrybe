const salesService = require('../services/sales.services');

const createSales = async (request, response) => {
  const sales = request.body;
  // console.log(sales, 'sales controller');
  const { id, type, message } = await salesService.create(sales);
  // console.log(id);
  if (type) {
    return response.status(404).json({ message });
  }
  return response.status(201).json({ id, itemsSold: sales });
};
const deleteSales = async (request, response) => {
  const { id } = request.params;
  const { type, message } = await salesService.deleteSales(id);
  console.log(type, message, 'type e message');
  if (type) {
    return response.status(404).json({ message: 'Sale not found' });
  }
  return response.status(204).json(message);
};
const getAllSales = async (_request, response) => {
  const message = await salesService.getAllSales();
  // console.log(message, 'mensagem');
  response.status(200).json(message);
};

const getSalesById = async (request, response) => {
  const { id } = request.params;
  const sale = await salesService.getSalesById(id);
  if (!sale || sale.length === 0) {
    return response.status(404).json({ message: 'Sale not found' });
  }
  return response.status(200).json(sale);
};

module.exports = {
  getAllSales,
  getSalesById,
  createSales,
  deleteSales,
};

// seis com ajuda graças a Deus e ao Rubens!!