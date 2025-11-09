const diminuir = document.getElementById("diminuir");
const resetar = document.getElementById("resetar");
const aumentar = document.getElementById("aumentar");
const contagem = document .getElementById("contagem");
var count = 0 //Cria uma varivel de contar 

aumentar.onclick = function(){
    count++; //Faz a função aumentar
    contagem.textContent = count
}

diminuir.onclick = function(){
    count--; //Faz a função diminuir
    contagem.textContent = count
}

resetar.onclick = function(){
    count= 0; //Faz a função resetar a 0 
    contagem.textContent =count
}