// Jogo de adivinhação de números
// a função math.random gera  números aleatorio entre 0 e 1 
// a função math floor arredonda um número para baixo 
//const resultado = Math.floor (Math.random()* (max - min + 1 )) + min Esta é a fomrula para um numero aleatorio fique correto entre  por ex 50 min e 100max



let min = 1;
let max = 100;
let resultado = Math.floor(Math.random() * (max - min + 1)) + min;
let correndo = true;
let attempts = 0; // ✅ variável declarada antes de usar

while (correndo) {
    adivinhe = window.prompt(`Adivinhe um número entre ${min} - ${max}`);
    adivinhe = Number(adivinhe);

    if (isNaN(adivinhe)) {
        window.alert("Por favor, insira um número válido!");
    } 
    else if (adivinhe < min || adivinhe > max) {
        window.alert("Por favor, insira um número dentro do intervalo!");
    } 
    else {
        attempts++; // agora a variável existe

        if (adivinhe < resultado) {
            window.alert("Muito LENTO! Tente novamente!");
        } 
        else if (adivinhe > resultado) {
            window.alert("MUITO RÁPIDO! Tente novamente!");
        } 
        else {
            window.alert(`✅ CORRETO! A resposta era ${resultado}. Você levou ${attempts} tentativa(s)!`);
            correndo = false;
        }
    }
}

