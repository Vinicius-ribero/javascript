const botao = document.getElementById("botao");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");

const min = 0;
const max = 9;
var randomNum1;
var randomNum2;
var randomNum3;

botao.onclick = function(){
    randomNum1 = Math.floor(Math.random()* max) + min;
    randomNum2 = Math.floor(Math.random()* max) + min;
    randomNum3 = Math.floor(Math.random()* max) + min;
    label1.textContent = randomNum1
    label2.textContent = randomNum2
    label3.textContent = randomNum3
}


















// //🧩 1. Seleção dos elementos HTML
// const botao = document.getElementById("botao");
// const label1 = document.getElementById("label1");
// const label2 = document.getElementById("label2");
// const label3 = document.getElementById("label3");


// ➡️ Aqui o código está pegando elementos do HTML que têm esses respectivos IDs (botao, label1, etc).
// Esses elementos podem ser, por exemplo:

// <button id="botao">Gerar</button>
// <span id="label1"></span>
// <span id="label2"></span>
// <span id="label3"></span>


// Essas variáveis (botao, label1, etc.) agora guardam uma referência direta a esses elementos.
// Isso permite alterar o conteúdo deles ou reagir a eventos, como cliques.

// 🎯 2. Definição dos limites dos números aleatórios
// const min = 0;
// const max = 9;


// Essas constantes definem o intervalo de valores que os números aleatórios podem ter.
// No caso, os números irão variar de 0 até 8, porque o Math.random() nunca chega exatamente a 1.
// (Explico isso melhor já já 👇)

// 🎲 3. Declaração das variáveis dos números
// var randomNum1;
// var randomNum2;
// var randomNum3;


// Essas variáveis vão armazenar os números sorteados.
// No começo estão vazias.

// 🖱️ 4. Evento de clique no botão
// botao.onclick = function(){
//     randomNum1 = Math.floor(Math.random()* max) + min;
//     randomNum2 = Math.floor(Math.random()* max) + min;
//     randomNum3 = Math.floor(Math.random()* max) + min;
//     label1.textContent = randomNum1
//     label2.textContent = randomNum2
//     label3.textContent = randomNum3
// }


// Quando o botão for clicado, essa função será executada.

// Dentro dela:

// a) Math.random()

// Gera um número decimal aleatório entre 0 e 1, como por exemplo 0.5324.

// b) Multiplicando por max

// Math.random() * max → vai gerar um número entre 0 e 9 (não incluindo o 9 exato).

// Exemplo: 0.5324 * 9 = 4.7916

// c) Math.floor(...)

// Arredonda para baixo — ou seja, 4.7916 vira 4.
// Então você obtém números inteiros: 0, 1, 2, ..., 8.

// d) + min

// Aqui, como min é 0, não muda nada.
// Mas se min fosse 5, por exemplo, o resultado final seria de 5 até 13.

// ✅ Resultado: cada variável (randomNum1, randomNum2, randomNum3) recebe um número aleatório de 0 a 8.

// 💬 5. Atualizando o texto das labels
// label1.textContent = randomNum1
// label2.textContent = randomNum2
// label3.textContent = randomNum3


// Cada <span> (ou qualquer outro elemento de texto) mostra o número sorteado.

// Assim, ao clicar no botão, aparecem três números aleatórios na tela!

// ⚙️ Exemplo completo
// <button id="botao">Gerar números</button>
// <p>
//   <span id="label1"></span>
//   <span id="label2"></span>
//   <span id="label3"></span>
// </p>

// <script>
// const botao = document.getElementById("botao");
// const label1 = document.getElementById("label1");
// const label2 = document.getElementById("label2");
// const label3 = document.getElementById("label3");

// const min = 0;
// const max = 9;
// var randomNum1;
// var randomNum2;
// var randomNum3;

// botao.onclick = function(){
//     randomNum1 = Math.floor(Math.random() * max) + min;
//     randomNum2 = Math.floor(Math.random() * max) + min;
//     randomNum3 = Math.floor(Math.random() * max) + min;

//     label1.textContent = randomNum1;
//     label2.textContent = randomNum2;
//     label3.textContent = randomNum3;
// }
// </script>


// 💡 Resumo simples:

// Cada vez que você clica no botão, o código sorteia 3 números aleatórios e mostra eles na tela.