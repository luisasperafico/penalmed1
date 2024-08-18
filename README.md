DROP DATABASE  IF EXISTS penalmed;
create database penalmed;




USE penalmed;

DROP TABLE IF EXISTS cadastro;

CREATE TABLE cadastro(
    nome VARCHAR(255), 
    email VARCHAR(255) NOT NULL UNIQUE, 
    senha VARCHAR(255) NOT NULL
);


ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
FLUSH PRIVILEGES;

SELECT * FROM cadastro;

CREATE TABLE relatos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    texto LONGTEXT,cadastro
    imagem varchar(255)
    titulo VARCHAR(255)
);
CREATE TABLE chat (
  id INT AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  message TEXT NOT NULL,
  PRIMARY KEY (id)
);

SELECT * FROM chat;
