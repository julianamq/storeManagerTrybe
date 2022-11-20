// const validateNameProducts = (request, response, next) => {
//   const nomeProduct = request.body.name;
//   console.log(nomeProduct, 'nome produto');
//   if (!nomeProduct) {
//     return response.status(400)
//       .json({ message: '"name" is required' });
//   }
//   next();
// };

// module.exports = validateNameProducts;