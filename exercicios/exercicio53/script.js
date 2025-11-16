//SETTIMEOUT() = Função em Java que permite agendar a execução de uma função após um determinado período de tempo (em milissegundos). Os tempos são aproximados (variam de acordo com a carga de trabalho do ambiente de tempo de execução do Javascript).


/*function digaOlá(){
    window.alert("Olá")
}

setTimeout(digaOlá, 3000);*/

//setTimeout(function(){window.alert("Olá")},3000);

//CLEARTIMEOUT (timeoutId) = Pode cancelar um tempo limite antes que ele seja acionado.


/*const  timeoutId = setTimeout(() => window.alert("Olá"), 3000);

clearTimeout(timeoutId);*/

let timeoutId;

function startTimer(){
    timeoutId = setTimeout(() => window.alert("Olá seja Muito Bem-Vindo!"), 3000);
    console.log("STARTED")
}


function clearTimer(){
    clearTimeout(timeoutId);
    console.log("CLEARED");
}
