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


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Relatos</title>
    <link rel="stylesheet" href="relatos.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</head>
<body>
    <header>
        <img src="logo.png" alt="logo" class="logo">

        <nav class="menu-lateral">
            <div class="btn-expandir">
                <i class="bi bi-list"></i>
            </div>
            <ul>
                <li class="item-menu">
                    <a href="../homepage/home.html"><span class="icon"><i class="bi bi-house"></i></span>
                        <span class="txt-link">Home</span>
                    </a>
                </li>
                <li class="item-menu">
                    <a href="../menu/chat.html"><span class="icon"><i class="bi bi-chat-dots"></i></span>
                        <span class="txt-link">Comunidade PENALMED</span>
                    </a>
                </li>
                <li class="item-menu">
                    <a href="../menu/leis.html"><span class="icon"><i class="bi bi-book"></i></span>
                        <span class="txt-link">Leis e artigos</span>
                    </a>
                </li>
            </ul>
        </nav>

        <div class="auth-buttons">
            <a href="file:///C:/Users/User/OneDrive/%C3%81rea%20de%20Trabalho/PENALMED/login/login.html" class="btn">Cadastrar</a>
            <a href="file:///C:/Users/User/OneDrive/%C3%81rea%20de%20Trabalho/PENALMED/login/login.html" class="btn">Entrar</a>
        </div>
    </header>

    <section class="main-container">
        
        <div class="container">
            <p>Ler relatos</p>
            <main id="postContainer">
                
            </main>
            <button id="loadMoreButton">Ler mais</button>
        </div>
    
        <main class="container2">
            <p>Postar relato</p>
            <form id="relatos1">
                <label for="Titulo">Título</label>
                <input type="text" id="titulo">
                
                <label for="nome">Nome</label>
                <input type="text" id="nome">
                
                <label for="imagem">Adicionar Imagem</label>
                <input type="file" id="imagem" name="imagem">
                
                <label for="texto">Escreva seu relato aqui</label>
                <textarea id="texto"></textarea>
    
                <button id="enviar" type="button">Enviar meu relato</button>
            </form>
            <div id="relatosDiv"></div>
        </main>
    </section>

    



    <script src="relatos.js"></script>
  
</body>
</html>

