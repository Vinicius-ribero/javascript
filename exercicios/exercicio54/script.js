// console.time() =  Ferramenta que permite medir o tempo   necessário para a execução de um trecho de código ou processo. Ótima para identificar gargalos de desempenho.

//console.time("label");
// console.timeEnd("label)");

/*console.time("teste");


for(let i = 0; i < 1000000000; i++){
    //faça algum código aqui
}

console.timeEnd("teste");*/

function loadData(){

    console.time("loadData")

    for(let i = 0; i < 1000000000; i++){
        //finja carregar alguns dados;
    }

    console.timeEnd("loadData");
}

function processData(){

    console.time("processData");

    for(let i = 0; i < 1000000; i++){
        //fingir que está processando alguns dados;
    } 

    console.timeEnd("processData");
}

loadData()
processData();