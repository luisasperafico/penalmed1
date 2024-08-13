const router = require('express').Router();

const { storeUser } = require('../controller/cadastroController')

router.post('/usuario/cadastro', storeUser);

module.exports = router;