//Instruções condicionais = (if) se uma condição for verdadeira,  execute algum código; caso contrário, faça outra coisa (else).     

/*var idade = 13

if(idade >= 18){
    console.log("Você tem idade suficiente para acessar este site.")
}
else{
    console.log("Você deve ter +18 anos para entrar para este site")
}
    */

/*var tempo = 9

if(tempo < 12 ){
    console.log("Bom dia!")
}
else if(tempo < 18){
    console.log("Boa Tarde!")
} else{
    console.log("Boa Noite!")
}
    */

/*
var estudante = false

if(estudante){
    console.log("Você está estudando!")
} else{
    console.log("Você não está estudando")
}
     */


/*var idade = 19
var CNH =  true

if(idade >= 18){
    console.log("Você tem idade o suficiente para dirigir")

    if(CNH){
        console.log("Você pode ter a sua CNH")
    }
    else{
        console.log("Você não pode ter sua CNH")
    }
}else{
    console.log("Voce prescisa ter mais de 18 anos para dirigir")
}

*/
/*var idade = 19



 if(idade >= 100) {
    console.log ("Você está velho demais para acessar este site ")
} else if(idade == 0){
    console.log("Você não pode entrar , Você acabou nascer")
}
 else if(idade >= 18){
    console.log("Você tem idade o suficiente para entrar neste site")
} else if(idade < 0 ){
    console.log(" Sua idade não pode ser igual 0")
} 
else{
    console.log("Você prescisa ter +18 para entrar neste site")
}*/


const texto = document.getElementById("texto")
const enviar = document.getElementById("enviar")
const resultado = document.getElementById("resultado")
var idade;

enviar.onclick = function(){
    idade = texto.value
     idade = Number(idade)   
    
    if(idade >= 100) {
        resultado.textContent = `Você está velho demais para acessar este site `
    }else if(idade == 0){
        resultado.textContent = `Você não pode entrar , Você acabou nascer`
    }
    else if(idade >= 18){
        resultado.textContent = `Você tem idade o suficiente para entrar neste site`
    }else if(idade < 0 ){
        resultado.textContent = `Sua idade não pode ser igual 0`
    } 
    else{
        resultado.textContent = `Você prescisa ter +18 para entrar neste site`
    }   

}


