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

// FAZER UMA FUNÇÃO PARA PROCESSAR OS DADOS TIPO:
// async function loadPosts(page) {
//     try {
//         const response = await fetch(`http://localhost:3003/api/get/relatos?page=${page}`, {
//             method: "GET",
//             headers: { "Content-Type": "application/json" }
//         });

//         const content = await response.json();

//         if (content.success) {
//             // Processar os resultados
//             // Criar os innerHTML necessários
//         } else {
//             alert(content.message);
//         }
//     } catch (error) {
//         console.error("Erro na requisição:", error);
//         alert("Ocorreu um erro ao carregar os relatos.");
//     }
// }
