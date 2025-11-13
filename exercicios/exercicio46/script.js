//Desestruturação = extrair valores de arrays e objetos e atribuí-los a variáveis ​​de forma conveniente.
//                [] = para realizar a desestruturação de arrays
//                {} = para realizar a desestruturação de objetos
//                 5 exemplos

//  ---------EXAMPLE 1 -----------
// Trocar o valor de duas variáveis / troca o valor da variavel


/*let a = 1;
let b = 2;

[a,b] = [b, a]

console.log(a)
console.log(b)*/

//-------EXAMPLE2-------
// Trocar 2 elementos em um array/Inversão e troca de posicionamento

/*const cores = ["vermelho", "verde", "azul", "preto", "branco"];

[cores[0], cores[4]] = [cores[4], cores[0]];

console.log(cores);*/

//------EXEMPLO3-----
//atribuindo elementos do array a variáveis

/*const cores = ["vermelho", "verde", "azul",  "preto", "branco"];

const [primeiraCor, segundaCor, terceiraCor, ...extraCores] = cores;

console.log(primeiraCor);
console.log(segundaCor);
console.log(terceiraCor);
console.log(extraCores)*/

//------EXEMPLO4-----
//extrair valor de objetos/Adicionou um valor que não tinha no caso o patrick nao tinha serviço;

/*const pessoa1 = {
    primeiroNome: "BobEsponja",
    ultimoNome: "CalçaQuadrada",
    idade: 30,
    trabalho: "cozinheiro de fritura",
}

const pessoa2 = {
    primeiroNome: "Patrick",
    ultimoNome: "Estrela",
    idade: 34,
}

const {primeiroNome, ultimoNome, idade, trabalho="desempregado"} = pessoa2;

console.log(primeiroNome);
console.log(ultimoNome);
console.log(idade);
console.log(trabalho);*/

//--------EXEMPLO5------
// desestruturar em parâmetros de função

function displayPessoa({primeiroNome, ultimoNome, idade, trabalho="desempregado"}){
    console.log(`name: ${primeiroNome} ${ultimoNome}`)
    console.log(`idade: ${idade}`)
        console.log(`trabalho: ${trabalho}`);
}

const pessoa1 = {
    primeiroNome: "BobEsponja",
    ultimoNome: "CalçaQuadrada",
    idade: 30,
    trabalho: "cozinheiro de fritura",
}

const pessoa2 = {
    primeiroNome: "Patrick",
    ultimoNome: "Estrela",
    idade: 34,
}

const {primeiroNome, ultimoNome, idade, trabalho="desempregado"} = pessoa2;

console.log(primeiroNome);
console.log(ultimoNome);
console.log(idade);
console.log(trabalho);

displayPessoa(pessoa1)