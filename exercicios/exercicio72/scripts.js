//ROCK PAPER SCISSORS 

// ROCK PAPER SCISSORS 

const choices = ["pedra", "papel", "tesoura"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerchoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerchoice === computerChoice){
        result = "É um empate.";
    } else {
        switch(playerchoice){
            case "pedra":
                result = (computerChoice === "tesoura") ? "VOCÊ VENCEU!" : "VOCÊ PERDEU!";
                break;
            case "papel":
                result = (computerChoice === "pedra") ? "VOCÊ VENCEU!" : "VOCÊ PERDEU!";
                break;
            case "tesoura":
                result = (computerChoice === "papel") ? "VOCÊ VENCEU!" : "VOCÊ PERDEU!";
                break;
        }
    }

    playerDisplay.textContent = `JOGADOR: ${playerchoice}`;
    computerDisplay.textContent = `COMPUTADOR: ${computerChoice}`;
    resultDisplay.textContent = result;
    
    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "VOCÊ VENCEU!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "VOCÊ PERDEU!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}


//EXPLICAÇÃO

/*Visão geral rápida

É um jogo Pedra–Papel–Tesoura.
Quando o jogador clica em um botão, a função playGame roda, escolhe aleatoriamente a jogada do computador, compara com a do jogador, atualiza o placar e pinta o resultado (verde = vitória, vermelho = derrota).

Linha a linha (explicação fácil)

const choices = ["pedra", "papel", "tesoura"];
— Lista com as três opções possíveis. Usada para escolher aleatoriamente a jogada do computador.

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
— Essas linhas pegam elementos do HTML (por ID). Depois o JavaScript coloca texto neles para mostrar informações na página (quem jogou, resultado, placar).

let playerScore = 0;
let computerScore = 0;
— Variáveis que guardam os pontos. Começam em zero e aumentam conforme as partidas.

A função principal: playGame(playerchoice)

Essa função é chamada quando o jogador clica em um botão (por exemplo playGame('pedra')). A função faz:

const computerChoice = choices[Math.floor(Math.random() * 3)];
— Escolhe aleatoriamente "pedra", "papel" ou "tesoura".
Math.random() gera número entre 0 e 1; multiplicando por 3 e usando Math.floor() vira 0,1 ou 2 — índice do array choices.

let result = "";
— Inicializa a variável que vai guardar o texto do resultado.

if(playerchoice === computerChoice){ result = "É um empate."; }
— Se as jogadas forem iguais, é empate.

else { switch(playerchoice){ ... } }
— Caso não seja empate, o switch checa qual foi a jogada do jogador e compara com a do computador:

Se jogador escolheu "pedra":

se computador escolheu "tesoura" → jogador vence

caso contrário → jogador perde

Mesma lógica para "papel" e "tesoura" (cada uma vence outra específica).

Isso usa operadores ternários:
(condição) ? "VOCÊ VENCEU!" : "VOCÊ PERDEU!";

Atualiza o que aparece na tela:

playerDisplay.textContent = JOGADOR: ${playerchoice}; — mostra a escolha do jogador.

computerDisplay.textContent = COMPUTADOR: ${computerChoice}; — mostra a escolha do computador.

resultDisplay.textContent = result; — mostra "VOCÊ VENCEU!" / "VOCÊ PERDEU!" / "É um empate."

resultDisplay.classList.remove("greenText", "redText");
— Remove classes de cor anteriores antes de aplicar a nova. Assim não ficam acumuladas (bug comum).

switch(result){ case "VOCÊ VENCEU!": ... case "VOCÊ PERDEU!": ... }
— Dependendo do resultado:

Se venceu: adiciona classe greenText, incrementa playerScore, e atualiza playerScoreDisplay.textContent.

Se perdeu: adiciona classe redText, incrementa computerScore, e atualiza computerScoreDisplay.textContent.

Empate: não altera placar nem adiciona classes coloridas.

Exemplo de fluxo (quando você clica em "pedra")

Botão chama playGame('pedra').

Computador escolhe aleatoriamente — por exemplo "papel".

Comparação: "pedra" vs "papel" → jogador perde. result = "VOCÊ PERDEU!".

Atualiza textos na tela e incrementa computerScore.

Adiciona classe redText ao resultDisplay.

Possíveis bugs que já foram corrigidos aqui

IDs do HTML diferentes do JS (case-sensitive) → elemento null.

Função chamada com nome errado (playgame vs playGame) → botão não chama a função.

Classes de cor se acumulando (esquecer de remove() antes do add()).

Erros de digitação como colchetes sobrando ou constantes incompletas.

Dicas fáceis pra melhorar (opcionais)

Substituir 3 por choices.length para ficar robusto se você mudar o array.

Normalizar playerchoice com .toLowerCase() (evita problemas se o botão passar Pedra).

Desabilitar botão por 0.5s entre jogadas se quiser animação e impedir cliques rápidos.

Mostrar feedback visual temporário (por exemplo usar setTimeout para remover a cor após 1s).*/