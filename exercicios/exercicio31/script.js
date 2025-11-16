// callback = uma função que é passada como argumento para outra função usada para lidar com operações assíncronas: 
// 1- ler um arquivo
// 2- requisições de rede 3- interagir com bancos de dados
// "Ei, quando terminar, chame isso de próximo"

// ola(leave);

// function ola(callback){
//     console.log("ola!")
//     callback()
// }

// function leave(){
//     console.log("leave")
// }

// function adeus(){
//     console.log("adeus!")
// }



/*✅ O que é um Callback?

Um callback é uma função que você passa como argumento para outra função, para que ela seja executada depois, em um momento específico.

Ou seja:

➡️ Callback = uma função chamada de volta mais tarde (“call back”).
➡️ Você entrega a função para outra função, e ela decide quando chamá-la.

✅ Para que serve um callback?

Callbacks servem para:

1. Executar algo depois de outra coisa

Quando você não sabe quanto tempo algo vai levar (exemplo: carregar dados, esperar tempo, acessar API), você usa um callback para dizer:

“Quando terminar, execute ESTA função.”

2. Evitar repetição de código

Você cria uma função genérica e passa diferentes callbacks para personalizar o comportamento.

3. Controlar código assíncrono

Hoje usamos mais promises e async/await, mas callbacks foram o primeiro jeito de lidar com tarefas assíncronas.

4. Permitir funções flexíveis

Funções que aceitam callbacks conseguem fazer tarefas bem diferentes dependendo do callback que recebem.

🧠 Resumo simples, no estilo Liz:

Callback é quando uma função usa outra função como argumento
e então executa essa função no momento certo.

✅ Exemplos práticos

Agora vamos ver exemplos fáceis e claros.*/

//📌 EXEMPLO 1 — Função simples com callback
/*function fazerAlgo(depois) {
    console.log("Estou fazendo algo importante...");
    depois(); // Aqui o callback é executado
}

fazerAlgo(function() {
    console.log("Agora o callback foi chamado!");
});*/


/*O que acontece:

fazerAlgo() roda

Depois ela chama a função enviada como callback

Resultado:

Estou fazendo algo importante...
Agora o callback foi chamado!*/

//📌 EXEMPLO 2 — Callback para personalizar comportamento
function cumprimentar(nome, callback) {
    console.log("Olá " + nome);
    callback();
}

cumprimentar("Vinicius", function() {
    console.log("Bem-vindo ao sistema!");
});


/*Callback permite que você mude o que acontece depois da saudação.

📌 EXEMPLO 3 — Callback assíncrono com setTimeout*/
/*setTimeout(function() {
    console.log("Isso apareceu depois de 2 segundos");
}, 2000);


//Aqui o callback só executa depois do tempo acabar.

//📌 EXEMPLO 4 — Callback para processar resultado
function calcular(a, b, callback) {
    let resultado = a + b;
    callback(resultado);
}

calcular(5, 10, function(r) {
    console.log("O resultado é:", r);
});*/


/*Callback recebendo valores.

🔥 Quando usamos callbacks na prática?

✔ Em animações
✔ Em eventos (click, hover, teclado)
✔ Em timers (setTimeout, setInterval)
✔ Em requisições a servidores
✔ Em leitura de arquivos
✔ Para processar resultados em funções reutilizáveis

💡 Explicação curta e fácil (versão Liz)

Callback é uma função passada como parâmetro.

A função principal chama ela em algum momento.

Serve para sincronizar, organizar e personalizar comportamentos.*/