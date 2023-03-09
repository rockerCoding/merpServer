const mysql = require('mysql2');

function connect() {
  const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'mERP'
  });

  return connection;
}

module.exports = { connect };