let button = document.getElementById("enviar")

button.onclick = async function() {
    let nome = document.getElementById("nome").value;
    let endereco = document.getElementById("endereco").value;
    let imagem = document.getElementById("imagem").value;
    let telefone = document.getElementById("telefone").value;
    
    let dados = {nome, endereco, imagem, telefone}
    
    const response = await fetch('http://localhost:3000/api/store/restaurante', {
        method: "POST",
        headers: {"Content-type": "application/json; chartset=UTF-8"},
        body: JSON.stringify(dados)
    });
    
    let content = await response.json();
    
        if(content.success) {
            alert("Sucesso!")
        } else{
            alert("Não foi criado!")
        console.log(content.sql);
    }
    }