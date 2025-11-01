//Operadores lógicos usados ​​para combinar ou manipular valores booleanos (verdadeiro ou falso).


//          E = &&
//          OU = ||
//          NÃO = !

// && 
// const temperatura = 5

// if(temperatura > 0 && temperatura <= 30){
//     console.log("A temperatura está boa")
// }else{
//     console.log("A temperatura está ruim")
// } O Operador && seria igual a "e" para colocar igual está no exemplo que serve para verficar mais de uma condição e outra 



//  const temperatura = 5

// if(temperatura <=0 || temperatura >= 30){
//     console.log("A temperatura está ruim")
// }else{
//     console.log("A temperatura está boa")
// } O Operador || tem como sua função e verificar se apenas uma das variveis for verdadeira exemplo: if(temperatura <=0 || temperatura >= 30) diferente do && 

const ensolarado= true

if(!ensolarado){
    console.log("O dia está nublado ")
}else{
    console.log("O dia está ensolarado")
}