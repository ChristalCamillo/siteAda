// IF nome && email forem diferentes de vazio (preenchidos), POST
// ELSE peça a usuaria que preencha todos os campos
// volte a tentar enviar

var nome = document.getElementById("nome").value
var email = document.getElementById("email").value

if (nome != "" && email != "") {
    alert("Tudo certo!")

} else {
    alert("Preencha nome e email para receber as novidades!")
}