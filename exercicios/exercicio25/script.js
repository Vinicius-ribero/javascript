// Array = Uma estrutura semelhante a uma variável que pode armazenar mais de um valor.

// let frutas = ["maçã", "laranja", "banana", "coco"]

// frutas[3] = "coco" Metodo 1
// frutas.push("coco") Push = faz o elemento "coco"
// frutas.pop("coco") Pop = Remove os ultimos elementos
// frutas.unshift("manga") unshift = Coloca o elemento no inicio 
// frutas.shift("coco") Remove o elemento "maça" do começo


// console.log(frutas[0])
// console.log(frutas[1])
// console.log(frutas[2])
// console.log(frutas[3])

// let numfrutas =  frutas.length
// let index = frutas.indexOf("maçã")

// console,console.log(index);

let frutas = ["maçã", "laranja", "banana", "coco"]

for(let i = 0; i < frutas.length; i+=2){
    console.log(frutas[i])
}

