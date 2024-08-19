document.addEventListener('DOMContentLoaded', async() => {
    const response = await fetch('http//localhost:3003/api/ger/relatos');
    const result = await response.json();

    // console.log(result);
    
    if (result.success) { 
        const restaurantesList = document.querySelector('.restaurantes-list');
        result.data.forEach(
            restaurante => {
                const card = document.createElement('div');
                card.className = 'restaurante-card';
                
                const img = document.createElement('img');
                img.src = restaurante.imagem;
                
                const infoDiv = document.createElement('div');
                infoDiv.className = 'info';
               
                const nome = document.createElement('h2');
                nome.textContent = restaurante.nome

                const endereco = document.createElement('p');
                endereco.textContent = restaurante.endereco

                const telefone = document.createElement('p');
                telefone.textContent = restaurante.telefone 
                
                infoDiv.appendChild(nome);
                infoDiv.appendChild(titulo);
                infoDiv.appendChild(texto);

                card.appendChild(img);
                card.appendChild(infoDiv);
                
                restaurantesList.appendChild(card)
          })
        } else {
            console.log("Erro", result.sql)
        }});