const texto = document.getElementById("texto");
const enviar = document.getElementById("enviar");
const resultado = document.getElementById("resultado");
var idade;

enviar.onclick = function(){
    idade = texto.value;
    idade = Number(idade);

    if(idade >= 100) {
        resultado.textContent = `Você está velho demais para acessar este site`;
    } else if (idade == 0 ){
        resultado.textContent = `Você prescisa colocar uma idade para acessar este site`; 
    } else if(idade >= 18){
        resultado.textContent = `Bem vindo, Você tem idade o suficiente para entrar neste site`;
    } else if (idade < 0){
        resultado.textContent = `Coloque uma idade valida`;
    }else {
        resultado.textContent = `Você prescisa ter +18 para entrar neste site`;
    }
}