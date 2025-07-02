// IF nome && email forem diferentes de vazio (preenchidos), POST
// ELSE peça a usuaria que preencha todos os campos
// volte a tentar enviar

var nome = document.getElementById("nome").value
var email = document.getElementById("email").value
// var telefone = document.getElementById("telefone").value

document.getElementById("botaoEnviar").addEventListener("click", formValidation)

function formValidation() {
    if ((nome != "" && email != "")) {

        alert("legal")

    } else {
        alert("bad")
    }
}