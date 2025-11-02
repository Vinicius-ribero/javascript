//loop while = execute algum código enquanto houver alguma condição

// var usuario = ""

// while(usuario === "" || usuario === null){
//     usuario = window.prompt(`Digite seu Nome`)
// }

// console.log(`Olá ${usuario}`)

//DO
// var usuario 

//  do{
//     usuario = window.prompt(`Digite seu Nome`)
// }while(usuario === "" || usuario === null)

// console.log(`Olá ${usuario}`)

var logado = false
var usuario
var senha

while(!logado){
    usuario = window.prompt(`Digite seu nome de usuario`)
    senha = window.prompt(`Digite sua senha`)
    
    if(usuario === "nomedeusuario" && senha === "minhasenha"){
        logado = true
        console.log("Você está logado!")
    }else{
        console.log("seu nome de usuario ou senha estão incorretos!tente novamente")
    }
}


