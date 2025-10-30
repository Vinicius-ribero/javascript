// const = uma variável que não pode ser alterada.
//Pi (\(\pi \)) é uma constante matemática que representa a proporção entre a circunferência de um círculo e o seu diâmetro. É um número irracional, o que significa que tem um número infinito de casas decimais que não se repetem, começando com aproximadamente \(3,14159\)



const PI = 3.14159;
var radio;
var circunferência;


document.getElementById("entrar").onclick = function(){
    radio= document.getElementById("Texto").value
    radio = Number(radio)
    circunferência =2 *PI * radio; 
    document.getElementById("H3").textContent = circunferência +"cm"
}