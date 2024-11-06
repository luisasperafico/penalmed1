document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById("enviar");
    const form = document.getElementById("relatos1");

    if (button) {
        button.onclick = async function(event) {
            event.preventDefault();

            // Criando o FormData com base no formulário
            const formData = new FormData(form);

            // Verifica se todos os campos estão preenchidos
            if (!formData.get('nome') || !formData.get('titulo') || !formData.get('texto') || !formData.get('imagem')) {
                alert("Todos os campos devem ser preenchidos!");
                return;
            }

            try {
                const response = await fetch('http://localhost:3003/api/store/relatos', {
                    method: "POST",
                    body: formData
                });

                const content = await response.json();
                if (content.success) {
                    alert("Sucesso!");

                    // Lê a imagem com FileReader para renderizar no navegador
                    const file = formData.get('imagem');
                    const reader = new FileReader();

                    reader.onload = function(event) {
                        // Chama a função para renderizar o relato na página com a URL da imagem carregada
                        renderRelato({
                            titulo: formData.get('titulo'),
                            texto: formData.get('texto'),
                            nome: formData.get('nome'),
                            imagem: event.target.result // URL da imagem carregada
                        });
                    };
                    reader.readAsDataURL(file);

                    // Limpar o formulário após o envio bem-sucedido
                    form.reset();
                } else {
                    alert("Não foi possível criar o relato!");
                    console.log(content.sql);
                }
            } catch (error) {
                console.error("Erro na requisição:", error);
                alert("Ocorreu um erro durante o envio. Verifique o console para mais detalhes.");
            }
        };
    } else {
        console.error("Botão 'enviar' não encontrado no DOM.");
    }

    // Carrega os relatos quando a página é aberta
    loadRelatos();

    // Função para carregar relatos do servidor
    async function loadRelatos() {
        try {
            const response = await fetch('http://localhost:3003/api/get/relatos', {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });

            const content = await response.json();

            if (content.success) {
                content.data.forEach(relato => {
                    renderRelato(relato);

                });
            } else {
                alert("Erro ao carregar relatos: " + content.message);
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            alert("Ocorreu um erro ao carregar os relatos.");
        }
    }

    // Função para adicionar o relato na página
    function renderRelato(relato) {
        const relatosContainer = document.getElementById("postContainer");

        // Criação do HTML do novo relato
        const relatoDiv = document.createElement("div");
        relatoDiv.className = "relato";
        relatoDiv.innerHTML = `
            <h3>${relato.titulo}</h3>
            <p>${relato.texto}</p>
            <p>Por: ${relato.nome}</p>
            ${relato.imagem ? `<img src="/back/uploads/${relato.imagem}" alt="Imagem do relato">` : ''}
            <button id="editar" type="button" onclick="editarPost()">Editar</button>
            <button id="deletar" type="button" onclick="deletarPost()">Deletar</button>
        `;
        relatosContainer.prepend(relatoDiv); // Insere o novo relato no início da lista
    }

    // Função para pré-visualizar imagem antes do envio
    document.getElementById('imagem').addEventListener('change', function (event) {
        const previewContainer = document.getElementById('previewContainer');
        previewContainer.innerHTML = ''; // Limpa as prévias anteriores

        const files = event.target.files;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();

            reader.onload = function (e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.width = '1px';
                img.style.margin = '2px';
                previewContainer.appendChild(img);
            };

            reader.readAsDataURL(file);
        }
    });

});

function editarPost(){
    //aqui irá fazer um fetch para o endpoint criado no controller e router chamando para o PUT
    //fazer a alteração dos valores com alert
}