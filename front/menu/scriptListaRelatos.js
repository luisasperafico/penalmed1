if (button) {
    button.onclick = async function() {
        let nome = document.getElementById("nome")?.value;
        let titulo = document.getElementById("titulo")?.value;
        let imagem = document.getElementById("imagem")?.value;

        
            let dados = {nome, titulo, imagem};

            try {
                const response = await fetch('http://localhost:3003/api/store/relatos', {
                    method: "POST",
                    headers: {"Content-type": "application/json; charset=UTF-8"},
                    body: JSON.stringify(dados)
                });

                let content = await response.json();

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