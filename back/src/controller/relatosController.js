// Importa a configuração de conexão com o banco de dados e as variáveis de ambiente
const connection = require('../config/db')
const dotenv = require('dotenv').config();

// Função assíncrona para armazenar relatos
async function storeRelatos(request, response) {

    // Parâmetros capturados do corpo da requisição (nome, relato, imagem, título)
    const params = Array(
        request.body.nome,
        request.body.relato,
        request.body.imagem,
        request.body.titulo
    )

    // Exibe uma mensagem de log para indicar o ponto do código
    console.log("aqui")
    
    // Consulta SQL para inserir dados na tabela 'relatos'
    const query = "INSERT INTO relatos (nome, titulo, imagem, texto) VALUES (?,?,?,?)";
    
    // Executa a consulta no banco de dados
    connection.query(query, params, (err, results) => {
        // Se houver resultados, retorna sucesso
        if(results) {
            response.status(200).json({
                success: true,
                message: "Sucesso!",
                data: results
            })
        } 
        // Caso contrário, retorna erro
        else {
            response.status(400).json({
                success: false,
                message: "Erro!",
                sql: err, // Inclui o erro na resposta
            })
        }
    })
}

// Função assíncrona para recuperar relatos paginados
async function getRelatos(request, response) {
    // Define o número da página e o limite de itens por página (3 neste caso)
    const page = parseInt(request.query.page) || 1;
    const limit = 3;
    const offset = (page - 1) * limit; // Calcula o deslocamento com base na página atual
    
    // Consulta SQL para buscar relatos, ordenados por data de criação e paginados
    const query = `
      SELECT * 
      FROM relatos
      ORDER BY data_criacao DESC 
      LIMIT ${limit} OFFSET ${offset};
    `;
    
    // Executa a consulta no banco de dados
    connection.query(query, (err, results) => {
        // Se houver resultados, retorna sucesso com os dados
        if (results) {
            response
              .status(201)
              .json({
                success: true,
                message: `Posts da página ${page} recuperados com sucesso`,
                data: results
              });
        } 
        // Caso contrário, retorna erro
        else {
            console.error('Erro na consulta SQL:', err); // Exibe o erro no console
            
            response
              .status(400)
              .json({
                success: false,
                message: 'Erro ao recuperar posts',
                data: err // Inclui o erro na resposta
              });
          }
        });
}

// Exporta as funções para que possam ser usadas em outros arquivos
module.exports = {
  storeRelatos,
  getRelatos
};
