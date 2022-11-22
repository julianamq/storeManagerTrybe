const connection = require('./connection');

const createSales = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales () VALUES ()',

  );
  return insertId;
};
const createRegister = async (saleId, productId, quantity) => {
  await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES(?, ?, ?)',
    [saleId, productId, quantity],
  );
};
const deleteProduct = async (id) => {
  const [{ affectedRows }] = await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return affectedRows;
};

const validateIds = async () => {
  const [getValidIds] = await connection.execute(
    'SELECT id FROM StoreManager.products',
  );

  const arrayValid = getValidIds.map((item) => item.id);
  return arrayValid;
};

module.exports = {
  createSales,
  createRegister,
  validateIds,
  deleteProduct,
};
// criar 
// validar 
// registrar
