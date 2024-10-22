// Aguarda o carregamento completo do DOM para executar o script
document.addEventListener('DOMContentLoaded', function() {
  // Seleciona o botão de envio e o formulário de relatos
  const button = document.getElementById("enviar");
  const form = document.getElementById("relatos1");

  // Verifica se o botão existe
  if (button) {
    // Define a função para o evento de clique no botão
    button.onclick = async function(event) {
      event.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)

      // Captura os valores dos campos do formulário
      const nome = form.nome.value;
      // const titulo = form.titulo.value
      const relato = form.texto.value;
      const imagem = form.imagem.files[0]; // Seleciona o arquivo de imagem

      // Cria um objeto com os dados capturados
      const dados = { nome, titulo, relato };

      try {
        // Cria um objeto FormData para incluir a imagem e os dados do formulário
        const formData = new FormData();
        formData.append("imagem", imagem);
        formData.append("nome", nome);
        formData.append("titulo", titulo);
        formData.append("relato", relato);

        // Faz uma requisição para enviar os dados ao backend (POST)
        const response = await fetch('http://localhost:3003/api/store/relatos', {
          method: "POST",
          headers: { "Content-type": "application/json;charset=UTF-8" }, // Cabeçalho da requisição
          body: JSON.stringify(dados) // Envia os dados como JSON
        });

        // Converte a resposta em JSON
        const content = await response.json();

        // Verifica se a operação foi bem-sucedida
        if (content.success) {
          alert("Sucesso!"); // Exibe mensagem de sucesso
        } else {
          alert("Não foi criado!"); // Exibe mensagem de erro
          console.log(content.sql); // Exibe erro no console
        }
      } catch (error) {
        // Captura erros na requisição
        console.error("Erro na requisição:", error); // Exibe erro no console
        alert("Ocorreu um erro durante o envio. Verifique o console para mais detalhes."); // Alerta de erro
      }
    };
  } else {
    console.error("Botão não encontrado no DOM."); // Erro se o botão não for encontrado
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
