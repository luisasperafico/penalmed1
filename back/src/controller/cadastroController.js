const connection = require("../config/db");

async function storeUser(request, response) {  
    let params = Array(
      request.body.name,
      request.body.email,
      request.body.password
    );
  
    let query = "INSERT INTO users(name, email, password) values(?,?,?)";
  
    connection.query(query, params, (err, results) => {
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