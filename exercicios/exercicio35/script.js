//.reduce() = Reduzir os elementos de uma matriz a um único valor.

//👉 Math.max() é uma função do JavaScript que retorna o maior número entre os valores passados como argumento.

/* const preços = [5, 30 ,10 ,25 , 15 ,20];

 const total = preços.reduce(soma);

 console.log(`$${total.toFixed(2)}`)

 function soma(acumulador ,elemento){
    return acumulador +  elemento
 } 

Padrão de conta do resultado U$ 105 = 5 + 30 = 35 + 10 = 45 45 + 25 = 70 70 + 15 = 85 85 + 20 = $105  */

const notas = [75 , 50 , 90, 80 , 65 , 95];

const máximo = notas.reduce(obterMax);
const minímo = notas.reduce(obterMin);

console.log(minímo);

function obterMax( acumulador, elemento){
    return Math.max(acumulador, elemento);
}

//Pega a pontuação máxima das notas = 95 

function obterMin( acumulador, elemento){
    return Math.min(acumulador, elemento);
}

//Pega a pontuação miníma das notas = 50
