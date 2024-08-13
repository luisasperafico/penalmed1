let  button = document.getElementById("enviar")

button.click = async function() {
    let nome = document.getElementById('Nome').value;
    let email = document.getElementById('Email').value;
    let nome_de_usuario  = document.getElementById('Nome de Usuário ').value;
    let senha = document.getElementById('Senha').value;

    let dados = {nome,email,nome_de_usuario, senha}
    const response = await fetch ('https://localhost: 3003/api/store/penalmed',{
        method: "POST",
        headers: {"Content-type": "application/json;chatset=UTF-8"},
        body: JSON.stringify(dados)

    })
    
    let content = await response.json();
    if(content.sucess){
        alert("Sucesso!")
    } else {
        alert("Não foi criado!")
        console.log(content.sql);
    }
}