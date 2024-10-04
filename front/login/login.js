async function cadastrar(event){ 
    event.preventDefault();

    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

     const data = {name , email , password} 
     console.log(data)

     const response = await fetch('http://localhost:3003/usuario/cadastro', {
        method: "POST",
        headers: {"Content-Type":"application/js"},
        body: JSON.stringify(data)
    });
}

// Espera o DOM ser carregado antes de executar o código
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona os elementos do DOM necessários
    var btnSignin = document.querySelector("#signin");
    var btnSignup = document.querySelector("#signup");
    var body = document.querySelector("body");

    // Adiciona um ouvinte de evento para o botão de login
    btnSignin.addEventListener("click", function () {
        // Altera a classe do body para "sign-in-js"
        body.className = "sign-in-js";
        // Esconde o conteúdo da primeira seção
        document.querySelector('.first-content').style.display = 'none';
        // Exibe o conteúdo da segunda seção
        document.querySelector('.second-content').style.display = 'flex';
    });

    // Adiciona um ouvinte de evento para o botão de registro
    btnSignup.addEventListener("click", function () {
        // Altera a classe do body para "sign-up-js"
        body.className = "sign-up-js";
        // Exibe o conteúdo da primeira seção
        document.querySelector('.first-content').style.display = 'flex';
        // Esconde o conteúdo da segunda seção
        document.querySelector('.second-content').style.display = 'none';
    });

    // Adiciona um ouvinte de evento para o formulário de login
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Previne o comportamento padrão de envio do formulário
        // Obtém os valores dos campos de email e senha do formulário
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        console.log('Login:', { email, password });

        // Envia uma requisição POST para o endpoint '/login' com os dados do formulário
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }) // Converte os dados para JSON
        })
        .then(response => response.text()) // Converte a resposta para texto
        .then(data => console.log(data)) // Exibe os dados da resposta no console
        .catch(error => console.error('Error:', error)); // Captura e exibe erros no console
    });

    // Adiciona um "ouvinte" de evento para o formulário de registro
    document.getElementById('registerForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Previne o comportamento padrão de envio do formulário
        // Obtém os valores dos campos de nome, email e senha do formulário
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        console.log('Register:', { name, email, password });

        // Envia uma requisição POST para o endpoint '/register' com os dados do formulário
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password }) // Converte os dados para JSON
        })
        .then(response => response.text()) // Converte a resposta para texto
        .then(data => console.log(data)) // Exibe os dados da resposta no console
        .catch(error => console.error('Error:', error)); // Captura e exibe erros no console
    });
});