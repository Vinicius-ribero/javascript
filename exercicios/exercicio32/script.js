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

/*🌟 1) O que é o forEach?

forEach é um método dos arrays que serve para:

✅ Percorrer cada elemento do array
✅ Executar uma função (callback) para cada elemento
✅ Fazer isso de forma simples, sem usar for tradicional

Sintaxe:

array.forEach(callback)


O callback recebe automaticamente:

element → o valor atual

index → a posição no array

array → o próprio array

Exemplo:

frutas.forEach(minhaFuncao)

🌟 2) Explicando seu código parte por parte
Array de frutas
let frutas = ["maca" ,"orange" , "banana", "coco"];


Isso cria um array com 4 strings.

🌟 3) Primeiro forEach: capitalizar
frutas.forEach(capitalizar)


O que acontece aqui:

Ele pega cada fruta

Passa para o callback capitalizar

O callback transforma o elemento

🟦 Função capitalizar
function capitalizar(element,index,array){
    array[index ] = element.charAt(0).toUpperCase() + element.slice(1)
}

📌 O que ela faz:

element.charAt(0) → pega a primeira letra

.toUpperCase() → deixa essa letra MAIÚSCULA

element.slice(1) → pega o restante da palavra

Junta tudo

🔄 Resultado dessa etapa:

"maca" → "Maca"
"orange" → "Orange"
"banana" → "Banana"
"coco" → "Coco"

Ou seja, cada item do array é modificado diretamente.

🌟 4) Segundo forEach: exibir valores
frutas.forEach(display)


Isso manda cada fruta para a função display.

🟦 Função display
function display(element){
    console.log(element)
}

📌 O que ela faz:

Apenas exibe cada elemento no console.

🔄 Resultado no console:
Maca
Orange
Banana
Coco

🌟 5) Outras funções do código (não usadas aqui, mas importantes)

Essas funções demonstram diferentes transformações possíveis:

🟩 upperCase
function upperCase(element, index, array){
    array[index] = element.toUpperCase()
}


Converte tudo para MAIÚSCULO.

🟩 lowercase
function lowercase(element, index, array){
    array[index] = element.toLowerCase()
}


Converte tudo para minúsculo.

🟩 double, triple, square, cube

Essas vinham do seu código anterior:

Elas modificam números multiplicando ou elevando potência.

O importante aqui é:

👉 Todas seguem o mesmo padrão:
👉 Recebem elemento, índice e array
👉 Modificam o array original

🌟 6) Resumo do funcionamento do código

Você tem um array de frutas.

Você usa forEach(capitalizar) para modificar cada fruta.

Depois, usa forEach(display) para mostrar cada uma delas.

As funções auxiliares mostram como transformar strings e números usando callbacks.

🌟 7) Para que serve o forEach (explicação clara)

O forEach serve para:

✔ Iterar (percorrer) arrays
✔ Aplicar uma função a cada elemento
✔ Evitar escrever loops manuais (for / while)
✔ Deixar o código mais limpo e fácil de ler
✔ Modificar o array ou apenas usar os valores
✔ Criar comportamentos diferentes passando callbacks
🌟 8) Onde o forEach pode ser usado?

Ele pode ser usado em situações como:

🔹 Modificar todos os itens do array

(ex.: transformar todas as palavras em maiúsculas)

🔹 Somar valores

(ex.: somar todos números do array)

🔹 Formatamento

(ex.: capitalizar palavras, adicionar prefixos/sufixos)

🔹 Validação de dados

(ex.: conferir se todos os itens são válidos)

🔹 Exibir elementos

(ex.: mostrar lista de produtos no console ou na tela)

🔹 Trabalhar com listas de objetos

(ex.: formatar nomes de usuários, alterar preços, etc.)

🌟 9) Versão resumida no estilo Liz

✔ forEach percorre arrays
✔ executa um callback para cada item
✔ esse callback recebe elemento, índice, array
✔ você pode modificar o array ou apenas ler
✔ deixa o código mais bonito e organizado*/