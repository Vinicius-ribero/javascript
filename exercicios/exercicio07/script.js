//COUNTER PROGAM

const diminuir = document.getElementById("diminuir")
const resetar = document.getElementById("resetar")
const aumentar = document.getElementById("aumentar")
const contagem= document.getElementById("contagem")
var count = 0

aumentar.onclick = function(){
    count++;//aumenta
    contagem.textContent = count
}

diminuir.onclick = function(){
    count--;//diminui
    contagem.textContent = count
}

resetar.onclick = function(){
    count = 0
    contagem.textContent = count
}