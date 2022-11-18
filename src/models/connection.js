const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQL_PORT || 3306,
  user: 'root',
  password: process.env.MYSQL_PASS || '1509',
  database: 'StoreManager',
});
module.exports = connection;