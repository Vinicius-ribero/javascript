//variavel scope = onde uma variável é reconhecida e acessível (local vs global)
// Local 👉 Função local (ou função interna) é uma função que é declarada dentro de outra função.
// Ela só pode ser usada dentro da função onde foi criada — não é visível nem acessível fora dela.


//LOCAL
// function1()

// function function1(){
//     var x = 1
//     console.log(y)
// }

// function function2(){
//     var y = 2
//     console.log(x)
// }



var x = 3

function2()

function function1(){
    console.log(x)
}

function function2(){
    console.log(X)
}