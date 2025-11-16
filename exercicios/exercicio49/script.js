//sort() = método usado para classificar elementos de um array no local. classifica elementos como strings em ordem lexicográfica n não alfabética lexicográfica = (alfabeto + números + símbolos) como strings

/*let numeros = [1, 10, 2 ,9,3 ,8 , 4 , 7 ,5, 6];

// numeros.sort((a, b ) => a - b ); ORDEM NUMERADA 1,2,3,4...10

//numeros.sort((a, b ) => b - a ) ORDEM REVERESA 10,9,8,7....1

console.log(numeros)*/


const pessoas = [
  {nome: "Bob Esponja", idade: 30, gpa: 3.0},
  {nome: "Patrick", idade: 37, gpa: 1.5},
  {nome: "LulaMolusco", idade: 51, gpa: 2.5},
  {nome: "Sandy", idade: 27, gpa: 4.0}
];

pessoas.sort((a, b) => a.nome.localeCompare(b.nome));
 
console.log(pessoas)

/*✅ Código
const pessoas = [
  {nome: "Bob Esponja", idade: 30, gpa: 3.0},
  {nome: "Patrick", idade: 37, gpa: 1.5},
  {nome: "LulaMolusco", idade: 51, gpa: 2.5},
  {nome: "Sandy", idade: 27, gpa: 4.0}
];

pessoas.sort((a, b) => b.idade - a.idade);

console.log(pessoas);

✅ O que esse código faz?
1. Cria um array de objetos

Cada objeto representa uma pessoa:

{nome: "Bob Esponja", idade: 30, gpa: 3.0}


Tem 3 propriedades:

nome (string)

idade (número)

gpa (número — como se fosse nota)

2. Ordena (sort) o array de pessoas
pessoas.sort((a, b) => b.idade - a.idade);

✔ O que o .sort() faz?

Ele organiza o array baseado no retorno da função que você passa.

✔ O que significa (a, b) => b.idade - a.idade?

a → um elemento

b → outro elemento para comparar

Quando o sort compara:

➡ Se a conta der POSITIVO, ele troca a ordem.
➡ Se der NEGATIVO, ele mantém a ordem.
➡ Se der ZERO, considera igual.

✔ O que você pediu aqui?

b.idade - a.idade

Isso faz o sort ordenar por:

🔽 Idade do maior para o menor (ordem decrescente)

Exemplo:

51 vem antes de 37
37 vem antes de 30
30 vem antes de 27

3. Exibe o resultado no console
console.log(pessoas)


Vai mostrar o array assim:

[
  {nome: "LulaMolusco", idade: 51, gpa: 2.5},
  {nome: "Patrick", idade: 37, gpa: 1.5},
  {nome: "Bob Esponja", idade: 30, gpa: 3.0},
  {nome: "Sandy", idade: 27, gpa: 4.0}
]

🎯 Está certo?
✔ SIM!

Seu código está correto, bem escrito e funciona perfeitamente.

Ele está ordenando por idade, do mais velho para o mais novo.*/