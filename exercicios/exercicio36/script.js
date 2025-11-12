//function declaration = Define um bloco de código reutilizável que executa uma tarefa específica.


 /*function olá(){
     console.log("olá")
 } 

setTimeout(olá, 3000); 


//const numbers = [1, 2, 3, 4, 5,6]
const squares = numbers.map(square)

console.log(squares);

function square(element){
    return Math.pow(element, 2 )
}

FORMA PADRÃO / Declaration*/
 
//Function expression = uma forma de definir funções como valores ou variáveis.

/* const olá = function(){
     console.log("olá")
 }

 olá(); */

// setTimeout(function(){
//     console.log("hello")
//   },  3000);

/*const numbers = [1, 2, 3, 4, 5,6]
const squares = numbers.map(function (element){
    return Math.pow(element, 2 ) //Eleva os números ao quadrado 
})
const cubes = numbers.map(function cube(element){
    return Math.pow(element, 3)//Eleva os números ao cubos
})

const par = numbers.filter(function(element){
        return element % 2 === 0;//Pega os números 
})

const impar= numbers.filter(function(element){
        return element % 2 !== 0;//Pegas os numeros impars
})

const total = numbers.reduce(function(acumulador, element){
    return acumulador + element;
})

console.log(total);*/


/*
1-Retornos de chamada em operações assíncronas
2-Funções de ordem superior
3-Fechamentos
4-Ouvintes de eventos
*/

const hello = function(){
    console.log("Hello");
}

setTimeout(function(){
    console.log("Goodbye");
}, 5000);






/*
o que cada função faz, o valor final de cada variável e uma versão alternativa com arrow functions no final. Vamos lá!

Código que você mandou
const numbers = [1, 2, 3, 4, 5,6]
const squares = numbers.map(function (element){
    return Math.pow(element, 2 )
})
const cubes = numbers.map(function cube(element){
    return Math.pow(element, 3)
})

const par = numbers.filter(function(element){
        return element % 2 === 0;
})

const impar= numbers.filter(function(element){
        return element % 2 !== 0;
})

const total = numbers.reduce(function(acumulador, element){
    return acumulador + element;
})

console.log(total);

Explicação passo a passo

const numbers = [1, 2, 3, 4, 5,6]
— Cria um array chamado numbers com os números 1 a 6. Esse array será usado nas operações seguintes.

const squares = numbers.map(function (element){ return Math.pow(element, 2 ) })
— map cria um novo array transformando cada elemento do array original.
— Para cada element do numbers, a função Math.pow(element, 2) calcula element elevado ao quadrado (potência 2).
— Resultado: squares será o array dos quadrados de cada número.

Valor de squares: [1, 4, 9, 16, 25, 36]
(porque 1²=1, 2²=4, 3²=9, 4²=16, 5²=25, 6²=36)

const cubes = numbers.map(function cube(element){ return Math.pow(element, 3) })
— Outra chamada ao map, agora usando uma named function expression (function cube(element) — o nome cube é opcional aqui).
— Math.pow(element, 3) eleva element ao cubo.
— Resultado: cubes será o array dos cubos de cada número.

Valor de cubes: [1, 8, 27, 64, 125, 216]
(1³=1, 2³=8, 3³=27, 4³=64, 5³=125, 6³=216)

const par = numbers.filter(function(element){ return element % 2 === 0; })
— filter cria um novo array contendo só os elementos que passam na condição (a função retorna true).
— element % 2 === 0 verifica se o resto da divisão por 2 é zero → número par.
— Resultado: par contém só os números pares.

Valor de par: [2, 4, 6]

const impar= numbers.filter(function(element){ return element % 2 !== 0; })
— Mesma ideia do filter, mas aqui a condição é !== 0 → números ímpares.
— Resultado: impar contém só os números ímpares.

Valor de impar: [1, 3, 5]

const total = numbers.reduce(function(acumulador, element){ return acumulador + element; })
— reduce “reduz” o array para um único valor. Ele chama a função para cada elemento, mantendo um acumulador.
— Na primeira chamada (quando não passa um valor inicial), acumulador começa com o primeiro elemento do array (1) e element é o segundo (2).
— A função soma acumulador + element e devolve o novo acumulador para a próxima iteração.

Vamos somar passo a passo (digit-by-digit):

início: acumulador = 1 (primeiro elemento), element = 2 → 1 + 2 = 3

próximo: acumulador = 3, element = 3 → 3 + 3 = 6

próximo: acumulador = 6, element = 4 → 6 + 4 = 10

próximo: acumulador = 10, element = 5 → 10 + 5 = 15

próximo: acumulador = 15, element = 6 → 15 + 6 = 21

Valor de total: 21

console.log(total);
— Imprime 21 no console.

Resumo dos valores finais

numbers → [1, 2, 3, 4, 5, 6]

squares → [1, 4, 9, 16, 25, 36]

cubes → [1, 8, 27, 64, 125, 216]

par → [2, 4, 6]

impar → [1, 3, 5]

total → 21 (impressão no console)

Dicas rápidas / variações modernas

Você pode usar arrow functions para deixar o código mais curto:

const squares = numbers.map(x => Math.pow(x, 2));
const cubes = numbers.map(x => Math.pow(x, 3));
const par = numbers.filter(x => x % 2 === 0);
const impar = numbers.filter(x => x % 2 !== 0);
const total = numbers.reduce((acc, x) => acc + x);


Outra forma de elevar ao quadrado/ao cubo: x ** 2 ou x ** 3 (operador exponenciação):

const squares = numbers.map(x => x ** 2);
const cubes = numbers.map(x => x ** 3); */