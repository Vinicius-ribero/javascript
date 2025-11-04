// PROGRAMA DE CONVERSÃO DE TEMPERATURA

const textbox = document.getElementById("textbox");
const fahrenheit = document.getElementById("fahrenheit");
const celsius = document.getElementById("celsius");
const resultado = document.getElementById("resultado");
let temp;

function converter() {
    if (fahrenheit.checked) {
        temp = Number(textbox.value);
        temp = (temp * 9/5) + 32;
        resultado.textContent = temp.toFixed(1) + "°F";
    } 
    else if (celsius.checked) {
        temp = Number(textbox.value);
        temp = (temp - 32) * (5/9);
        resultado.textContent = temp.toFixed(1) + "°C";
    } 
    else {
        resultado.textContent = "Selecione a unidade";
    }
}
