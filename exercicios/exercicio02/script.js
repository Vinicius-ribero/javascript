//variable = um recepiente que armazena um valor
//           comporta-se como se fosse o valor que contém.

//1. declaração  var x ;
// 2. atribuição  x = 100;

//Váriaveis ex:
//var idade = 19;
//var preço = 10.99;
//var mpn = 2.1; //Média de pontos das Notas

/*console.log(typeof preço);
console.log(`Você tem ${idade} anos de idade`);
console.log(`O preço é de ${preço} reais`)
console.log(`Seu mpn é de  ${mpn}`)
*/

//Strings > Uma string é uma sequência de caracteres usada para representar texto sem números ex:

/*var primeiroNome = "vinicius";
var comidaFavorita = "pizza"
var email = "vinicius@gmail.com"

console.log(typeof primeiroNome);
console.log(`Seu nome é ${primeiroNome}`)
console.log(`Você gosta de ${comidaFavorita}`)
console.log(`Seu email é ${email}`)
*/

//Booleans = m JavaScript, booleanos são um tipo de dado primitivo com apenas dois valores possíveis: true (verdadeiro) ou false (falso). Eles são fundamentais para controlar o fluxo do programa em estruturas condicionais como if e while ex:

/*var online = false;
var ParaVenda = true
var estáEstudando = true

console.log( `Vinícius está online: ${online}`)
console.log(`Este carro está para venda:${ParaVenda}`)
console.log(`matriculado:${estáEstudando}`)
*/

var nomeCompleto = "vinicius"
var idade = 19;
var estudante = false

document.getElementById("p1").textContent = `Seu Nome é ${nomeCompleto}`;
document.getElementById("p2").textContent = `Sua idade é de ${19} anos de idade`;
document.getElementById("p3").textContent = `Vinícius está estudando  na escola :${estudante} `