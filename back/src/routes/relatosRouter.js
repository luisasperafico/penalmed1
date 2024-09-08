// Importa o framework Express para criar e gerenciar rotas de API
const express = require("express");

// Cria um roteador para lidar com as rotas relacionadas aos relatos
const relatosrouter = express.Router();

// Importa as funções do controlador de relatos (armazenar e obter relatos)
const {storeRelatos, getRelatos} = require('../controller/relatosController');

// Define a rota POST para armazenar um novo relato
// Ao acessar '/store/relatos', o Express chama a função 'storeRelatos' do controlador
relatosrouter.post('/store/relatos', storeRelatos);

// Define a rota GET para obter relatos
// Ao acessar '/get/relatos', o Express chama a função 'getRelatos' do controlador
relatosrouter.get('/get/relatos', getRelatos);

// Exporta o roteador para que ele possa ser usado em outras partes da aplicação
module.exports = relatosrouter;
