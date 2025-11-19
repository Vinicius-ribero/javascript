

//PASSO 1: CRIAR O ELEMENTO HTML
const newH1 = document.createElement("h1");

//PASSO 2: ADICIONAR ATRIBUTOS/PROPRIEDADES
newH1.textContent = "Eu gosto de pizza"
newH1.id = "H1";
newH1.style.color = "red"
newH1.style.textAlign= "center"


//PASSO 3: ANEXAR O ELEMENTO AO DOM
//document.body.prepend(newH1);
// document.getElementById("box1").append(newH1)
// document.getElementById("box1").prepend(newH1)

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newElement, box2)

// const boxes = document.querySelectorAll(".box")
// document.body.insertBefore(newH1, boxes [0])

//REMOVER O ELEMENTO HTML*///
document.body.removeChild(newH1)



/*Add & Change no JavaScript — explicação passo a passo com exemplos e práticas

Vou explicar como adicionar (add) e alterar (change) coisas no DOM com JavaScript — desde selecionar elementos até criar, inserir, substituir, modificar atributos, classes, texto, e boas práticas. Vou usar exemplos simples e mostrar quando usar cada técnica.

1) Selecionar elementos (primeiro passo sempre)

Antes de mudar algo você precisa pegar o elemento:

// Seletores básicos
const byId = document.getElementById('meuId');         // 1 elemento
const byClass = document.getElementsByClassName('box'); // HTMLCollection (não é array)
const byTag = document.getElementsByTagName('div');     // HTMLCollection
const q = document.querySelector('.box');               // 1º elemento que bate
const qAll = document.querySelectorAll('.box');         // NodeList (parecido com array)


Dica: querySelector/querySelectorAll são os mais flexíveis.

2) Adicionar elementos ao DOM (ADD)
2.1 createElement + appendChild (modo clássico)

Passos:

Cria o elemento.

Configura conteúdo/atributos.

Insere no DOM.

<!-- HTML -->
<div id="container"></div>

const container = document.getElementById('container');

const novo = document.createElement('div'); // cria
novo.className = 'box';
novo.textContent = 'Sou um novo box';       // conteúdo (seguro contra HTML)
container.appendChild(novo);                // insere ao final


Quando usar: quando precisa criar elementos dinamicamente e manipulá-los antes de inserir.

2.2 append, prepend, before, after, replaceWith (APIs modernas)

Esses métodos aceitam nós e strings e são mais convenientes:

container.append('texto no final', novo);     // adiciona nó/string no final
container.prepend('começo');
novo.before('antes do novo');
novo.after('depois do novo');
novo.replaceWith(document.createElement('p')); // substitui o nó


Vantagem: sintaxe curta e aceita múltiplos argumentos.

2.3 insertAdjacentHTML (inserir HTML pronto)

Insere HTML sem recriar nós manualmente:

container.insertAdjacentHTML('beforeend', '<div class="box">HTML inserido</div>');
// posições: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'


Cuidado: se inserir HTML vindo do usuário, escape primeiro (risco de XSS).

2.4 DocumentFragment (performance)

Quando for inserir muitos nós de uma vez, prepare-os em um fragmento e depois anexe:

const frag = document.createDocumentFragment();
for (let i=0;i<100;i++){
  const d = document.createElement('div');
  d.textContent = `item ${i}`;
  frag.appendChild(d);
}
container.appendChild(frag); // só uma reflow no final


Melhor prática: reduz repaints/reflows.

3) Alterar conteúdo (CHANGE)
3.1 Texto vs HTML

textContent — altera somente texto (escapa HTML).

innerHTML — altera HTML (processa tags).

const el = document.querySelector('.box');
el.textContent = 'Só texto seguro';
el.innerHTML = '<strong>Negrito</strong> com HTML';


Regra: prefira textContent para inserir texto; innerHTML só para conteúdo controlado.

3.2 Atributos e propriedades

setAttribute, getAttribute, removeAttribute — manipulam atributos do DOM.

Propriedades permitem acesso direto (ex.: el.id, el.src, el.value).

el.setAttribute('data-usuario', 'vinicius');
console.log(el.getAttribute('data-usuario'));
el.removeAttribute('data-usuario');

// ou via propriedade
el.id = 'novoId';


Observação: el.className define a string de classes; el.classList é mais moderno.

3.3 Classes com classList

Adicionar/remover/toggle sem sobrescrever:

el.classList.add('ativo');
el.classList.remove('oculto');
el.classList.toggle('open'); // adiciona se não existir, remove se existir
el.classList.contains('box'); // verifica


Boa prática: use classList em vez de manipular className manualmente.

3.4 Estilo inline

Você pode mudar CSS direto no elemento (não recomendado para muitas regras):

el.style.backgroundColor = 'lightblue';
el.style.display = 'none';


Preferência: controle estilos via classes (CSS) e troque classes com classList.

4) Substituir e remover elementos
// Remover
el.remove();                // remove o elemento do DOM (moderno)
parent.removeChild(el);     // método antigo

// Substituir
const novo = document.createElement('div');
parent.replaceChild(novo, el); // antigo
el.replaceWith(novo);          // moderno

5) Eventos: adicionar e remover comportamento

Adicionar interatividade com addEventListener e removê-la com removeEventListener.

function clique(e){
  console.log('clicou', e.target);
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', clique);

// pra remover:
btn.removeEventListener('click', clique);


Boa prática: use addEventListener (não onclick) e mantenha referências às funções se for precisar remover.

6) Delegação de eventos (melhor prática para muitos elementos dinâmicos)

Ao invés de adicionar listeners em cada item, escute no pai e chegue o alvo:

const lista = document.querySelector('#lista');
lista.addEventListener('click', (e) => {
  const item = e.target.closest('.item');
  if (!item) return;
  console.log('clicou no item', item.dataset.id);
});


Vantagem: funciona para elementos criados depois e economiza listeners.

7) Exemplos práticos completos
Exemplo A — criar um card e adicionar ao container
<div id="cards"></div>

function criarCard(titulo, texto) {
  const card = document.createElement('article');
  card.classList.add('card');

  const h = document.createElement('h3');
  h.textContent = titulo;

  const p = document.createElement('p');
  p.textContent = texto;

  card.append(h, p);
  return card;
}

const container = document.getElementById('cards');
container.appendChild(criarCard('Título 1', 'Conteúdo do card'));

Exemplo B — editar conteúdo ao clicar (toggle editar)
<div id="card1" class="card"><p>Texto original</p></div>
<button id="edit">Editar</button>

const card = document.getElementById('card1');
const btn = document.getElementById('edit');

btn.addEventListener('click', () => {
  const p = card.querySelector('p');
  // trocando texto:
  p.textContent = 'Texto alterado pelo JS';
  // adicionando classe pra estilo:
  card.classList.toggle('editing');
});

8) Boas práticas e dicas finais

Feche sempre suas tags — HTML mal fechado confunde o DOM.

Prefira textContent a innerHTML quando for só texto (evita XSS).

Use classList para manipular classes.

Delegue eventos quando houver muitos elementos dinâmicos.

Prefira métodos modernos (append, prepend, before, after, replaceWith) pela simplicidade.

Use DocumentFragment para múltiplas inserções (melhora desempenho).

Não altere estilos inline em excesso — prefira classes CSS.

Sanitize qualquer HTML vindo do usuário antes de usar innerHTML.

Teste em devtools: você pode inspecionar o DOM e testar comandos no console para ver o efeito imediato.

9) Exercícios práticos (faça você mesmo)

Crie um botão que ao clicar adiciona um novo item numa lista com appendChild.

Faça um formulário que ao submeter cria um card com título e descrição (use preventDefault()).

Construa um “todo list” onde itens podem ser marcados/removidos — use delegação de eventos.

Crie um script que gere 100 boxes usando DocumentFragment e compare o tempo de render com/sem fragmento.*/