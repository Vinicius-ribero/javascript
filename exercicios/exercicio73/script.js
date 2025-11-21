//IMAGE SLIDER

let slides;               // vai ser preenchido no initialize
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  // seleciona os slides após o DOM carregar
  slides = document.querySelectorAll(".slides img");

  if (slides.length > 0) {
    slides.forEach(s => s.classList.remove("displaySlide"));
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
  }
}

function showSlide(index) {
  // proteção caso não haja slides
  if (!slides || slides.length === 0) return;

  // normaliza o índice (wrap-around)
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = index;
  }

  // remove classe de todos e adiciona no atual
  slides.forEach(slide => slide.classList.remove("displaySlide"));
  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  // seu código original usava clearInterval aqui — mantive isso
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
  showSlide(slideIndex - 1);
}

function nextSlide() {
  showSlide(slideIndex + 1);
}


//Explicação passo a passo
/*1) let slides;

Cria a variável slides sem valor inicial. A ideia é preenchê-la depois que o DOM existir (ou seja, após o carregamento da página). Assim evitamos null/undefined ao tentar selecionar elementos que ainda não existem.

2) let slideIndex = 0;

Define qual slide estará visível inicialmente. 0 significa o primeiro elemento da lista (em JavaScript, indices começam em 0).

3) let intervalId = null;

Vai guardar o ID retornado por setInterval(...). Ter esse ID permite mais tarde parar o autoplay com clearInterval(intervalId).

4) document.addEventListener("DOMContentLoaded", initializeSlider);

Registra um listener que chama initializeSlider quando o HTML foi totalmente carregado e parseado. Isso garante que document.querySelectorAll(".slides img") encontre as imagens — sem isso, se o script rodasse antes do HTML, slides ficaria vazio.

5) function initializeSlider() { ... }

Função que prepara o slider: seleciona as imagens, garante que só uma esteja visível e inicia o autoplay.

slides = document.querySelectorAll(".slides img");
Seleciona todas as imagens dentro do elemento com classe .slides. O resultado é um NodeList parecido com um array.

if (slides.length > 0) { ... }
Só continua se houver pelo menos uma imagem — proteção contra páginas sem imagens.

slides.forEach(s => s.classList.remove("displaySlide"));
Remove a classe displaySlide de todas as imagens, limpando estados anteriores (útil quando você recarrega scripts durante desenvolvimento).

slides[slideIndex].classList.add("displaySlide");
Adiciona a classe (CSS responsável por exibir a imagem) ao slide atual — normalmente o primeiro.

intervalId = setInterval(nextSlide, 5000);
Inicia o autoplay: a cada 5000ms (5s) a função nextSlide é chamada. setInterval retorna um ID que guardamos em intervalId para poder parar depois.

6) function showSlide(index) { ... }

Função que exibe o slide de índice index garantindo que o índice seja válido (wrap-around) e atualizando o DOM.

if (!slides || slides.length === 0) return;
Segurança: se slides não foi inicializado, nada acontece.

Normalização do índice:

if (index >= slides.length) { slideIndex = 0; }
Se o índice for maior que o último slide, volta para o primeiro (efeito looping).

else if (index < 0) { slideIndex = slides.length - 1; }
Se for negativo, vai para o último slide — assim prev funciona circularmente.

else { slideIndex = index; }
Caso normal: aceita o índice.

slides.forEach(slide => slide.classList.remove("displaySlide"));
Remove a classe de todos os slides (esconde todos).

slides[slideIndex].classList.add("displaySlide");
Adiciona a classe ao slide atual (exibe o escolhido).

Resumindo: showSlide garante que o índice fique dentro do intervalo e atualiza qual imagem fica visível.

7) function prevSlide() { ... }

Função para ir ao slide anterior manualmente.

if (intervalId) { clearInterval(intervalId); intervalId = null; }
Aqui o comportamento escolhido foi parar o autoplay quando o usuário clica em "anterior". Isso evita que o autoplay imediatamente sobrescreva a ação manual (comportamento opcional — dá pra remover se você preferir reiniciar o autoplay depois do clique).

showSlide(slideIndex - 1);
Chama showSlide com índice anterior; a normalização dentro de showSlide cuida do wrap-around.

8) function nextSlide() { showSlide(slideIndex + 1); }

Vai para o próximo slide — usado tanto pelo botão “próximo” (se houver) quanto pelo setInterval do autoplay. Simples e eficaz.

Fluxo de execução (resumido)

Página carrega → DOMContentLoaded dispara.

initializeSlider() é chamado:

seleciona imagens (slides),

mostra o slide 0,

inicia setInterval(nextSlide, 5000).

A cada 5s o setInterval chama nextSlide() → showSlide(slideIndex + 1) → atualiza classe CSS para exibir nova imagem.

Usuário clica em prev:

prevSlide() limpa o intervalId (autoplay para),

chama showSlide(slideIndex - 1) (mostra anterior).

Usuário clica em next:

se você tiver um botão com onclick="nextSlide()" evitaria parar o intervalo — mas no código atual nextSlide() apenas muda o slide e o autoplay continua (porque só prevSlide() limpa o intervalo).

Observações importantes / dicas rápidas

Por que usamos classes CSS (displaySlide) em vez de style.display = "block"?
Porque é melhor separar comportamento (JS) de apresentação (CSS). A classe permite animações via CSS e manutenção mais fácil.

Se quiser que clicar em qualquer botão reinicie o autoplay (em vez de parar), substitua prevSlide() por:

function prevSlide() {
  showSlide(slideIndex - 1);
  startInterval(); // implementar função que limpa e setInterval novamente
}


E crie startInterval()/stopInterval() para controle mais limpo.

Se quiser um fade suave (opacity) em vez de display on/off, use CSS com position:absolute e altere opacity + transition. Isso evita "pulos" visuais.

Debugging: no console, teste:

slides — deve mostrar NodeList com imagens.

slideIndex — veja o valor atual.

intervalId — se null, não há autoplay ativo.

Edge cases:

Se não houver imagens, initializeSlider retorna sem erro (tem a verificação slides.length > 0).

Se slides for dinâmico (imagens carregadas depois via AJAX), você precisará reinicializar ou reexecutar a seleção.*/