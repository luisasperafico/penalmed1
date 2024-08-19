const connection = require("../config/db");
const dotenv = require('dotenv').config();

async function storeUser(request, response) {  
    let params = Array(
      request.body.name,
      request.body.email,
      request.body.password
    );
  
    let query = "INSERT INTO cadastro(name, email, senha) values(?,?,?)";
  
    connection.query(query, params, (err, results) => {
      console.log(err, results)
      if (results) {
        response
          .status(200)
          .json({
            success: true,
            message: "Cadastro realizado com sucesso!",
            data: results
          })
      } else {
        response
          .status(400)
          .json({
            success: false,
            message: "Cadastro não realizado com sucesso!",
            data: err
          })
      }
    })
  }
  
  module.exports = {
    storeUser
  }