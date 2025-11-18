const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch (error){
        display.value = "Error";
    }
}

function clearDisplay(){
    display.value = "";
}

// ==============================
//   SUPORTE AO TECLADO
// ==============================
document.addEventListener("keydown", (event) => {

    const key = event.key;

    // NÚMEROS
    if (!isNaN(key)) {
        appendToDisplay(key);
        return;
    }

    // OPERADORES
    if (["+", "-", "*", "/"].includes(key)) {
        appendToDisplay(key);
        return;
    }

    // PONTO DECIMAL
    if (key === ".") {
        appendToDisplay(".");
        return;
    }

    // ENTER = CALCULAR
    if (key === "Enter") {
        calculate();
        return;
    }

    // = também calcula
    if (key === "=") {
        calculate();
        return;
    }

    // BACKSPACE = APAGAR ÚLTIMO
    if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
        return;
    }

    // DELETE = LIMPAR TUDO
    if (key === "Delete") {
        clearDisplay();
        return;
    }
});
