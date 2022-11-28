// validação do banco do dados
const salesModel = require('../models/salesModel');
const validateSalesId = require('./salesValidate');
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
  // console.log({ id: saleId, items: sales }, 'console create');
  return { id: saleId, items: sales };
};
const getAllSales = async () => {
  const sales = await salesModel.getAllSales();
  // console.log(sales, 'sale');
  return sales;
};
const deleteSales = async (id) => {
  const products = await salesModel.deleteSales(id);

  if (!products) return { type: 'error', message: 'Sale not found' };
  return { type: null };
};

const getSalesById = async (id) => {
  const salesId = await salesModel.getSalesById(id);
  return salesId;
};

module.exports = {
  getAllSales,
  getSalesById,
  create,
  deleteSales,
};