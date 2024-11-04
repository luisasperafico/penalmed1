const express = require("express");
const multer = require('multer');
// const upload = multer({ dest: 'uploads/' }); // Define o diretório onde os arquivos serão salvos
const crypto = require("crypto")
const path = require('path')

const router = express.Router();
const { storeRelatos, getRelatos } = require('../controller/relatosController');

var storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function (req, file, cb) {
      crypto.pseudoRandomBytes(16, function (err, raw) {
        if (err) return cb(err)
  
        cb(null, raw.toString('hex') + path.extname(file.originalname))
      })
    }
  })
  
  var upload = multer({ storage: storage })

/**
 * @swagger
 * /tasks/register:
 *  post:
 *    summary: Cadastra uma nova tarefa
 *    responses:
 *      200:
 *        description: Sucesso!
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
*/
router.post('/store/relatos', upload.single('imagem'), storeRelatos); // Use upload.single aqui

/**
 * @swagger
 * /tasks/list:
 *  get:
 *    summary: Retorna todas as tarefas
 *    responses:
 *      200:
 *        description: Uma lista de tarefas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
*/
router.get('/get/relatos', getRelatos);

module.exports = router;
