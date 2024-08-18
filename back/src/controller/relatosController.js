const connection = require('../config/db')
require('dotenv').config();

 async function storeRelato (request, response) {
    const params = Array(
        request.body.nome,
        request.body.texto,
        request.body.imagem,
        request.body.titulo
    )
    
    const query = "INSERT INTO relatos (nome, endereco, imagem, telefone) VALUES (?,?,?,?)";
    
    connection.query(query, params, (err, results) => {
        if(results) {
            response.status(200).json({
                success: true,
                message: "Sucesso!",
                data: results
            })
        } else {
            response.status(400).json({
                success: false,
                message: "Erro!",
                sql: err,
            })
        }
    })
    }

    async function getRelatos( request, response) {
    const query = "SELECT * FROM relatos"; 

    connection.query(query, (err, results) => {
        if(results){
            response.status(200).json({
                success: true,
                message: "Sucesso",
                data: results
            })
        } else{
            response.status(400).json({
                success: false,
                message: "Erro!",
                sql: err
            })
        }
    })
}

module.exports = {
  storeRelato,
  getRelatos

};