//Os métodos de strings permitem manipular e trabalhar com texto (cadeias de caracteres).

//console.log(usuário.charAt(1)) = Exibe o caractere de uma letra através do número selecionado

//console.log(usuário.indexOf("V")) = Exibe o número da letra é selecionada 

//console.log(usuário.lastIndexOf("i")) = Exibe o número da ultima letra selecionada 

//console.log(usuário.length) = Exibe todo comprimento da variavel ex: Vínicius = 8  

//console.log(usuário.trim()) = Remove os espaços em Branco 

//console.log(usuário.toUpperCase()) = Exibe as letras da variavel usuario em maisculas = VINÍCIUS

//console.log(usuário.toLowerCase() = Exibe as letras da variavel usuario em minusculas = vinícius

//console.log(usuário.repeat(3)) = Repete a variavel ao número colocado

/*var usuário = "Vinícius"

var resultado = usuário.startsWith("V")

if(resultado){
    console.log("Seu nome de Usuário não pode comecar com ' " )
}else {
    console.log(usuário)
} Tem a função de fazer com que a variavel  comece com certa letra*/

/*var usuário = "ViníciusV"

var resultado = usuário.endsWith("V")

if(resultado){
    console.log("Seu nome de Usuário não pode terminar com 'V" )
}else {
    console.log(usuário)
}
Tem a função de fazer com que a variavel  termine com certa letra* */

/*var usuário = "Vinícius"

var resultado = usuário.includes(" ")

if(resultado){
    console.log("Seu nome de Usuário não pode terminar com ''" )
}else {
    console.log(usuário)
}*/



// var telefone = "123-456-7890"

// telefone = telefone.replaceAll("/","-")

// console.log(telefone) Retira ou coloca barras e traço

/*var telefone = "123-456-7890"

 telefone = telefone.padStart(20,"0")

 console.log(telefone)  Adicona 0 ou outros simbolos  ao incio dos números*/

 var telefone = "123-456-7890"

telefone = telefone.padEnd(20,"0")

console.log(telefone) 



