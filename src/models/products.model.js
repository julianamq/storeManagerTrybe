// usa as conexões do workbench
const connection = require('./connection');

const getProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM products;');
  return result;
};

// criar uma nova função que vai  buscar o produto pelo ID, model só vou buscar, recebe o id por parametro
// duas destruturação de array - a primeira é pra pega o retorno da quiery e o segundo é pra pegar das linha 
const getProductById = async (id) => {
  const [[result]] = await connection
    .execute('SELECT * FROM StoreManager.products WHERE id = ? ;', [id]);
  return result;
};

// const productsRouter = async () => {
  
// };

module.exports = {
  getProducts,
  getProductById,
};