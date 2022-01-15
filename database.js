const mysql = require('mysql2/promise');

//#region mysql database connection
var connection = { 
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PWD,
    database: process.env.DB,
    waitForConnections: true
  };
  const pool = mysql.createPool(connection);

  async function query(sql, params) {
    const [rows, fields] = await pool.execute(sql, params);
  
    return rows;
  }
  
  module.exports = {
    query
  }