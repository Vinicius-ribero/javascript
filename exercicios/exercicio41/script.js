//class = (Recurso do ES6) oferece uma maneira mais estruturada e limpa de trabalhar com objetos em comparação com funções construtoras tradicionais, como a palavra-chave `static`, encapsulamento e herança.4

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

 const imposto = 1.05;

const Produto1 = new Produto("camisa", 87.99);
const Produto2 = new Produto("calça", 48.50);
const Produto3 = new Produto("sapato", 600.60)

 Produto2.mostrarProduto();

 const total = Produto1.total(1.05)
 console.log(`O preço total (com imposto): ${total.toFixed(2)} `)
