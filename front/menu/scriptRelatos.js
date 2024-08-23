const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/store/relatos', (req, res) => {
  res.json({ message: 'CORS funcionando corretamente!' });
});

app.listen(3003, () => {
  console.log('Servidor rodando na porta 3003');
});

function adicionarRelato(relato) {
  const imagemSrc = relato.imagem?.src || '';

  const relatoHTML = `
      <div class="relato">
          <h2>${relato.titulo}</h2>
          <p>Por: ${relato.nome}</p>
          ${imagemSrc ? `<img src="${imagemSrc}" alt="Imagem">` : ''}
          <p>${relato.texto}</p>
      </div>
  `;
  document.getElementById('relatosDiv').innerHTML += relatoHTML;
}
