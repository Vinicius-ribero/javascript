/*Seletores de elementos = métodos usados ​​para selecionar e manipular elementos HTML.
Eles permitem selecionar um ou mais elementos HTML do DOM (Modelo de Objeto de Documento).

1. document.getElementById() // ELEMENTO OU NULO
2. document.getElementClassName() // COLEÇÃO HTML
3. document.querySelector() // Elemento OU NULO
4. document.querySelector() // ELEMENTO OU NULO

5. document.querySelectorAll() // LISTA DE NÓS
Abrir no Google Tradutor
•
Feedback*/


/*1) document.getElementById(id) — Elemento ou null

O que faz: procura no documento um único elemento cujo atributo id seja exatamente o valor passado.

Retorno: o elemento (HTMLElement) se existir; caso contrário null.

Características principais

Busca por id — que deve ser único na página (prática recomendada).

Muito rápido — implementado diretamente pelo motor do navegador.

Retorna um único elemento.

Uso típico

<div id="titulo">Olá</div>

const el = document.getElementById("titulo");
if (el) {
  el.textContent = "Novo texto";
} else {
  console.log("Elemento não encontrado");
}


Cuidados

Retorna null se não achar → sempre conferir antes de usar propriedades (ou usar o operador ?.).

id é case-sensitive em seletores JS (use o mesmo valor exato).

2) document.getElementsByClassName(className) — HTMLCollection (coleção “viva”)

O que faz: retorna todos os elementos que têm a classe (ou classes) fornecida — por exemplo "botao" ou "card ativo".

Retorno: um HTMLCollection (semelhante a array, mas não é Array).
É uma coleção “viva”: se o DOM mudar depois, a coleção reflete essas mudanças automaticamente.

Uso típico

<button class="tecla">1</button>
<button class="tecla">2</button>

const teclas = document.getElementsByClassName("tecla"); // HTMLCollection
console.log(teclas.length); // 2

// iterando (HTMLCollection não tem forEach)
for (let i = 0; i < teclas.length; i++) {
  teclas[i].addEventListener("click", () => console.log("clicou"));
}


Características importantes

Rápido para buscas por classe.

Não tem métodos Array (map, forEach — alguns navegadores modernos suportam forEach em HTMLCollection? não garantido).

Se você modificar o DOM (adicionar/remover elementos com essa classe), teclas atualiza automaticamente.

Converter para Array (quando quiser métodos de array):

const arr = Array.from(teclas); // agora tem forEach, map, etc.
arr.forEach(el => /* ... */;

/*3) document.querySelector(selector) — Primeiro elemento ou null

O que faz: aceita qualquer seletor CSS e retorna o primeiro elemento que corresponda ao seletor.

Retorno: Element se encontrado; caso contrário null.

Exemplos de seletores válidos

"#menu" — id

".btn.primary" — classe composta

"div.card > p:first-child" — combinadores e pseudo-classes

"[data-id='123']" — atributos

Uso típico

<ul>
  <li class="item">A</li>
  <li class="item">B</li>
</ul>

const primeiro = document.querySelector(".item");
primeiro.textContent = "Alterado";


Vantagens

Muito flexível: usa toda a sintaxe CSS.

Útil quando você quer só o primeiro resultado.

Cuidados

Retorna null se nada for encontrado — cheque antes de usar.

4) document.querySelector // ELEMENTO OU NULO

(Você repetiu querySelector na lista; acredito que queria enfatizar o mesmo comportamento — já cubrimos. Em geral, querySelector = primeiro elemento ou null.)

Se a intenção era outra (ex.: getElementsByTagName), posso explicar também — veja nota no final.

5) document.querySelectorAll(selector) — NodeList (estática)

O que faz: aceita seletor CSS e retorna todos os elementos que correspondem ao seletor.

Retorno: NodeList — parecido com array; estático (não muda automaticamente se o DOM mudar), ao contrário do HTMLCollection.

Exemplo

const itens = document.querySelectorAll(".item"); // NodeList
console.log(itens.length);

// NodeList moderno tem forEach
itens.forEach(node => console.log(node.textContent));


Características

Suporta seletores CSS complexos.

NodeList retornado por querySelectorAll é estático: se você adicionar novos .item depois, itens NÃO passará a conter os novos elementos (você precisa chamar querySelectorAll novamente).

Em navegadores modernos NodeList tem .forEach(). Mas para map/filter, converta para array (Array.from ou spread [...]).

Converter para Array

const arr = Array.from(document.querySelectorAll(".item"));

Comparação prática — quando usar cada um

getElementById → quando você tem um id único. Muito rápido e claro.

getElementsByClassName → quando quer uma coleção “viva” por classe e performance importa. Útil se o DOM pode mudar e você quer a coleção atualizada.

querySelector → quando precisa do primeiro match de um seletor CSS (flexível). Ótimo para selecionar algo único por uma regra CSS complexa.

querySelectorAll → quando quer TODOS os elementos que batem com um seletor CSS. Usa-se quando precisa de uma lista estática para processamento.

Diferenças técnicas resumidas (tabela mental)

getElementById(id) → Element | busca por id | retorna 1 | muito rápido

getElementsByClassName(cls) → HTMLCollection (viva) | vários | não Array | atualizado com o DOM

querySelector(sel) → Element ou null | primeiro match | aceita CSS | flexível

querySelectorAll(sel) → NodeList (estático) | todos os matches | suporta forEach | converta p/Array se precisar

Exemplos práticos com situações reais

Botão único com id

document.getElementById("btnEnviar").addEventListener("click", enviar);


Adicionar listener a todos os botões com classe

const botoes = document.querySelectorAll(".tecla");
botoes.forEach(b => b.addEventListener("click", handler));


Pegar elemento dentro de outro

const card = document.querySelector(".card");
const titulo = card.querySelector("h2"); // procura dentro do card


Quando o DOM muda dinamicamente

Se você precisa sempre ter a lista atualizada quando elementos entram/saem, use getElementsByClassName (viva) ou use event delegation (melhor padrão: delegar eventos a um ancestral único e verificar event.target).

Event delegation (padrão recomendado)

document.querySelector(".teclado").addEventListener("click", (e) => {
  if (e.target.matches(".tecla")) {
    // lidar com o clique
  }
});


Isso evita ter que re-atualizar listeners quando elementos são criados dinamicamente.

Boas práticas e dicas finais

Prefira querySelector/querySelectorAll quando precisar de flexibilidade com seletores CSS modernos.

Para performance crítica (muitos acessos), getElementById é mais rápido que querySelector.

Use nomes de variáveis que deixem claro o tipo: const btn = getElementById("x"), const nodes = document.querySelectorAll(".it").

Sempre trate null de querySelector/getElementById antes de acessar propriedades.

Para manipular coleções com métodos de array (map/filter), converta com Array.from(...).

Para adicionar muitos listeners dinamicamente, considere delegação de eventos em um pai.*/