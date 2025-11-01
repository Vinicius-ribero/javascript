
//fatiamento de string = criar uma substring a partir de uma porção de outra string string.slice (start, ebd)

//const nomeCompleto = "Vinícius"

// var primeironome = nomeCompleto.slice(0, 4)
// var ultimonome = nomeCompleto.slice(4,8)

// var caractere =  nomeCompleto.slice(0,1)
// var ultimonome = nomeCompleto.slice(-1)

/*const nomeCompleto = "Vinícius"

var primeironome = nomeCompleto.slice(0, nomeCompleto.indexOf(" "))
var ultimonome = nomeCompleto.slice(nomeCompleto.indexOf(" "), + 1 )

console.log(primeironome) 
console.log (ultimonome)
*/

const email = "vinicius@gmail.com"

var usuario = email.slice(0, email.indexOf("@"))
var entensão = email .slice(email.indexOf("@") + 1)

console.log(usuario)
console.log(entensão)