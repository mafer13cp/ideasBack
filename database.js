const mysql = require('mysql2/promise');

//#region mysql database connection
var connection = { 
    host: 'remotemysql.com',
    user: 'CbN8P9BIlq',
    password: 'etkjsmy5CS',
    database: 'CbN8P9BIlq',
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