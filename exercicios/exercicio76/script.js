// // Async/Await = Async = faz uma função retornar uma promessa
// await = faz uma função assíncrona esperar por uma promessa

// permite escrever código assíncrono de forma síncrona. Async não possui parâmetros de resolução ou rejeição. Tudo após Await é colocado em uma fila de eventos.

function walkDog(){

    return new Promise((resolve, reject) =>{
    setTimeout(() => {

        const dogwalked = true;

        if(dogwalked){
            resolve("You walk the dog 🐕");
        }
        else{
            reject("You DIDN 'T walk the dog")
         } 
        }, 1500)

    })
}

function cleanKitchen(){
    
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{

            const kitchenCleaned =true;
            
            if(kitchenCleaned){
                resolve("You clean the kitchen 🧹")
            }
            else{
                reject("You DIDN'T clean the kitchen!")
            }
        }, 2500);
    })
}

function takeOutTrash(){

    return new Promise((resolve, reject) =>{
        setTimeout(() =>{

            const trashTakenOut = true;

            if(trashTakenOut){
                resolve("You take out the trash ♻");
            }
            else{
                reject("You DIDN'T take out the trash")
            }
        }, 500);
    })
}

async function doChores(){

    try{
     const walkDogResult =  await walkDog()
    console.log(walkDogResult)

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("You finished all the chores!")   
    }
    catch(error){
        console.error(error)
    }
}

doChores()




/*
🌙 O que é Async/Await?

Async/Await é uma forma moderna e mais fácil de trabalhar com Promises no JavaScript.

Você já sabe que uma Promise representa uma operação assíncrona (alguma coisa que demora pra acontecer, como setTimeout, requisições, leitura de arquivos, etc).

Mas quando você usa .then() e .catch() pode ficar confuso, principalmente quando precisa fazer várias operações em sequência.

Por isso surgiu o Async/Await, que deixa o código mais limpo e com "cara" de código síncrono.

🧠 Como funciona?
👉 async

Quando você coloca async antes de uma função, ela passa automaticamente a retornar uma Promise.

Exemplo:

async function teste() {
   return 10;
}


Equivale a:

function teste() {
   return Promise.resolve(10);
}

👉 await

O await espera a Promise terminar antes de continuar o código.

É como se você dissesse:
“JavaScript, pausa aqui e só continue quando isso terminar.”

Importante:
Você SÓ pode usar await dentro de uma função async.

⚙️ Agora vamos entender o seu caso passo a passo

Você tem três tarefas:

🐕 walkDog

🧹 cleanKitchen

♻ takeOutTrash

Cada uma delas é uma Promise que demora um tempo diferente para resolver.

🔄 Vamos ver o fluxo do seu doChores():
async function doChores(){
    try{
        const walkDogResult = await walkDog()
        console.log(walkDogResult)

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finished all the chores!")   
    }
    catch(error){
        console.error(error)
    }
}

🏁 Explicando linha por linha
1️⃣
const walkDogResult = await walkDog();


O JS espera 1.5 segundos.
Como dogwalked = true, a Promise resolve e retorna:

"You walk the dog 🐕"

2️⃣
const cleanKitchenResult = await cleanKitchen();


O código só roda essa linha depois que a anterior terminou, mesmo que cleanKitchen demore mais (2.5 segundos).

Retorno:

"You clean the kitchen 🧹"

3️⃣
const takeOutTrashResult = await takeOutTrash();


O JS espera 0.5 segundos e retorna:

"You take out the trash ♻"

4️⃣ Quando tudo terminou:
You finished all the chores!

❤️ Por que usar Async/Await aqui?

Porque fica MUITO mais organizado do que encadear .then() .then() .then().

Esse código:

const r1 = await walkDog();
const r2 = await cleanKitchen();
const r3 = await takeOutTrash();


É equivalente a:

walkDog()
 .then(r1 => {
    cleanKitchen().then(r2 => {
      takeOutTrash().then(r3 => {
         console.log("finished");
      })
    })
 })


Viu como ficaria HORRÍVEL?

Async/Await deixa tudo mais limpo, parecido com código síncrono, mas sem travar o JavaScript.

⚠️ E o try/catch?

Ele captura qualquer erro das Promises:

catch(error){
    console.error(error)
}


Se alguma Promise der reject, o fluxo pula direto para o catch.

🌟 Resumo rápido (estilo cola)

async → transforma a função em uma Promise

await → espera a Promise terminar

Deixa o código assíncrono com cara de síncrono

Funciona melhor que .then quando há várias etapas em sequência

try/catch captura rejeições de Promise*/