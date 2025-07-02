// IF nome && email forem diferentes de vazio (preenchidos), POST
// ELSE peça a usuaria que preencha todos os campos
// volte a tentar enviar
document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

// nome = document.getElementById("nome").value
// email = document.getElementById("email").value
// telefone = document.getElementById("telefone").value

function validaFormulario() {

    if (document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != "") {
        alert("Prontinho! você receberá as novidades por email.")
    } else {
        alert("Por favor, preencha os campos nome e email.")
    }
}