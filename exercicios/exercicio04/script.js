// How to accept user input

// 1. Maneira fácil = window prompt
// 2. Maneira Profissional = Texto HTML

/*
var usuário;

usuário = window.prompt("Qual é o seu nome de usuário?")

console.log(usuário);
*/

var usuário
document.getElementById("Enviar").onclick = function(){
    usuário = document.getElementById ("Texto").value;
    document.getElementById("H1").textContent =`Olá ${usuário}`
}