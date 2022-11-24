// faz validação do que vem do endpoint (tudo que envia do thunder)

const checkQuantityOfSales = (request, response, next) => {
  const sales = request.body;
  // console.log(sales);
  const validationQuantity = sales.map((sale) => sale.quantity);
  // console.log(validationQuantity, 'quantidade validação d vendas');
  const verificationQuantity = validationQuantity.some((q) => q === undefined);
  // console.log(verificationQuantity, 'quantidade');
  if (verificationQuantity) {
    return response.status(400).json({ message: '"quantity" is required' });
  }

  const checkQuantity = validationQuantity.some((item) => item < 1);
  if (checkQuantity) {
    return response.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  return next();
};
const validationProductValiation = (request, response, next) => {
  const sales = request.body;
  const productIdValidation = sales.map((sale) => sale.productId);
  // console.log(productIdValidation, 'validação de produto');
  const verificationProduct = productIdValidation.some((q) => q === undefined);
  // console.log(verificationProduct, 'validation produto und');
  if (verificationProduct) {
    return response.status(400).json({ message: '"productId" is required' });
  }

  return next();
};

module.exports = {
  checkQuantityOfSales, validationProductValiation,
};

// ajuda de Laura dias 