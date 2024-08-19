const connection = require('../config/db')
const dotenv = require('dotenv').config();

async function storeRestaurante(request, response) {
    const params = Array(
        request.body.nome,
        request.body.endereco,
        request.body.imagem,
        request.body.telefone
    )
    const query = 'INSERT INTO restaurantes(nome, endereco, imagem, telefone) VALUES(?, ?, ?, ?)';

    connection.query(query, params, (err, results) => {
        if(results){
            response.status(200).json({
                success: true,
                message: "Sucesso",
                data: results
            })
        } else {
            response.status(400).json({
                success: false,
                message: "Erro!",
                sql: err
            })
        }
    })
}

module.exports= {
    storeRestaurante
}
