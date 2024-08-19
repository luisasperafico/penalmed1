const express = require("express")

const router = express.Router();

const {storeRestaurante} = require('../controller/restauranteController');

router.post('/store/restaurante', storeRestaurante);

module.exports = router; 

