//CALLBACK HELL = Situação em JavaScript onde callbacks são aninhados dentro de outros callbacks a tal ponto que o código fica difícil de ler. Padrão antigo para lidar com funções assíncronas. Use Promises + async/await para evitar o inferno dos callbacks.

function task1(callback){
    setTimeout(() => {
        console.log("Task 1 complete");
        callback()
    }, 2000);
}

function task2(callback){
    setTimeout(() => {
        console.log("Task 2 complete");
        callback()
    }, 1000);
}

function task3(callback){
     setTimeout(() => {
        console.log("Task 3 complete");
        callback()
    }, 3000);
}

function task4(callback){
     setTimeout(() => {
        console.log("Task 4 complete");
        callback()
    }, 1500);
}


task1(() => {
    task2(() =>{
        task3(() =>{
            task4(() => console.log("All tasks complete"));
        })
    })
})

// task1()
// task2();
// task3();
// task4();
// console.log("ALL tasks complete")



/*✅ O que são callbacks?

Um callback é simplesmente uma função que você passa como argumento para outra função, para que ela seja chamada depois que uma ação terminar.

Exemplo simples:

doSomething(() => {
  console.log("Terminou!");
});


Callbacks existem para resolver um problema:
👉 como esperar uma tarefa demorar para terminar sem travar o JavaScript?

Como JS é assíncrono, funções como setTimeout, requisições HTTP, leitura de arquivos etc. não terminam na hora, então você precisa de um jeito de dizer:

➡️ “Quando você terminar, execute isso aqui.”

Esse "isso aqui" é o callback.

📌 Seu código — 100% correto

Você criou:

task1 demora 2s

task2 demora 1s

task3 demora 3s

task4 demora 1.5s

E quis executá-las na ordem, mesmo que tenham tempos diferentes.

Então você usou callbacks aninhados assim:

task1(() => {
    task2(() =>{
        task3(() =>{
            task4(() => console.log("All tasks complete"));
        })
    })
})


Isso funciona.
Esse é o jeito original (antigo) que JS usava para controlá-las.

MAS…

❌ O que é Callback Hell?

É quando você precisa esperar várias funções assíncronas terminarem uma depois da outra, e para isso você começa a aninhar vários callbacks dentro de callbacks.

Visualmente fica assim:

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                task5(() => {
                    ...
                })
            })
        })
    })
})


Isso parece:

📌 Código em forma de “escada”
📌 Difícil de ler
📌 Difícil de debugar
📌 Difícil de tratar erros
📌 Se você esquecer um parêntese → céu desaba 😅

Isso é o callback hell.

Seu código é um exemplo clássico.

🔥 Por que callbacks eram usados assim?

Antes de Promises, async/await e fetch, o JavaScript só tinha callbacks para lidar com:

setTimeout

AJAX

Banco de dados

Eventos

e qualquer coisa que demorasse para finalizar

Ou seja:

👉 Callbacks são a base original da programação assíncrona no JS.
Eles serviam para garantir que uma ação só rodasse após a outra terminar.

⚡ Por que callback hell é ruim?

Porque conforme o código cresce:

aumenta o número de níveis

aumenta a confusão

fica impossível ler

difícil manter

e extremamente fácil errar estrutura

Por isso a comunidade criou alternativas mais modernas.

🤝 O que substituiu o Callback Hell?

Promises

task1()
  .then(task2)
  .then(task3)
  .then(task4)
  .then(() => console.log("All tasks complete"));


async / await (melhor e mais moderno)

async function runTasks() {
   await task1();
   await task2();
   await task3();
   await task4();
   console.log("All tasks complete");
}

runTasks();


Com isso, o código fica limpo, legível e fácil de manter.

🎯 Resumo rápido — para nunca mais esquecer
✔ Callback:

Função passada como argumento para ser executada depois que algo assíncrono termina.

✔ Callback Hell:

Quando você precisa encadear várias operações assíncronas e os callbacks vão ficando aninhados em camadas, criando código difícil de ler.

✔ Por que existe?

Para garantir a ordem de execução antes das Promises e do async/await existirem.

✔ Hoje em dia?

Preferimos Promises e async/await, porque deixam o código limpo.*/