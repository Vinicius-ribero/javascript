//.map = aceita uma função de retorno de chamada e aplica essa função a cada elemento de um array, retornando em seguida um novo array.

/*O que é split em JavaScript?
O split JavaScript é uma ferramenta fundamental que permite dividir uma string em partes menores com base em um separador especificado. Esse método oferece um grande poder na manipulação e processamento de dados em linguagem JavaScript.*/

//Math.pow Calcula o numero elevada a potencia

// const numbers = [1, 2, 3, 4, 5 ]
// const squares = numbers.map(square)
// const cubes = numbers.map(cube)

// console.log(cubes)

// function square (element){
//     return Math.pow(element, 2)
// }

// function cube(element){
//     return Math.pow(element, 3)
// } 


// const estudantes = ["bobesponja", "Patrick", "LulaMolusco", "Sandy"];
// const estudantesUpper = estudantes.map(upperCase);
// const estudanteslower = estudantes.map(lowerCase);


// console.log(estudanteslower)

// function upperCase(element){
//     return element.toUpperCase()
// }

// function lowerCase(element){
//     return element.toLowerCase()
// }

function datasdeformato(element){
    const partes = element.split("-");
    return `${partes[1]}/${partes[2]}/${partes[0]}`;  
}

const datas = ["2025-11-07", "07-11-2025", "2026-3-30"];
const datasdeformatoArray = datas.map(datasdeformato);

console.log(datasdeformatoArray);
