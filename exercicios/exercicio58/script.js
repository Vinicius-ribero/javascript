const display = document.getElementById("display");
let timer = null
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function iniciar(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true
    }
}

function parar(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now()- startTime;
        isRunning = false
    }
}

function resetar(){
    clearInterval(timer);
     startTime = 0;
     elapsedTime = 0;
     isRunning = false;
     display.textContent = "00:00:00:00";

}

function update(){
    const currentTime = Date.now()
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor (elapsedTime / (1000 * 60) % 60);
    let second = Math.floor (elapsedTime / 1000 % 60);
    let miliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(1, "0")
    second = String(second).padStart(1, "0")
    miliseconds = String(miliseconds).padStart(1, "0")

    display.textContent = `${hours}: ${minutes}: ${second} ${miliseconds}`

}


/*EXPLICAÇÃO PASSO A PASSO;
1) Visão geral rápida

Esse script implementa um cronômetro (stopwatch) com 4 partes no display: horas, minutos, segundos e centésimos de segundo (milissegundos divididos por 10). Ele permite iniciar, parar e resetar o cronômetro.

2) Declaração das variáveis (estado do cronômetro)
const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;


display — obtém o elemento DOM onde você mostra o tempo (ex.: <div id="display"></div>). É const porque a referência do elemento não muda.

timer — guardará o identificador retornado por setInterval(...). Usamos isso depois para clearInterval(timer) e parar a execução periódica.

startTime — momento (em ms desde 1970) em que o cronômetro começou. Quando pausado e retomado, recalculamos esse valor para manter o tempo acumulado.

elapsedTime — tempo total decorrido (em milissegundos) que será usado para calcular horas/minutos/segundos.

isRunning — booleano que sinaliza se o cronômetro está rodando; evita duplicar setInterval se o usuário apertar iniciar várias vezes.

3) Função iniciar() — lógica para começar ou retomar
function iniciar(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}


Passo a passo:

if(!isRunning) — só executa se ainda não estiver rodando. Evita múltiplos timers.

startTime = Date.now() - elapsedTime;

Date.now() retorna o tempo atual em milissegundos.

Subtraímos elapsedTime para suportar retomar: se já havia tempo acumulado (cronômetro pausado), ajustamos startTime para que a diferença Date.now() - startTime inclua o tempo anterior.

Exemplo: se elapsedTime = 5000 (5s) e agora Date.now() é 100000, então startTime = 95000. Assim Date.now() - startTime = 5000 + tempo novo.

timer = setInterval(update, 10);

Chama a função update a cada 10 ms. Isso faz o display atualizar frequentemente (centésimos de segundo / 10ms).

isRunning = true; — marca que o cronômetro está ativo.

Observação: 10 ms é uma frequência alta; navegadores podem amortizar timers em background. Se você só precisa de precisão de 10ms, ok; caso queira muita precisão, há abordagens melhores (ver melhorias abaixo).

4) Função parar() — pausar o cronômetro
function parar(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}


Passo a passo:

if(isRunning) — só faz sentido pausar se está rodando.

clearInterval(timer); — cancela o setInterval, parando as chamadas de update.

elapsedTime = Date.now() - startTime;

Guarda o tempo acumulado até o momento da pausa. Assim podemos retomar depois sem perder o tempo anterior.

isRunning = false; — marca como pausado.

5) Função resetar() — zerar tudo
function resetar(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}


Cancela o setInterval (se existir).

Reseta startTime e elapsedTime para 0 — estado inicial.

Marca isRunning = false.

Atualiza o display para "00:00:00:00", mostrando zeros para horas:minutos:segundos:centésimos.

6) Função update() — cálculo e formatação do tempo exibido
function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let second = Math.floor((elapsedTime / 1000) % 60);
    let miliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    second = String(second).padStart(2, "0");
    miliseconds = String(miliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${second}:${miliseconds}`;
}


Explicação detalhada:

const currentTime = Date.now(); — pega o tempo atual em ms.

elapsedTime = currentTime - startTime; — tempo total desde o startTime. Se foi retomado, startTime foi ajustado para incluir o tempo acumulado anterior.

Cálculo das unidades:

hours = número inteiro de horas completas: Math.floor(elapsedTime / (1000 * 60 * 60)).

minutes = total de minutos (convertendo ms → minutos) e pegando o resto modulo 60: Math.floor((elapsedTime / (1000 * 60)) % 60).

second = segundos em módulo 60: Math.floor((elapsedTime / 1000) % 60).

miliseconds = parte de milissegundos convertida para centésimos: (elapsedTime % 1000) / 10 e arredondada para baixo com Math.floor.

Ex.: se elapsedTime % 1000 = 456 ms → 456 / 10 = 45.6 → Math.floor → 45 (centésimos).

Formatação com padStart(2, "0"):

Converte cada número para string e garante 2 caracteres, preenchendo com 0 à esquerda se necessário. Assim 5 vira "05".

display.textContent = ... — atualiza o texto do elemento com o formato HH:MM:SS:CS (CS = centésimos).

7) Onde ligar os botões no HTML (exemplo simples)

Coloque isto no HTML:

<div id="display">00:00:00:00</div>
<button onclick="iniciar()">Iniciar</button>
<button onclick="parar()">Parar</button>
<button onclick="resetar()">Resetar</button>


Ou, usando event listeners (recomendado):

<button id="startBtn">Iniciar</button>
<button id="stopBtn">Parar</button>
<button id="resetBtn">Resetar</button>

document.getElementById("startBtn").addEventListener("click", iniciar);
document.getElementById("stopBtn").addEventListener("click", parar);
document.getElementById("resetBtn").addEventListener("click", resetar);

8) Possíveis problemas e melhorias (boas práticas)

Timers imprecisos / drift

setInterval(..., 10) não garante execução exatamente a cada 10ms. O navegador e o sistema operacional podem atrasar chamadas, especialmente em abas em segundo plano.

Sua lógica usa Date.now() para calcular elapsedTime, então esse método corrige boa parte do drift (porque não soma incrementos, mas calcula diferença real). Isso é bom — mantém a precisão do tempo real.

Uso de performance.now()

Para maior precisão (alta resolução), pode usar performance.now() (retorna ms com frações, relativo ao início da página). Ex.: const now = performance.now();

Se trocar, tenha consistência (usar performance.now() sempre) e cuidado ao armazenar entre pausas (mesmo princípio: startTime = performance.now() - elapsedTime).

Atualização de 10 ms talvez excessiva

Atualizações a cada 10ms geram muitas repinturas (reflows) no DOM e podem causar CPU alto. Se não precisa de centésimos muito visíveis, use 100ms (a cada décimo de segundo) ou 250ms para interfaces leves.

Se quiser suavidade visual sem muita carga, use requestAnimationFrame para animar a cada frame (~60 FPS), mas calcule tempo com Date.now()/performance.now().

Formatos e localidade

Atualmente está HH:MM:SS:CS. Se preferir HH:MM:SS.CS (ponto antes dos centésimos), ajuste a string de saída.

Estados extras

Poder adicionar disabled nos botões quando já estiver iniciado (evita cliques desnecessários).

Exibir milissegundos mostrando 3 dígitos (000-999) em vez de centésimos, se preferir precisão total.

Acessibilidade (a11y)

Use aria-live="polite" no elemento display para que leitores de tela anunciem atualizações importantes. Ex.: <div id="display" aria-live="polite">...</div>.

9) Versão alternativa (com performance.now() e update via requestAnimationFrame)

Se quiser mais precisão e menos CPU (atualiza só por frame), aqui vai uma alternativa compacta:

let rafId = null;

function iniciar(){
  if(!isRunning){
    startTime = performance.now() - elapsedTime;
    isRunning = true;
    rafId = requestAnimationFrame(loop);
  }
}

function loop(){
  const now = performance.now();
  elapsedTime = now - startTime;
  // calcular e atualizar display (mesma lógica)
  rafId = requestAnimationFrame(loop);
}

function parar(){
  if(isRunning){
    cancelAnimationFrame(rafId);
    elapsedTime = performance.now() - startTime;
    isRunning = false;
  }
}


Essa versão atualiza visualmente na taxa do monitor (normalmente 60 FPS). Use se quiser suavidade e precisão.

10) Exemplo completo final (se preferir copiar tudo)
<!doctype html>
<html>
  <body>
    <div id="display">00:00:00:00</div>
    <button id="startBtn">Iniciar</button>
    <button id="stopBtn">Parar</button>
    <button id="resetBtn">Resetar</button>

    <script>
      const display = document.getElementById("display");
      let timer = null;
      let startTime = 0;
      let elapsedTime = 0;
      let isRunning = false;

      function iniciar(){
          if(!isRunning){
              startTime = Date.now() - elapsedTime;
              timer = setInterval(update, 10);
              isRunning = true;
          }
      }

      function parar(){
          if(isRunning){
              clearInterval(timer);
              elapsedTime = Date.now() - startTime;
              isRunning = false;
          }
      }

      function resetar(){
          clearInterval(timer);
          startTime = 0;
          elapsedTime = 0;
          isRunning = false;
          display.textContent = "00:00:00:00";
      }

      function update(){
          const currentTime = Date.now();
          elapsedTime = currentTime - startTime;

          let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
          let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
          let second = Math.floor((elapsedTime / 1000) % 60);
          let miliseconds = Math.floor((elapsedTime % 1000) / 10);

          hours = String(hours).padStart(2, "0");
          minutes = String(minutes).padStart(2, "0");
          second = String(second).padStart(2, "0");
          miliseconds = String(miliseconds).padStart(2, "0");

          display.textContent = `${hours}:${minutes}:${second}:${miliseconds}`;
      }

      document.getElementById("startBtn").addEventListener("click", iniciar);
      document.getElementById("stopBtn").addEventListener("click", parar);
      document.getElementById("resetBtn").addEventListener("click", resetar);
    </script>
  </body>
</html>*/