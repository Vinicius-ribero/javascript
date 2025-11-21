// //Promise = Um objeto que gerencia operações assíncronas.
// Envolva um objeto Promise em torno de {código assíncrono}
// "Prometo retornar um valor"
// PENDING -> RESOLVID ou REJECTED
// new Promise ((resolve, reject) => {código assíncrono}

// FAÇA ESTAS TAREFAS EM ORDEM

// 1. CAMINHE
// 2. LIMPE A COZINHA
// 3. LEVE O LIXO PARA FORA


//CALLBACK =
/*function walkDog(callback){

    setTimeout(() =>{
        console.log("You walk the dog 🐕");
        callback()
    }, 1500)
}

function cleanKitchen(callback){
    setTimeout(() =>{
        console.log("You clean the Kitchen 🧹");
        callback()
    }, 2500);
}

function takeOutTrash(callback){
    setTimeout(() =>{
        console.log("You take out the trash ♻");
        callback()
    }, 500);
}

walkDog(() =>{
    cleanKitchen(() =>{
        takeOutTrash(() => console.log("You Finished all the chores!"));
    });
});*/


//PROMISES
/*function walkDog(){

    return new Promise((resolve, reject) =>{
    setTimeout(() =>{
            resolve("You walk the dog 🐕");
        }, 1500)

    })
}

function cleanKitchen(){
    
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
           resolve("You clean the Kitchen 🧹");
    }, 2500);
    })
}

function takeOutTrash(){

    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
        resolve("You take out the trash ♻");
    }, 500);
    })
}

walkDog().then(value => {console.log(value); return cleanKitchen()}) 
        .then(value => {console.log(value); return takeOutTrash()})
        .then (value => {console.log(value); console.log("You Finished all the chores!")})*/


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

walkDog().then(value => {console.log(value); return cleanKitchen()}) 
        .then(value => {console.log(value); return takeOutTrash()})
        .then (value => {console.log(value); console.log("You Finished all the chores!")})
        .catch(error => console.error(error));


