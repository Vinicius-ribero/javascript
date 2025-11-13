//.reduce() = Reduzir os elementos de uma matriz a um único valor.

//👉 Math.max() é uma função do JavaScript que retorna o maior número entre os valores passados como argumento.

/* const preços = [5, 30 ,10 ,25 , 15 ,20];

 const total = preços.reduce(soma);

 console.log(`$${total.toFixed(2)}`)

 function soma(acumulador ,elemento){
    return acumulador +  elemento
 } 

Padrão de conta do resultado U$ 105 = 5 + 30 = 35 + 10 = 45 45 + 25 = 70 70 + 15 = 85 85 + 20 = $105  */

const notas = [75 , 50 , 90, 80 , 65 , 95];

const máximo = notas.reduce(obterMax);
const minímo = notas.reduce(obterMin);

console.log(minímo);

function obterMax( acumulador, elemento){
    return Math.max(acumulador, elemento);
}

//Pega a pontuação máxima das notas = 95 

function obterMin( acumulador, elemento){
    return Math.min(acumulador, elemento);
}

//Pega a pontuação miníma das notas = 50


/*1) Explicação linha a linha (classe Person + trecho Retangulo comentado)

Vou tomar como referência o código que você enviou antes — a class Person completa e o bloco Retangulo comentado. Cada trecho vem com o que faz e porquê.

class Person{


Declaração da classe Person. Em JS, class é uma forma de definir um "molde" (modelo) para criar objetos com propriedades e métodos.

    constructor(firstName, lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age
    }


constructor(...) é executado quando você cria new Person(...).

Dentro do construtor você atribui aos setters (this.firstName = firstName) — observe: isso chama os set definidos abaixo, não cria _firstName diretamente. Assim você já valida os valores ao criar a instância.

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0 ){
            this._firstName = newFirstName
        }else{
            console.error(" o primeiro nome deve ser uma string não vazia ")
        }
    }


set firstName(...) é o setter para firstName.

Valida se newFirstName é string e não vazia.

Se válido, guarda em _firstName (convenção: usar _ para a propriedade interna).

Se inválido, mostra um erro no console e não define _firstName.

    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0 ){
            this._lastName = newLastName
        }else{
            console.error(" O ultimo nome deve ser uma string não vazia ")
        }
    }


Mesmo padrão para o sobrenome (lastName): valida e guarda em _lastName.

    set age(newAge){
        if(typeof newAge === "number" && newAge >=0){
            this._age = newAge;
        }
        else{
            console.error("A idade deve ser um número não negativo.")
        }
    }


Setter para age: verifica se é number e não negativo; guarda em _age caso ok; senão imprime erro.

    get firstName(){
        return this._firstName
    }

    get lastName(){
        return this._lastName
    }


get firstName() e get lastName() retornam os valores internos _firstName e _lastName.

Leitura acontece via person.firstName e person.lastName.

    get fullName(){
        return this._firstName + "" + this._lastName
    }


get fullName() cria uma propriedade virtual (não armazenada) que concatena nome + sobrenome.

Observação: "" é string vazia — falta espaço entre os nomes. Melhor usar " " se quiser "Vinicius Soares".

    get age(){
        return this._age;
    }
}


Getter para age, retorna _age.

const person = new Person("Vinicius" ,"Soares", 19);


Cria uma instância. Fluxo interno:

this.firstName = "Vinicius" → chama set firstName → define _firstName.

this.lastName = "Soares" → chama set lastName → define _lastName.

this.age = 19 → chama set age → define _age.

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);


Cada console.log aciona os getters e imprime:

Vinicius

Soares

ViniciusSoares ← (sem espaço por causa do "")

19

Trecho comentado: Retangulo (resumo do que faz)

O trecho comentado mais abaixo cria setters que validam width e height, getters que formatam com toFixed(1) e adicionam "cm" e um get area() que devolve área formatada com cm^2.

Exemplos de saída com new Retangulo(3,4):

retangulo.width → "4.0cm"

retangulo.height → "3.0cm"

retangulo.area → "12.0cm^2"

Obs: no construtor o primeiro parâmetro foi height e o segundo width (atenção à ordem ao instanciar).

2) reduce — o que é, pra que serve e o que você pode criar com ele
🔎 O que é reduce?

Array.prototype.reduce é um método que reduz um array a um único valor (número, objeto, string, outro array, etc.) aplicando uma função acumuladora passo a passo.

Assinatura básica:

arr.reduce((acumulador, elementoAtual, indice, array) => { ... }, valorInicial)


acumulador: o valor que você está construindo (é retornado para a próxima iteração).

elementoAtual: o item do array na iteração atual.

valorInicial: (opcional) valor inicial do acumulador. Recomenda-se sempre passar.

✨ Por que usar reduce?

Somar valores, multiplicar, construir objetos, agrupar itens, contar ocorrências, achatamento (flatten), encadear promessas, compor funções, etc.

É extremamente flexível — praticamente qualquer computação que combine/transforme uma lista em um valor pode ser feita com reduce.

Exemplos práticos (com explicação)
1) Somar números (caso mais simples)
const nums = [1, 2, 3, 4];
const soma = nums.reduce((acc, n) => acc + n, 0);
console.log(soma); // 10


acc começa em 0. Para cada número, soma e retorna o novo acc.

2) Produto (multiplicação)
const produto = nums.reduce((acc, n) => acc * n, 1);
console.log(produto); // 24

3) Encontrar máximo
const max = nums.reduce((acc, n) => (n > acc ? n : acc), -Infinity);
console.log(max); // 4

4) Contar ocorrências (frequência)
const pets = ['dog', 'cat', 'dog', 'fish', 'cat'];
const freq = pets.reduce((acc, pet) => {
  acc[pet] = (acc[pet] || 0) + 1;
  return acc;
}, {});
console.log(freq); // { dog: 2, cat: 2, fish: 1 }


Útil para agrupar e contar itens.

5) Agrupar por chave (ex.: agrupar produtos por categoria)
const produtos = [
  { id: 1, cat: 'eletronico' },
  { id: 2, cat: 'vestuario' },
  { id: 3, cat: 'eletronico' },
];

const agrupado = produtos.reduce((acc, p) => {
  (acc[p.cat] ||= []).push(p);
  return acc;
}, {});
/* agrupado = {
  eletronico: [{...},{...}],
  vestuario: [{...}]
} */

