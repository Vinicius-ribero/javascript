// síncrono = executa linha por linha consecutivamente, de forma sequencial. Código que aguarda a conclusão de uma operação.

//assíncrono = permite que múltiplas operações sejam executadas simultaneamente sem espera. Não bloqueia o fluxo de execução, permitindo que o programa continue (operações de E/S, requisições de rede, busca de dados).
//Tratado com: Callbacks, Promises, Async/Awsait

function func1(callback){
    setTimeout(() => {console.log("Task 1")
                        callback()}, 3000);
}

function func2(){
console.log("Task 2");
console.log("Task 3");
console.log("Task 4");
}

console.log("Task 2");
console.log("Task 3");
console.log("Task 4");

func1(func2);


//EXPLICAÇÃO:/*1) O que esse código faz — execução linha a linha

/*O motor JavaScript lê e declara as funções func1 e func2.

Declaração de função é hoisted: o nome e o corpo ficam disponíveis antes da execução das linhas que chamam.

Executa console.log("Task 2"); → imprime Task 2.

Executa console.log("Task 3"); → imprime Task 3.

Executa console.log("Task 4"); → imprime Task 4.

Até aqui tudo é síncrono (linha a linha).

Chama func1(func2);.

Dentro de func1, você chama setTimeout(..., 3000).

setTimeout agenda uma função (callback) para ser executada aproximadamente depois de 3000 ms. Importante: o agendamento é assíncrono — setTimeout retorna imediatamente (na prática retorna um id) e não bloqueia a thread principal.

Então func1 termina sua execução imediatamente (após agendar), e o fluxo principal continua.

Cerca de 3 segundos depois, quando o temporizador expira, a função passada ao setTimeout é colocada na fila de tarefas (task queue). Quando a pilha de chamadas (call stack) estiver vazia, essa função é retirada e executada. Esta função:

faz console.log("Task 1") → imprime Task 1.

chama callback() — que é func2.

func2 executa e imprime Task 2, Task 3, Task 4 (novamente), cada um em sua linha.

Ordem final de saída no console
Task 2
Task 3
Task 4
(3 segundos depois)
Task 1
Task 2
Task 3
Task 4


Observe que as primeiras Task 2/3/4 aparecem imediatamente, as segundas aparecem após ~3s.

2) Síncrono vs Assíncrono — conceito simples e preciso

Síncrono:

Código que é executado linha a linha. Cada instrução espera a anterior terminar.

Exemplo: const x = 2 + 2; console.log(x); — o console.log só executa depois da soma.

Assíncrono:

Operações que são iniciadas agora, mas cujo resultado chega depois (sem travar a execução).

Ex.: setTimeout, requisições de rede, leitura de arquivos (em ambientes Node), timers, eventos do DOM.

Assíncrono permite que a aplicação não congele enquanto espera I/O ou timers.

3) Como tudo funciona no JavaScript (motor/event loop — explicação didática)

Call Stack (pilha de chamadas): onde funções em execução ficam empilhadas e executadas.

Heap: memória para objetos.

Event Loop (laço de eventos): monitora se a call stack está vazia e coleta callbacks da fila (task queue) para executar.

Task Queue / Callback Queue: fila para callbacks de APIs assíncronas (setTimeout, eventos).

Microtask Queue: fila para microtasks (ex.: callbacks de Promise.then, queueMicrotask, MutationObserver). Microtasks têm prioridade sobre tasks: quando a call stack fica vazia, o motor esvazia a microtask queue antes de pegar a próxima task.

Fluxo simplificado:

Executa código síncrono (call stack).

Quando há async (setTimeout, request, Promise, etc), a operação é delegada (API do browser/Node) e o callback é agendado.

Quando call stack está vazia, event loop processa microtasks (Promises) e depois tasks (setTimeout callbacks), e assim por diante.

4) Problemas do padrão callback e alternativas

Callback hell / inversion of control: muitos callbacks aninhados tornam o código difícil de ler e tratar erros.

Alternativas modernas:

Promises — encadeamento .then().catch()

async / await — sintaxe mais parecida com síncrono sobre Promises

Observables (RxJS) — para streams complexos (fora do escopo profundo aqui)

5) Exemplos práticos (comparando patterns)
A) Seu exemplo com callback (já mostrado)

Ordem: logs síncronos → setTimeout → depois logs do timeout + func2.

B) Mesmo comportamento com Promise (simulando delay)
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function example() {
  console.log("Task 2");
  console.log("Task 3");
  console.log("Task 4");

  await wait(3000);   // pausa async sem bloquear a thread
  console.log("Task 1");

  console.log("Task 2");
  console.log("Task 3");
  console.log("Task 4");
}

example();


await wait(3000) pausa apenas a execução da função example de forma assíncrona; não bloqueia o resto do programa.

Saída: mesma ordem do seu código.

C) Promise + then (microtask vs task)
console.log('start');

Promise.resolve()
  .then(() => console.log('promise then'));

setTimeout(() => console.log('timeout'), 0);

console.log('end');


Ordem provável:

start
end
promise then
timeout


Explicação: .then() cria uma microtask (vai rodar antes do setTimeout), mesmo com setTimeout(...,0).

D) Conversão do seu callback para Promise
function func1Promise() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Task 1");
      resolve();
    }, 3000);
  });
}

function func2() {
  console.log("Task 2");
  console.log("Task 3");
  console.log("Task 4");
}

console.log("Task 2");
console.log("Task 3");
console.log("Task 4");

func1Promise().then(func2);


Mesma ordem de saída, mas usando Promise em vez de passar callback direto.

E) Usando async/await (mais legível)
async function run() {
  console.log("Task 2");
  console.log("Task 3");
  console.log("Task 4");

  await func1Promise(); // espera a promessa se resolver
  func2();
}

run();

6) Observações práticas importantes

setTimeout com 3000 ms não garante exatamente 3.000 ms de atraso para execução; garante que a callback não será executada antes de ~3s, mas pode demorar mais se a call stack estiver ocupada.

Uso de display: flexbox (em CSS) está errado — só uma observação relacionada às suas mensagens anteriores.

Evite misturar muitos callbacks aninhados; prefira Promises / async-await para leitura e tratamento de erros (try/catch em async).

Promise.resolve().then(...) roda antes de setTimeout(..., 0) por causa da microtask queue.

7) Pequeno “mapa mental” para saber qual usar

Tarefa síncrona e curta: execute diretamente (ex.: cálculo).

Operação I/O (HTTP, DB, arquivos): use async (Promises / async-await).

Timers: setTimeout, setInterval (retornar id para limpar).

Fluxos contínuos (eventos, streams): callbacks ou Observables.

Código encadeado com dependências: Promises / async-await (mais limpo).

8) Resumo final (em poucas linhas)

Seu código primeiro imprime Task 2/3/4, agenda um timer de 3s, e só depois (após 3s) imprime Task 1 e novamente Task 2/3/4.

setTimeout é assíncrono: não bloqueia; agenda a execução.

JavaScript é single-threaded (no contexto do JS principal em browser), mas suporta concorrência via event loop, callbacks, Promises e APIs do ambiente.

Use Promises / async-await para código assíncrono mais legível e para tratar erros com catch / try...catch.*/