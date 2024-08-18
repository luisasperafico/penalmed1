const {Router} = require('express'); 

const router = Router();

const {storeRestaurante} = require('../controller/relatosController');

router.post('/store/restaurante', storeRestaurante);

module.exports = router; 

