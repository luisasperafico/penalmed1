const connection = require('../config/db')
const dotenv = require('dotenv').config();

async function storeRelatos(request, response) {
    const { nome, texto, titulo } = request.body; // Acesse diretamente do body
    const imagem = request.file; // O arquivo de imagem estará em request.file

    const params = [nome, texto, imagem ? imagem.filename : null, titulo];

    console.log("params", params); // Para verificar os dados

    const query = "INSERT INTO relatos (nome, texto, imagem, titulo) VALUES (?,?,?,?)";

    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(200).json({
                success: true,
                message: "Sucesso!",
                data: results
            });
        } else {
            response.status(400).json({
                success: false,
                message: "Erro!",
                sql: err,
            });
        }
    });
}

async function getRelatos(request, response) {
    const query = "SELECT * FROM relatos";

    connection.query(query, (err, results) => {
        if (err) { // Verifique se há erro na consulta
            console.error("Erro na consulta:", err);
            return response.status(500).json({
                success: false,
                message: "Erro ao buscar relatos",
                error: err
            });
        }

        // Verifique se há resultados
        if (results.length > 0) {
            response.status(200).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response.status(404).json({
                success: false,
                message: "Nenhum relato encontrado."
            });
        }
    });
}

module.exports = {
    storeRelatos,
    getRelatos

};