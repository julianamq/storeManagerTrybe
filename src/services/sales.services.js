// validação do banco do dados
const salesModel = require('../models/salesModel');
const validateSalesId = require('./validateSales');
// chamar o validateSalesId 
const create = async (sales) => {
  const salesIsValid = await validateSalesId(sales);
  if (!salesIsValid) return { type: 'error', message: 'Product not found' };
  // console.log(salesIsValid, 'sale is valid');
  const saleId = await salesModel.createSales();
  // promisse all faz com que o map transforme o retorno do map em promisse. 
  await Promise.all(
    sales.map(async (sale) => {
      await salesModel.createRegister(
        saleId, sale.productId, sale.quantity,
      );
    }),
  );
  return { id: saleId, items: sales };
};
const deleteId = async (id) => {
  const products = await salesModel.deleteProduct(id);
  if (!products) return { type: 'error', message: 'Sale not found' };
  return { type: null };
};
module.exports = {
  create,
  deleteId,
};