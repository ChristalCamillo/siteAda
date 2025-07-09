// IF nome && email forem diferentes de vazio (preenchidos), POST
// ELSE peça a usuaria que preencha todos os campos
// volte a tentar enviar
document.getElementById("botaoEnviar").addEventListener("click", validarFormulario)

let nome = document.getElementById('nome')
let email = document.getElementById('email')
let telefone = document.getElementById('telefone')

function validarFormulario() {
    if (nome.value != "" && email.value != "" && telefone.value != '') {
        alert('Prontinho! Você receberá as novidades por e-mail.')
    } else {
        alert('Por favor preencha todos os campos!')
    }
}