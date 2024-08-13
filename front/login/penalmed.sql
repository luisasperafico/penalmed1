create database penalmed;

USE penalmed;

CREATE TABLE cadastro(         
    name VARCHAR(255), 
    email VARCHAR(255) NOT NULL UNIQUE, 
    senha VARCHAR(255) NOT NULL
);



SELECT * FROM cadastro;

CREATE TABLE relatos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    texto LONGTEXT,
    titulo VARCHAR(255)
);