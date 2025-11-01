//Encadeamento de métodos = chamar um método após o outro em uma única linha de código contínua.

// nenhum encadeamento de métodos

/*var usuário = window.prompt("Entre em seu nome de usuario ")

usuário = usuário.trim()
var carta  = usuário.charAt(0)
carta = carta.toUpperCase()

var caracteresextras = usuário.slice(1)
caracteresextras = caracteresextras.toLocaleLowerCase()
usuário = carta + caracteresextras

console.log(usuário) */ 

// encadeamento de métodos Mesma versão porém simplificada

var usuário = window.prompt("Entre em seu nome de usuario ")

usuário = usuário.trim().charAt(0).toUpperCase() + usuário.trim().slice(1).toLocaleLowerCase()

console.log(usuário)