// Os parâmetros rest (..rest) permitem que uma função trabalhe com um número variável de argumentos, agrupando-os em um array.

//  spread = expande um array em elementos separados em um array.
/*EX:let pessoa = { nome: "Vinicius", idade: 22 };
let novaPessoa = { ...pessoa, cidade: "São Paulo" };

console.log(novaPessoa);
// Resultado: { nome: "Vinicius", idade: 22, cidade: "São Paulo" }*/


// function geladeiraaberta (...comidas){
//     console.log(comidas)
// }

// function comer(...comidas){
//     return comidas
// }

// const comida1 = "pizza"
// const comida2= "hamburguer"
// const comida3 = "cachorro-quente"
// const comida4 = "sushi"
// const comida5 = "sushi"

// //geladeiraaberta(comida1, comida2, comida3, comida4, comida5)

// const comidas = geladeiraaberta(comida1, comida2 , comida3, comida4, comida5)

// console.log(comidas)

// function soma(...numeros){
//     var resultado = 0
//     for(let numero of numeros){
//         resultado += numero
//     }
//      return resultado
// }

// // console.log(`Seu total é de ${total}`)

// function obtermedia(...numeros){
//     let resultado = 0
//     for(let numero of numeros){
//         resultado += numero
//     }
//      return resultado / numeros.length
// }

// const total = obtermedia(75, 100 , 85 ,90 ,50)

// console.log(total)

//   rest = agrupa elementos separados em uma matriz.

/*EX:let pessoa = { nome: "Vinicius", idade: 22 };
let novaPessoa = { ...pessoa, cidade: "São Paulo" };

console.log(novaPessoa);
// Resultado: { nome: "Vinicius", idade: 22, cidade: "São Paulo" }*/ 

 function combinestrings(...strings){
    return strings.join(" ")
 }

const nomecompleto = combinestrings("Senhor" , "bobesponja", "calça quadrada", "III")

console.log(nomecompleto)