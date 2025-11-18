/*/🟦 1. parentElement — Pegando o elemento pai
🔹 HTML
<div id="card">
    <p id="texto">Olá!</p>
</div>

🔹 JavaScript
const texto = document.getElementById("texto");
console.log(texto.parentElement);  // <div id="card">

🔹 Explicação

texto está dentro da <div id="card">.

parentElement sobe um nível e retorna o pai.

📌 Use quando quiser modificar o container do elemento.

🟦 2. children — Pegando todos os filhos (apenas elementos)
🔹 HTML
<ul id="lista">
    <li>Banana</li>
    <li>Maçã</li>
    <li>Laranja</li>
</ul>

🔹 JavaScript
const lista = document.getElementById("lista");
console.log(lista.children);  // [li, li, li]
console.log(lista.children[1]); // <li>Maçã</li>

🔹 Explicação

children retorna uma coleção de elementos HTML.

Não inclui textos, espaços ou quebras de linha.

📌 Use para percorrer elementos dentro de um container.

🟦 3. firstElementChild — O primeiro filho
🔹 HTML
<div id="caixa">
    <h2>Título</h2>
    <p>Parágrafo 1</p>
    <p>Parágrafo 2</p>
</div>

🔹 JavaScript
const caixa = document.getElementById("caixa");
console.log(caixa.firstElementChild); // <h2>Título</h2>

🔹 Explicação

Pega o primeiro elemento dentro da div.

📌 Ideal para acessar o primeiro item de listas, cards, seções etc.

🟦 4. lastElementChild — O último filho
🔹 HTML
<div id="caixa">
    <h2>Título</h2>
    <p>Final</p>
</div>

🔹 JavaScript
const caixa = document.getElementById("caixa");
console.log(caixa.lastElementChild); // <p>Final</p>


📌 Use quando sempre precisa do último item (ex: chat, logs, mensagens).

🟦 5. nextElementSibling — Próximo irmão
🔹 HTML
<p id="um">Primeiro</p>
<p id="dois">Segundo</p>
<p id="tres">Terceiro</p>

🔹 JavaScript
const um = document.getElementById("um");
console.log(um.nextElementSibling); // <p id="dois">

🔹 Explicação

Pensa como "quem está à direita de mim".

📌 Muito útil para navegação em menus ou listas.

🟦 6. previousElementSibling — Irmão anterior
🔹 HTML
<p id="um">Primeiro</p>
<p id="dois">Segundo</p>
<p id="tres">Terceiro</p>

🔹 JavaScript
const tres = document.getElementById("tres");
console.log(tres.previousElementSibling); // <p id="dois">


📌 Funciona como "quem está à esquerda de mim".

🟦 7. Exemplo COMPLETÃO para visualizar tudo
🔹 HTML
<div id="container">
    <h1>Título</h1>
    <p id="p1">Linha 1</p>
    <p id="p2">Linha 2</p>
    <p id="p3">Linha 3</p>
</div>

🔹 JavaScript
const container = document.getElementById("container");
const p2 = document.getElementById("p2");

// Filhos
console.log(container.children);             // [h1, p1, p2, p3]

// Primeiro e último
console.log(container.firstElementChild);    // <h1>
console.log(container.lastElementChild);     // <p id="p3">

// Pai do p2
console.log(p2.parentElement);               // div#container

// Irmãos
console.log(p2.previousElementSibling);      // <p id="p1">
console.log(p2.nextElementSibling);          // <p id="p3">*/