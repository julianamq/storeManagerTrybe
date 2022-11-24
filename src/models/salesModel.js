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
const getAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT ss.id AS saleId, ss_p.product_id AS productId, ss_p.quantity, ss.date
    FROM StoreManager.sales_products AS ss_p 
    INNER JOIN StoreManager.sales AS ss ON ss.id = ss_p.sale_id
    ORDER BY ss.id, productId;`,
  );
  return result;
};

const getSalesById = async (id) => {
  const [result] = await connection.execute(
    `SELECT ss.date, ss_p.product_id AS productId, ss_p.quantity
    FROM StoreManager.sales_products AS ss_p
    INNER JOIN StoreManager.sales AS ss ON ss.id = ss_p.sale_id
    WHERE ss.id = ?
    ORDER BY ss.id, productId;`,
    [id],
  );
  return result;
};
module.exports = {
  getAllSales,
  getSalesById,
  createSales,
  createRegister,
  validateIds,
  deleteProduct,
};
// criar 
// validar 
// registrar
