//Construtores = método especial para definir as propriedades e os métodos de objetos


function carro(marca, modelo , ano , cor){
    this.marca = marca,
    this.modelo = modelo,
    this.ano = ano,
    this.cor = cor
    this.dirigir = function (){console.log(`Você está dirigindo este modelo ${this.modelo}`)}
}

 const car1 = new carro("Ferrari", "812", "2024", "preto");
 const car2 = new carro("Lamborguini", "Aventador", "2014","cinza")
 const car3 = new carro("Mercedes", "G63", "2025", "Preto")

 car1.dirigir();
 car2.dirigir();
 car3.dirigir();

 /*console.log(car1.marca);
 console.log(car1.modelo);
 console.log(car1.ano);
 console.log(car1.cor);;

console.log(car2.marca);
 console.log(car2.modelo);
 console.log(car2.ano);
 console.log(car2.cor);

 console.log(car3.marca);
 console.log(car3.modelo);
 console.log(car3.ano);
 console.log(car3.cor);*/


 










 //EXPLICAÇÃO

 /*1) Estrutura da classe
class Produto{
  constructor(nome, preço){
    this.nome = nome;
    this.preço = preço
  }

  mostrarProduto(){
    console.log(`Produto: ${this.nome}`);
    console.log(`Produto: R$${this.preço.toFixed(2)}`); 
  }

  total(imposto){
    return this.preço + (this.preço * imposto)
  } 
}


O que cada parte faz:

class Produto { ... } — define um tipo (classe) chamado Produto.

constructor(nome, preço) — função chamada quando você cria new Produto(...). Ela inicializa os atributos do objeto:

this.nome = nome — armazena o nome do produto.

this.preço = preço — armazena o preço.

mostrarProduto() — método que imprime no console dois console.log:

primeiro: Produto: ${this.nome} → exibe o nome.

segundo: Produto: R$${this.preço.toFixed(2)} → mostra o preço com 2 casas decimais (o toFixed(2) transforma o número em string com duas casas).

total(imposto) — método que calcula o preço com imposto: this.preço + (this.preço * imposto) → retorna preço + (preço × imposto).

2) Trecho fora da classe / variáveis e uso
const imposto = 1.05;

const Produto1 = new Produto("camisa", 87.99);
const Produto2 = new Produto("calça", 48.50);
const Produto3 = new Produto("sapato", 600.60)

Produto2.mostrarProduto();

const total = Produto1.total(1.05)
console.log(`O preço total (com imposto): ${total.toFixed(2)} `)


O que acontece:

const imposto = 1.05; — define uma constante chamada imposto com valor 1.05.

Cria 3 instâncias (Produto1, Produto2, Produto3) com nomes e preços.

Produto2.mostrarProduto(); — chama o método que imprime o nome e preço (do produto 2).

const total = Produto1.total(1.05) — chama o método total do Produto1, passando 1.05 como argumento.

Depois imprime total.toFixed(2).

3) Problemas / coisas a melhorar (importante)

Uso do valor do imposto:

Você definiu imposto = 1.05 e também passou 1.05 para total. Mas a fórmula this.preço + (this.preço * imposto) espera imposto como taxa (por exemplo 0.05 para 5%).

Se você passar 1.05 como imposto, o cálculo será: preço + preço * 1.05 = preço * 2.05 — ou seja, você está SOMANDO 105% do preço além do preço original (dobrando praticamente). Normalmente quer-se imposto = 0.05 se imposto é 5%.

Nome de variáveis com acentos (ex.: preço):

JavaScript aceita identificadores Unicode, logo preço funciona, mas é recomendado evitar acentos em nomes de variáveis por portabilidade e legibilidade. Prefira preco.

Mensagens repetidas em mostrarProduto:

Você usou Produto: nas duas linhas. A segunda deveria ser Preço: para ficar mais claro.

Possível erro de digitação no final da classe:

No seu bloco original aparece ecplique passo a passo dentro do código — isso causaria erro de sintaxe. Certifique-se que comentários textuais estejam fora do código ou comentados (// ou /* ... */).

/*4) Versão corrigida e mais clara
class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  mostrarProduto() {
    console.log(`Produto: ${this.nome}`);
    console.log(`Preço: R$${this.preco.toFixed(2)}`);
  }

  // imposto deve ser a taxa (ex: 0.05 para 5%)
  total(taxaImposto) {
    return this.preco + (this.preco * taxaImposto);
  }
}

const taxa = 0.05; // 5%
const produto1 = new Produto("camisa", 87.99);
const produto2 = new Produto("calça", 48.50);
const produto3 = new Produto("sapato", 600.60);

produto2.mostrarProduto(); // imprime nome e preço formatado

const totalComImposto = produto1.total(taxa);
console.log(`O preço total (com imposto): R$${totalComImposto.toFixed(2)}`);

5) Saída esperada com essa versão corrigida

produto2.mostrarProduto(); imprimirá:

Produto: calça
Preço: R$48.50


Para produto1 com taxa = 0.05:

cálculo: 87.99 + 87.99 * 0.05 = 87.99 + 4.3995 = 92.3895

toFixed(2) → 92.39

O preço total (com imposto): R$92.39

Se você mantiver o erro e passar 1.05 como imposto:

cálculo: 87.99 + 87.99 * 1.05 = 87.99 + 92.3895 = 180.3795 → 180.38 (provavelmente não é o que você quer).*/