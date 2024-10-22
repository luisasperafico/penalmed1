const express = require("express")

const router = express.Router();

const { storeUser,  } = require('../controller/cadastroController')
module.exports = router;

/**
 * @swagger
 * /cadastro/register:
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
//router.post('/cadastro/register', storeCadastro);


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

router.post('/usuario/cadastro', storeUser);

