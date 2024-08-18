const {Router} = require('express');

const router = Router;

const {storeRelatos,getRelatos}= require('../controller/relatosController');

router.post('/store/relatos', storeRelatos);
router.get('/get/relatos', getRelatos);



module.exports = router;