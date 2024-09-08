document.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await fetch('http://localhost:3003/api/ger/relatos');
      const result = await response.json();
  
      if (result.success) {
        const restaurantesList = document.querySelector('.restaurantes-list');
  
        result.data.forEach((relato) => {
          const card = document.createElement('div');
          card.className = 'restaurante-card';
  
          const img = document.createElement('img');
          img.src = relato.imagem;
  
          const infoDiv = document.createElement('div');
          infoDiv.className = 'info';
  
          const nome = document.createElement('h2');
          nome.textContent = relato.nome;
  
          const titulo = document.createElement('h3');
          titulo.textContent = relato.titulo;
  
          const texto = document.createElement('p');
          texto.textContent = relato.texto;
  
          infoDiv.appendChild(nome);
          infoDiv.appendChild(titulo);
          infoDiv.appendChild(texto);
  
          card.appendChild(img);
          card.appendChild(infoDiv);
  
          restaurantesList.appendChild(card);
        });
      } else {
        console.error("Erro", result.sql);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  });