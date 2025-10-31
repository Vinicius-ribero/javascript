//RANDOM NUMBER GENERATOR = Gerador de Números aleatorios
//Random = número aleatorio
/*

const min = 50
const max = 100

var randoNum = Math.floor (Math.random() * (max-min)) + min

console.log(randoNum)

*/

const botao = document.getElementById("botao")
const label1 = document.getElementById("label1")
const label2 = document.getElementById("label2")
const label3 = document.getElementById("label3")
const min = 1 
const max = 6
var randomNum1
var randomNum2
var randomNum3

botao.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min
    randomNum2 = Math.floor(Math.random() * max) + min
    randomNum3 = Math.floor(Math.random() * max) + min
    label1.textContent = randomNum1
    label2.textContent = randomNum2
    label3.textContent = randomNum3
}