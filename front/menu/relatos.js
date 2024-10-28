// Aguarda o carregamento completo do DOM para executar o script
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById("enviar");
    const form = document.getElementById("relatos1");

    if (button) {
        button.onclick = async function(event) {
            event.preventDefault();

            const nome = form.nome.value;
            const titulo = form.titulo.value;
            const relato = form.texto.value;
            const imagem = form.imagem.files[0]; // Seleciona o arquivo de imagem


          
            if (!nome || !titulo || !relato || !imagem) {
                alert("Todos os campos devem ser preenchidos!");
                return;
            }
 
            const formData = new FormData(form)

            // Para debugar o FormData
            for (const [key, value] of formData.entries()) {
                console.log(key, value);
            }

            try {
                const response = await fetch('http://localhost:3003/api/store/relatos', {
                    method: "POST",
                    body: formData
                });

                const content = await response.json();

                if (content.success) {
                    alert("Sucesso!");
                } else {
                    alert("Não foi criado!");
                    console.log(content.sql);
                }
            } catch (error) {
                console.error("Erro na requisição:", error);
                alert("Ocorreu um erro durante o envio. Verifique o console para mais detalhes.");
            }
        };
    } else {
        console.error("Botão não encontrado no DOM.");
    }
});


// Variável para controlar a página atual de relatos carregados
let currentPage = 1;

// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
  loadPosts(currentPage); // Carrega os posts da página inicial

  // Adiciona um evento de clique ao botão "Carregar Mais"
  document.getElementById('loadMoreButton').addEventListener('click', () => {
      currentPage++; // Incrementa a página atual
      loadPosts(currentPage); // Carrega mais posts
  });
});

// Função assíncrona para carregar os posts de uma página específica
async function loadPosts(page) {
  // Faz uma requisição GET para buscar os relatos com base na página
  const response = await fetch(`http://localhost:3003/api/get/relatos?page=${page}`, {
      method: "GET",
      headers: { "Content-type": "application/json;charset=UTF-8" }, // Define o cabeçalho da requisição
  });

  // Converte a resposta em JSON
  let content = await response.json();

  // Verifica se a requisição foi bem-sucedida
  if (content.success) {
      const postContainer = document.getElementById('postContainer'); // Seleciona o container dos posts

      // Itera sobre os dados dos posts recebidos
      content.data.forEach(post => {
          const article = document.createElement('article'); // Cria um elemento <article> para cada post

          const h1 = document.createElement('h1'); // Cria um elemento <h1> para o título
          h1.textContent = post.titulo;  // Define o título do post

          const h2 = document.createElement('h2'); // Cria um elemento <h2> para o nome do autor
          h2.textContent = post.nome; // Define o nome do autor

          const h3 = document.createElement('h3'); // Cria um elemento <h3> para o texto do relato
          h3.textContent = post.texto; // Define o texto do relato

          // Adiciona os elementos criados ao <article>
          article.appendChild(h1);
          article.appendChild(h2);
          article.appendChild(h3);

           // Adiciona o <article> ao container de posts
                      postContainer.appendChild(article);
                    });
                } else {
                    alert(content.message); // Exibe mensagem de erro caso a requisição falhe
                }
            }