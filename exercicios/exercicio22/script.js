// Função: uma seção de código reutilizável
// Declare o código uma vez e use-o sempre que quiser. Chame a função para executar esse código.

// function felizAniversário(usuario, idade){
//     console.log("Feliz Aniversário!")
//     console.log("Feliz Aniversário!")
//     console.log("Feliz Aniversário!")
//     console.log(`Feliz aniversário, querido(a) ${usuario}!`)
//     console.log("Feliz Aniversário!")
//     console.log(`Você tem ${idade} anos de idade `)
// }

// felizAniversário("Vínicius", 19)
// felizAniversário("BobEsponja", 30)
// felizAniversário("Patrick", 37)

// function adicionar(x, y){
//     var resultado = x + y
//     return resultado

// }

//  console.log( adicionar(2,3))

//Versão simplificada 

// function adicionar(x, y){
//     var resultado = x + y
//     return x+y

// }
// function subtração(x, y ){
//     return x-y
// }

// function multiplicação(x,y){
//     return x*y
// }
// function Divisão(x,y){
//     return x/y
// }

//  console.log( Divisão(2,3))

//Versão mais complexa
// function adicionar(x, y){
//     var resultado = x + y
//     return x+y

// }
// function subtração(x, y ){
//     return x-y
// }

// function multiplicação(x,y){
//     return x*y
// }
// function Divisão(x,y){
//     return x/y
// }

// function par(number){
//     if( number % 2 === 0 ){
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log(par(12))


//Versao coplexa simplficada 
// function adicionar(x, y){
//     var resultado = x + y
//     return x+y

// }
// function subtração(x, y ){
//     return x-y
// }

// function multiplicação(x,y){
//     return x*y
// }
// function Divisão(x,y){
//     return x/y
// }

// function par(number){
//     return number % 2 === 0 ? true : false
// }

// console.log(par(12))


function adicionar(x, y){
    var resultado = x + y
    return x+y

}
function subtração(x, y ){
    return x-y
}

function multiplicação(x,y){
    return x*y
}
function Divisão(x,y){
    return x/y
}

function par(number){
    return number % 2 === 0 ? true: false
}
function emailValidado(email) {
    return email.includes("@") ? true : false
}

console.log(emailValidado("vinicius@gmail.com"));
console.log(emailValidado("elonMusk.com"));
console.log(emailValidado("zuckenberg@metacom"));


 
