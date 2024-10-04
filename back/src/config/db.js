const mysql = require("mysql2");
//configurar o .env corretamente
const dotenv = require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'penalmed',
  port: 3306
});

connection.connect(function(err) {
  if (err) {
      throw err;
  } else {        
      console.log("Mysql Connected!");
  }
});

module.exports = connection;