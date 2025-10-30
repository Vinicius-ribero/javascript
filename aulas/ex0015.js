var num = [5, 8, 2 ,9 ,3]
num.push(1)  //ACRESCENTA O VALOR 1 
num.sort()   //ORDENA OS NÚMEROS 
console.log(num)
console.log(`O vetor tem ${num.length} posições `)
console.log(`O primeiro valor do vetor é ${num [1]}`)
var pos = num.indexOf(4)
if(pos == -1){
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 4 esta na posição ${pos}`)
}
/*console.log(`O valor 8 esta na posição ${pos}`) REFERENTE A POSIÇÃO DE NUM.INDEXOF (8) QUÉ 4*/