const salesModel = require('../models/salesModel');

const validateSalesId = async (sales) => {
  console.log(sales, 'vendas request'); //  tá chegando o  { produtoId:1 , quantity:1 }
  const validateById = await salesModel.validateIds();
  console.log(validateById, 'validate by id'); // tá chhegando 1,2,3,4 ....a quantidade de id já criado 
  const validateSaleId = sales.map((sale) => validateById.includes(sale.productId)); // agora os dois existem 
  console.log(validateSaleId, 'validateSaleId ');
  return validateSaleId.every((sale) => sale === true);
};
module.exports = validateSalesId;