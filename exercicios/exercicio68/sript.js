const box = document.getElementById("box"); // nome corrigido
const moveAmount = 100;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }

        box.style.top = `${y}px`;
        box.style.left = `${x}px`;
    }
});



//EXPLICAÇÃO

/*✅ Explicação Completa do Código
/*1️⃣ Pegando o elemento HTML
const box = document.getElementById("box");


Aqui você pega a div (ou outro elemento) que tem id="box" no HTML.

A variável box agora representa esse elemento na página.

É ela que você vai mover pela tela.

2️⃣ Quantos pixels o quadrado vai se mover?
const moveAmount = 10;


Define que a cada tecla pressionada, o objeto vai se mover 10 pixels.

Se quiser mais rápido, aumenta. Se quiser lento, diminui.

3️⃣ Posição inicial
let x = 0;
let y = 0;


x representa o movimento horizontal (esquerda ↔ direita)

y representa o movimento vertical (cima ↕ baixo)

Inicialmente, ambos são 0, ou seja, o elemento começa exatamente no ponto inicial do CSS.

4️⃣ Ouvindo o teclado
document.addEventListener("keydown", event => {


O navegador fica “ouvindo” quando você aperta QUALQUER tecla.

Sempre que uma tecla é pressionada, a função é executada.

O event guarda qual tecla foi pressionada.

5️⃣ Filtrando apenas as setas do teclado
if(event.key.startsWith("Arrow")){


Isso garante que somente funcionará quando você pressionar:

ArrowUp

ArrowDown

ArrowLeft

ArrowRight

Ou seja: as teclas de seta.

6️⃣ Movendo nas direções certas
switch(event.key){
    case "ArrowUp":
        y -= moveAmount;
        break;

    case "ArrowDown":
        y += moveAmount;
        break;

    case "ArrowLeft":
        x -= moveAmount;
        break;

    case "ArrowRight":
        x += moveAmount;
        break;
}

Como funciona cada caso:
🔼 Seta para cima
y -= moveAmount;


Diminui o valor do eixo y.

No CSS, menor y significa subir.

🔽 Para baixo
y += moveAmount;


Aumenta o valor de y, ou seja, o elemento desce.

◀️ Para a esquerda
x -= moveAmount;


Diminui o valor de x, movendo para a esquerda.

▶️ Para a direita
x += moveAmount;


Aumenta x, movendo para a direita.

7️⃣ Atualizando a posição na tela
box.style.top = `${y}px`;
box.style.left = `${x}px`;


Aqui você está alterando o CSS pelo JavaScript.

top controla o movimento vertical

left controla o movimento horizontal

Essas linhas dizem:

“Coloque a posição top do elemento igual ao valor de y pixels.”

⚠️ IMPORTANTE
Para isso funcionar, seu CSS precisa ter:

#box {
  position: absolute;
}


Sem position: absolute ou relative, o navegador não deixa mover livremente.

🔥 RESUMÃO SUPER CLARO
Parte do código	O que faz
getElementById	Pega a div para mover
moveAmount	Define a velocidade
x e y	Guardam a posição atual
keydown	Detecta quando você pressiona uma tecla
startsWith("Arrow")	Garante que só reage às setas
switch(event.key)	Escolhe a direção
box.style.top/left	Move o elemento de verdade*/
