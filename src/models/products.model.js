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

const registerProducts = async (nome) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [nome],
  );
  // console.log(insertId, 'insert id');
  return insertId;
};
const updateProduct = async (id, name) => {
  const [result] = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?',
    [name, id],
  );
  // console.log(result);
  return result;
};
const deleteProduct = async (id) => {
  const [{ affectedRows }] = await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return affectedRows;
};
module.exports = {
  getProducts,
  getProductById,
  registerProducts,
  updateProduct,
  deleteProduct,
};