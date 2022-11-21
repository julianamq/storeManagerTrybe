const connection = require('./connection');

const getSales = async () => {
  console.log('test');
  const [result] = await connection.execute(
    `SELECT ss.id AS saleId, ss_p.product_id AS productId, ss_p.quantity, ss.date
    FROM StoreManager.sales_products AS ss_p 
    INNER JOIN StoreManager.sales AS ss ON ss.id = ss_p.sale_id
    ORDER BY ss.id, productId;`,
  );
  console.log(result);
  return result;
};

module.exports = {
  getSales,
};
