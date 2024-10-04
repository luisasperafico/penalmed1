const express = require("express")

const router = express.Router();
<<<<<<< HEAD

const { storeUser } = require('../controller/cadastroController');
//configurar o endpoint (o link com o caminho para cadastro) corretamente
=======
const { storeUser } = require('../controller/cadastroController')

>>>>>>> 13145dd5702f493e41ffbbc9508388c727737ad8
router.post('/usuario/cadastro', storeUser);

module.exports = router;