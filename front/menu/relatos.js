const formRelato = document.getElementById('form-relato');
const relatosDiv = document.getElementById('relatos');

formRelato.addEventListener('submit', (e) => {
    e.preventDefault();
    const titulo = document.getElementById('titulo').value;
    const nome = document.getElementById('nome').value;
    const imagem = document.getElementById('imagem').files[0];
    const texto = document.getElementById('texto').value;
    
    const relato = {
        titulo,
        nome,
        imagem,
        texto
    };
    
    adicionarRelato(relato);
});

function adicionarRelato(relato) {
    const relatoHTML = `
        <div class="relato">
            <h2>${relato.titulo}</h2>
            <p>Por: ${relato.nome}</p>
            <img src="${URL.createObjectURL(relato.imagem)}" alt="Imagem do relato">
            <p>${relato.texto}</p>
        </div>
    `;
    relatosDiv.innerHTML += relatoHTML;
}