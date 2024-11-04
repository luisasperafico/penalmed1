document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById("enviar");
    const form = document.getElementById("relatos1");

    if (button) {
        button.onclick = async function(event) {
            event.preventDefault();

            // Criando o FormData com base no formulário
            const formData = new FormData(form);

            // Para debugar o FormData
            for (const [key, value] of formData.entries()) {
                console.log(key, value);
            }

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
                console.log(content); // Debug: ver resposta da API

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

                    // Opcional: Limpar o formulário após o envio bem-sucedido
                    form.reset();
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

        loadRelatos();
    
        // Função para carregar relatos do servidor
        async function loadRelatos() {
            try {
                const response = await fetch('http://localhost:3003/api/get/relatos', {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                });
    
                const content = await response.json();
                console.log(content); // Verifique o conteúdo no console para confirmar a estrutura dos dados
    
                if (content.success) { // Certifique-se de que a resposta contém "success" e que ele é "true"
                    // Percorre cada relato e o renderiza na página
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
            const relatosContainer = document.getElementById("postContainer"); // Certifique-se de que este elemento existe no HTML para exibir os relatos.
            
            // Criando o HTML do novo relato
            const relatoDiv = document.createElement("div");
            relatoDiv.className = "relato";
            relatoDiv.innerHTML = `
                <h3>${relato.titulo}</h3>
                <p>${relato.texto}</p>
                <p>Por: ${relato.nome}</p>
                ${relato.imagem ? `<img src="/back/uploads/${relato.imagem}" alt="Imagem do relato">` : ''}
            `;
            //A IMAGEM AO SALVAR NÃO VAI A EXTENSÃO, VERIFICAR NO MULTER, UPLOAD ALGO ASSIM
            //ARRUMAR O SRC DA IMG PARA BUSCAR A PASTA UPLOADS + O NOME DA IMAGEM
            relatosContainer.prepend(relatoDiv); // Insere o novo relato no início da lista
        }
    });