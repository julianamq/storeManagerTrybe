const connection = require('./connection');

const createSales = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales () VALUES ()',

  );
  return insertId;
};
module.exports = {
  createSales,
};
// criar 
// validar 
// registrar
