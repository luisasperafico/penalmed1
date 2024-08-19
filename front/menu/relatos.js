const btn = document.getElementById('enviar');
const formRelato = document.getElementById("relatos1");
const relatosDiv = document.getElementById('relatos');

btn.onclick = async function(e) {
    
  e.preventDefault();
  const titulo = formRelato.elements['Titulo'].value;
  const nome = formRelato.elements['nome'].value;
  const imagem = formRelato.elements['imagem'].files[0];
  const texto = formRelato.elements['texto'].value;

  const relato = {
    titulo,
    nome,
    imagem,
    texto
  };

   
  const response = await fetch('http://localhost:3003/api/store/relatos', {
    method: "POST",
    headers: {"Content-type": "application/json; chartset=UTF-8"},
    body: JSON.stringify(relato)
});

let content = await response.json();

    if(content.success) {
        alert("Sucesso!")
    } else{
        alert("Não foi criado!")
    console.log(content.sql);
}


  //adicionarRelato(relato);

};

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
  relatosDiv.innerHTML += relatoHTML;
}