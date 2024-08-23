
const express = require('express');
const mysql = require('mysql2');
require('dotenv').config(); // Para carregar variáveis de ambiente do .env

const app = express();

// Configuração da conexão MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'seu_usuario',
  password: process.env.DB_PASSWORD || 'sua_senha',
  database: process.env.DB_DATABASE || 'nome_do_banco'
});

// Conectando ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados');
});

// Iniciando o servidor
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
