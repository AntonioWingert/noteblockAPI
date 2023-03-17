const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER_SQL,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.MYSQL_PORT,
});

module.exports = connection;