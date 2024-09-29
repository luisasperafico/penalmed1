const express = require("express")

const router = express.Router();
const { storeUser } = require('../controller/cadastroController')

router.post('/usuario/cadastro', storeUser);

module.exports = router;