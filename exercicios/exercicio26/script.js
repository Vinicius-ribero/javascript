//Operador de progapagação "spread operator" = "..."Permite que um elemento interatável, como um array ou strings, seja expandido em elementos separados; desempacota os elementos.

// let números = [1, 2 , 3 , 4 ,5]
// let máximo = Math.max(...números)
// let minimo = Math.min(...números)

// console.log(minimo)

// let usuário = "vinícius"
// let cartas = [...usuário]

// console.log(cartas) Separa o nome

// let usuário = "vinícius"
// let cartas = [...usuário].join("-")

// console.log(cartas) Ajuntas os nomes

let frutas = ["maçâ", "laranja", "banana"]
let vegetais = ["cenouras", "salsão", "batatas"]

let comidas = [...frutas, ...vegetais, "ovos", "leite"] 

console.log(comidas)