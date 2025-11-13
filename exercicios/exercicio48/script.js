// frutas.push({nome: "uvas", cor: "roxo", calorias: 62});ADICIONA
//frutas.pop()REMOVE O ULTIMO


// frutas.splice(1,2)REMOVERA O NUMEROS SELECIONADOS

/*-----forEach()-----
frutas.forEach(fruta => console.log(fruta.calorias))*/

/*----map()------

const nomes = frutas.map(fruta => fruta.nome);
const cores = frutas.map(fruta => fruta.cor);
const calorias = frutas.map(fruta => fruta.calorias);

console.log(nomes);
console.log(cores);
console.log(calorias); MAPEIA OS NOMES, CORES E CALORIAS ESCOLHIOS PARECIDO COMO UM FILTRO*/

/*------Filter()------

const frutasamarelas = frutas.filter(frutas => frutas.cor === "amarelo")
const baixacaloria = frutas.filter(frutas => frutas.calorias < 100);
const altacaloria = frutas.filter(frutas => frutas.calorias > 100);

console.log(altacaloria) Filtras as variaveis colocados FILTRA AS VARIAVEIS ESCOLHIDAS EX> frutas amarelas: ABACAXI E BANANA*/


const frutas = [{nome: "maça", cor:"vermelho", calorias: 95},
                {nome: "laranja", cor:"laranja", calorias: 45},
                {nome: "banana", cor:"amarelo", calorias: 105},
                {nome: "coco", cor:"white", calorias: 159},
                {nome: "abacaxi", cor:"amarelo", calorias: 37} ];

//---- reduce() -----

const frutasmax = frutas.reduce((max, fruta) => fruta.calorias > max.calorias ? fruta: max);

const frutasmin= frutas.reduce((min, fruta) => fruta.calorias < min.calorias ? fruta: min);

console.log(frutasmax)
console.log(frutasmin)


/*🍎 Código explicado (reduce para encontrar maior e menor)
1. Criação do array de objetos
const frutas = [
  {nome: "maça", cor:"vermelho", calorias: 95},
  {nome: "laranja", cor:"laranja", calorias: 45},
  {nome: "banana", cor:"amarelo", calorias: 105},
  {nome: "coco", cor:"white", calorias: 159},
  {nome: "abacaxi", cor:"amarelo", calorias: 37}
];


Aqui você tem um array chamado frutas, onde cada item é um objeto contendo:

nome → nome da fruta

cor → cor dela

calorias → quantidade de calorias

2. Encontrar a fruta com MAIS calorias
const frutasmax = frutas.reduce((max, fruta) => fruta.calorias > max.calorias ? fruta : max);

O que está acontecendo?
🔹 reduce() funciona assim:

Ele percorre o array fruta por fruta.

max começa sendo a primeira fruta do array.

fruta é a fruta atual enquanto o loop acontece.

A lógica:
Se a fruta atual tiver mais calorias que a que eu considero “máximo”,
então o novo máximo passa a ser essa fruta.
Senão, mantenho o máximo atual.

Explicando o ternário:
fruta.calorias > max.calorias ? fruta : max


Se as calorias da fruta atual forem maiores → retorna fruta

Senão → retorna max

Quando o reduce terminar de comparar tudo, frutasmax será:

{nome: "coco", cor:"white", calorias: 159}


Porque é a fruta com mais calorias.

3. Encontrar a fruta com MENOS calorias
const frutasmin = frutas.reduce((min, fruta) => fruta.calorias < min.calorias ? fruta : min);


Mesma lógica, só que agora verificamos menor valor:

Se a fruta atual tem menos calorias que a fruta que estou guardando como mínima → ela vira a nova menor.

Senão, continuo com a menor atual.

Quando terminar, frutasmin será:

{nome: "abacaxi", cor:"amarelo", calorias: 37}


Porque é a fruta com menos calorias.

4. Exibir os resultados
console.log(frutasmax)
console.log(frutasmin)


Isso imprime:

{ nome: 'coco', cor: 'white', calorias: 159 }
{ nome: 'abacaxi', cor: 'amarelo', calorias: 37 }

🎯 Resumo simples:

reduce() percorre todo o array.

No primeiro, você compara para achar quem tem mais calorias.

No segundo, você compara para achar quem tem menos calorias.

O resultado final de cada reduce é uma única fruta.*/