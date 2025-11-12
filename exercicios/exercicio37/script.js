//arrow functions = função, ideal para funções simples que você usa apenas uma vez (parâmetros) => algum código ]

/*const Olá = (nome, idade) => {console.log(`Olá ${nome}`)
                        console.log(`Você está com  ${idade} anos  `) };

Olá("Vinícius", 19);*/ 

// setTimeout(() => console.log("Olá"), 3000) 

//COM MAP FILTER E REDUCE

const números = [1, 2,  3 ,4 ,5 ,6];

const quadrado = números.map((element) => Math.pow(element, 2));
const cubo = números.map((element) => Math.pow(element, 3));
const par = números.filter((element) => element % 2 === 0);
const impar = números.filter((element) => element % 2 !== 0);
const total = números.reduce((soma, element) => soma + element )


console.log(total)





/* Explicação 

const números = [1, 2,  3 ,4 ,5 ,6];

const quadrado = números.map((element) => Math.pow(element, 2));
const cubo = números.map((element) => Math.pow(element, 3));
const par = números.filter((element) => element % 2 === 0);
const impar = números.filter((element) => element % 2 !== 0);
const total = números.reduce((soma, element) => soma + element )

console.log(total)
Explicação linha a linha
const números = [1, 2, 3 ,4 ,5 ,6];

Cria uma constante chamada números e atribui um array com os elementos 1, 2, 3, 4, 5, 6.

Observação: nomes de variáveis podem ter caracteres Unicode (como o ú), então números é um identificador válido em JavaScript.

O array em si pode ser modificado (por exemplo, números.push(7) funciona), mas não podemos reatribuir números = [...] porque é const.

const quadrado = números.map((element) => Math.pow(element, 2));

.map() cria um novo array aplicando a função a cada elemento do array original.

Aqui a função é uma arrow function (element) => Math.pow(element, 2) que retorna element elevado ao quadrado.

Resultado: quadrado será o array com os quadrados de cada número.

Valor de quadrado: [1, 4, 9, 16, 25, 36]

const cubo = números.map((element) => Math.pow(element, 3));

Mesma ideia do map anterior, mas agora eleva ao cubo (Math.pow(element, 3)).

Resultado: cubo é o array dos cubos.

Valor de cubo: [1, 8, 27, 64, 125, 216]

const par = números.filter((element) => element % 2 === 0);

.filter() cria um novo array contendo apenas os elementos que fazem a condição ser true.

A condição element % 2 === 0 verifica se o resto da divisão por 2 é zero → número par.

Resultado: par contém apenas os pares do array.

Valor de par: [2, 4, 6]

const impar = números.filter((element) => element % 2 !== 0);

Filtra os elementos cuja condição element % 2 !== 0 é true → números ímpares.

Resultado: impar contém apenas os ímpares.

Valor de impar: [1, 3, 5]

const total = números.reduce((soma, element) => soma + element )

.reduce() reduz o array a um único valor, aplicando a função acumuladora a cada elemento.

A função (soma, element) => soma + element soma o acumulador soma com o element.

Importante detalhe: você não passou um valor inicial para o acumulador. Quando não passa, o reduce usa o primeiro elemento do array como soma inicial e começa a iterar a partir do segundo elemento.

Vamos calcular passo a passo (digit-by-digit recomendado):

início: soma = 1 (primeiro elemento), element = 2 → 1 + 2 = 3

próxima iteração: soma = 3, element = 3 → 3 + 3 = 6

próxima: soma = 6, element = 4 → 6 + 4 = 10

próxima: soma = 10, element = 5 → 10 + 5 = 15

próxima: soma = 15, element = 6 → 15 + 6 = 21

Valor de total: 21

Observação: se números fosse um array vazio [], chamar reduce sem valor inicial causaria um erro. Para ser seguro, é comum passar 0 como valor inicial:

js
Copiar código
const total = números.reduce((soma, element) => soma + element, 0);
Assim soma começa em 0 e a soma funciona mesmo se o array estiver vazio.

console.log(total)

Imprime o valor de total no console. No caso deste array, vai mostrar 21.

Resumo final (valores das variáveis)
números → [1, 2, 3, 4, 5, 6]

quadrado → [1, 4, 9, 16, 25, 36]

cubo → [1, 8, 27, 64, 125, 216]

par → [2, 4, 6]

impar → [1, 3, 5]

total → 21 (impresso no console)

Dicas rápidas
Para elevar ao quadrado/ao cubo você também pode usar o operador **:

js
Copiar código
const quadrado = números.map(e => e ** 2);
const cubo = números.map(e => e ** 3);
Use valor inicial no reduce para evitar erros com arrays vazios:

js
Copiar código
const total = números.reduce((soma, e) => soma + e, 0);
Se quiser ver cada etapa no console, adicione console.log dentro das funções (útil pra debugar).

 */ 