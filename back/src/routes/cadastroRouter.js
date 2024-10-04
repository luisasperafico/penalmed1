const express = require("express")

const router = express.Router();

const { storeUser } = require('../controller/cadastroController');
//configurar o endpoint (o link com o caminho para cadastro) corretamente
router.post('/usuario/cadastro', storeUser);

module.exports = router;