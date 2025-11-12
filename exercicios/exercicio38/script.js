//Object = Uma coleção de propriedades e/ou métodos relacionados pode representar objetos do mundo real (pessoas, produtos, lugares). Objeto = {chave:valor
//função()}

const pessoa1 = {
    firstName : "Spongebob", 
    lastName : "Squarepants",
    idade: 30,
    empregado: true,
    digaOlá: function(){console.log("Oi! eu sou BobEsponja")},
    comer: function(){console.log("Eu estou comendo um Hamburguer de siri")},
}

const pessoa2 = {
    firstName : "Patrick", 
    lastName : "Star",
    idade: 42,
    empregado: false,
    digaOlá: () => console.log("Oi, Eu sou o Patrick.."),
    comer: () =>{console.log("Eu estou comendo bife, frango e pizza ")},
}

pessoa1.comer();
pessoa2.comer();


/*console.log(pessoa1.firstName);
console.log(pessoa1.lastName);
console.log(pessoa1.idade);
console.log(pessoa1.empregado);

console.log(pessoa2.firstName);
console.log(pessoa2.lastName);
console.log(pessoa2.idade);
console.log(pessoa2.empregado);
*/



//Explicação
/*
const pessoa1 = {
    firstName : "Spongebob", 
    lastName : "Squarepants",
    idade: 30,
    empregado: true,
    digaOlá: function(){console.log("Oi! eu sou BobEsponja")},
    comer: function(){console.log("Eu estou comendo um Hamburguer de siri")},
}

const pessoa2 = {
    firstName : "Patrick", 
    lastName : "Star",
    idade: 42,
    empregado: false,
    digaOlá: () => console.log("Oi, Eu sou o Patrick.."),
    comer: () =>{console.log("Eu estou comendo bife, frango e pizza ")},
}

pessoa1.comer();
pessoa2.comer();
💬 Linha por linha
1️⃣
js
Copiar código
const pessoa1 = {
— Cria uma constante chamada pessoa1.
O valor dela será um objeto, que começa e termina com { }.

2️⃣
js
Copiar código
firstName : "Spongebob",
— Cria uma propriedade (ou campo) chamada firstName, com o valor "Spongebob".
Isso guarda o primeiro nome da pessoa.

3️⃣
js
Copiar código
lastName : "Squarepants",
— Outra propriedade, o sobrenome (lastName = “Squarepants”).

4️⃣
js
Copiar código
idade: 30,
— Propriedade idade, valor numérico 30.

5️⃣
js
Copiar código
empregado: true,
— Propriedade empregado, com valor booleano (true significa “sim, ele está empregado”).

6️⃣
js
Copiar código
digaOlá: function(){ console.log("Oi! eu sou BobEsponja") },
— Aqui temos um método, ou seja, uma função dentro do objeto.
Quando chamamos pessoa1.digaOlá(), o JavaScript executa essa função e imprime no console:

Copiar código
Oi! eu sou BobEsponja
7️⃣
js
Copiar código
comer: function(){ console.log("Eu estou comendo um Hamburguer de siri") },
— Outro método, que simula uma ação do Bob Esponja.
Quando chamamos pessoa1.comer(), ele mostra no console:

nginx
Copiar código
Eu estou comendo um Hamburguer de siri
8️⃣
js
Copiar código
const pessoa2 = {
— Agora criamos outro objeto, pessoa2, com a mesma estrutura, mas dados diferentes.

9️⃣
js
Copiar código
firstName : "Patrick", 
lastName : "Star",
idade: 42,
empregado: false,
— Mesmo padrão: nome, sobrenome, idade, e empregado (agora false, ou seja, “não está empregado”).

🔟
js
Copiar código
digaOlá: () => console.log("Oi, Eu sou o Patrick.."),
— Aqui o método é criado com arrow function (função de seta).
Funciona igual, mas é uma forma mais curta.
Quando chamamos pessoa2.digaOlá(), imprime:

Copiar código
Oi, Eu sou o Patrick..
11️⃣
js
Copiar código
comer: () => { console.log("Eu estou comendo bife, frango e pizza ") },
— Outro método, também arrow function.
Ao chamar pessoa2.comer(), o console mostra:

nginx
Copiar código
Eu estou comendo bife, frango e pizza
12️⃣
js
Copiar código
pessoa1.comer();
pessoa2.comer();
— Aqui você executa os métodos comer() dos dois objetos.

👉 Resultado no console:

nginx
Copiar código
Eu estou comendo um Hamburguer de siri
Eu estou comendo bife, frango e pizza 
13️⃣ (Comentado)
js
Copiar código
/*console.log(pessoa1.firstName);
console.log(pessoa1.lastName);
console.log(pessoa1.idade);
console.log(pessoa1.empregado);

console.log(pessoa2.firstName);
console.log(pessoa2.lastName);
console.log(pessoa2.idade);
console.log(pessoa2.empregado);
*/
/*Essas linhas estão comentadas (por causa do /* ... */), /*então não são executadas.
Mas se você remover os comentários, elas mostrariam no console os valores individuais de cada propriedade:
   
nginx
Copiar código
Spongebob
Squarepants
30
true
Patrick
Star
42
false
🧠 Resumo geral
Objeto	Propriedade	Valor
pessoa1	firstName	"Spongebob"
lastName	"Squarepants"
idade	30
empregado	true
digaOlá()	mostra "Oi! eu sou BobEsponja"
comer()	mostra "Eu estou comendo um Hamburguer de siri"
pessoa2	firstName	"Patrick"
lastName	"Star"
idade	42
empregado	false
digaOlá()	mostra "Oi, Eu sou o Patrick.."
comer()	mostra "Eu estou comendo bife, frango e pizza "
*/