/*6) Achatar arrays (flatten)
const listas = [[1,2], [3,4], [5]];
const achatado = listas.reduce((acc, l) => acc.concat(l), []);
console.log(achatado); // [1,2,3,4,5]


Em ES2019+ use flat(), mas reduce é a maneira clássica.

7) Transformar array em mapa/objeto por id
const byId = produtos.reduce((acc, p) => {
  acc[p.id] = p;
  return acc;
}, {});
// acesso rápido: byId[2]

8) Pipeline / composição de funções
const funcs = [
  x => x + 1,
  x => x * 2,
  x => x - 3
];

const composed = (value) => funcs.reduce((acc, fn) => fn(acc), value);
console.log(composed(5)); // ((5+1)*2)-3 = 9

9) Encadear promessas sequencialmente
const tasks = [
  () => Promise.resolve(1),
  (prev) => Promise.resolve(prev + 2),
  (prev) => Promise.resolve(prev * 3)
];

tasks.reduce((p, task) => p.then(task), Promise.resolve())
  .then(result => console.log(result));


Executa tarefas assíncronas em sequência, usando o acumulador como Promise.

10) Reduzir com estado complexo (ex.: carrinho de compras)
const carrinho = [
  { preco: 10, qtd: 2 },
  { preco: 5, qtd: 4 }
];

const resumo = carrinho.reduce((acc, item) => {
  acc.totalItems += item.qtd;
  acc.totalPreco += item.preco * item.qtd;
  return acc;
}, { totalItems: 0, totalPreco: 0 });

console.log(resumo); // { totalItems: 6, totalPreco: 40 }

💡 Dicas / boas práticas com reduce

Sempre passar valorInicial (evita surpresas quando o array estiver vazio e torna o tipo do acumulador explícito).

Se a função acumuladora ficar muito complexa, extraia-a para uma função nomeada (melhor leitura).

Para operações simples (soma, max), você pode usar Math.max(...arr) ou arr.reduce — escolha o mais legível.

Prefira métodos sem efeitos colaterais: reduce deve retornar o acumulador (e não modificar outro estado externo) — isso facilita raciocinar e testar.

Quando o objetivo é transformar 1:1 (map), use map. Quando é filtrar, use filter. reduce é ideal quando o resultado não é um simples mapeamento ou filtro — ele agrega.

⚠️ Exemplos práticos que você pode criar com reduce no seu dia a dia

Relatório de vendas por mês (agrupar e somar).

Totalizador de carrinho on-line (preço total, quantidade).

Contador de palavras em um texto (tokenização + reduce).

Converter uma lista de objetos em um lookup por id (objeto/dicionário).

Criar um histórico acumulado (running totals) para gráficos.

Gerar um CSV ou uma string a partir de dados estruturados.

Implementar um mini-motor de regras: aplicar várias validações sequenciais e acumular erros.

Composição de middlewares em frameworks (array de funções reduzido a uma única função).

✅ Exemplo final — pequeno exercício que você pode testar

Agrupar produtos por categoria e calcular total por categoria:

const produtos = [
  { nome: "Shampoo", cat: "beleza", preco: 10 },
  { nome: "Condicionador", cat: "beleza", preco: 12 },
  { nome: "Camiseta", cat: "vestuario", preco: 30 },
];

const resumoPorCategoria = produtos.reduce((acc, p) => {
  if (!acc[p.cat]) acc[p.cat] = { total: 0, itens: [] };
  acc[p.cat].itens.push(p.nome);
  acc[p.cat].total += p.preco;
  return acc;
}, {});

console.log(resumoPorCategoria);
/* {
  beleza: { total: 22, itens: ["Shampoo","Condicionador"] },
  vestuario: { total: 30, itens: ["Camiseta"] }
} */

