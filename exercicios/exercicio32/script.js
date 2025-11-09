// O método é usado para iterar sobre os elementos de um array e aplicar uma função específica (callback) a cada elemento.

// array.forEach(callback)


// let number = [1, 2, 3 ,4 ,5];

// number.forEach(square)
// number.forEach(display)

// function double(element, index , array){
//     array[index]= element * 2;
// }

// function triple(element,index,array){
//     array[index] = element * 3;
// }

// function square(element,index , array){
//     array[index] = Math.pow(element, 2 )
// }

// function cube(element, index, array){
//     array[index] = Math.pow(element, 3)
// }

// function display(element){
//     console.log(element)
// }

let frutas = ["maca" ,"orange" , "banana", "coco"];

frutas.forEach(capitalizar)
frutas.forEach (display)

function upperCase(element, index, array){
    array[index] = element.toUpperCase()
}

function lowercase(element, index, array){
    array[index] = element.toLowerCase()
}

function capitalizar(element,index,array){
    array[index ] = element.charAt(0).toUpperCase() + element.slice(1)
}

function display(element){
    console.log(element)
}