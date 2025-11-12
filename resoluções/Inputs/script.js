var usuário
document.getElementById("Enviar").onclick = function(){
    usuário = document.getElementById("texto").value;
    document.getElementById("H1").textContent = `Olá ${usuário}`
}