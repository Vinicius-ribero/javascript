// O operador ternário = é um atalho para as instruções if {} e else {}, ajudando a atribuir um valor a uma variável com base em uma condição. Exemplo: `condition ? codeiftrue : codeif false`

/*var idade = 18
var mensagem = idade >= 18 ? "Você é adulto" : "Você é de menor"
console.log(mensagem)
*/

/*var tempo = 9
var saudações = tempo < 12 ? "Bom dia!" : "Boa tarde"
console.log(saudações)*/

/*var estudante = false
var mensagem = estudante ? "Você está estudando" : "Você não está estudando"
console.log(mensagem);*/

var compra = 125
var desconto = compra >= 100 ? 10 : 0
console.log(`Seu total foi de R$${compra - compra * (desconto/100)}`)