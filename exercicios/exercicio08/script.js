//math= Objeto embutido que fornece uma coleção de //          propriedades e métodos.


var x = 3;
var y = 2;
var z = 1;

//z = Math.round(x) arredonda um número para o inteiro mais próximo = 3,21 > 3 arredondou o x para 3
//z = Math.floor(x) floor : arredonda um número para baixo = 3.99 > 3 
//z = Math.ceil (x) Ceil :Arredonda um número  para cima = 3.21 > 4
//z = Math.trunc(x)  trunc: Elimina a Parte Decimal de qualquer Número  3,21 > 3
//z = Math.pow(x,y) Pow: Eleva a potência de dois números = x:3  Y:2  = 9
// z = Math.log (x) = Encontra o logaritmo natural da variavel x 
// z = Math.sin(x) = Encontra o Radiano da variavel x = 45
// z = Math.cos(x) = Encontra o cosseno da variavel x = 45
// z = Math.tan(x) = Encontra a tangente da variavel x = 45
// z = Math.abs(x) = transforma o número negativo em positivo -3,21 = 3,21
//z = Math.sign(x) Encontra o sinal de um número

var max = Math.max(x, y,z)
var min = Math.min(x,y,z)

console.log(min)