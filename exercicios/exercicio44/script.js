// super = A palavra-chave é usada em classes para chamar o construtor ou acessar as propriedades e métodos de uma classe pai (superclasse).
//  this = este objeto;
//  super = a classe pai;

class Animal{

    constructor(nome, idade){
        this.nome = nome;
        this.idade =idade;
    }

    mover(velocidade){
        console.log(`O ${this.nome} move-se a uma velocidade de ${velocidade}km`)
    }
}

class Coelho extends Animal{
    constructor(nome, idade,velcorrer){
        super(nome, idade);
        this.velcorrer = velcorrer;
    }

    correr(){
        console.log(`este ${this.nome} consegue correr `)
        super.mover(this.velcorrer)
    }

}
class Peixe extends Animal{
    constructor(nome, idade,velnadar){
        super(nome, idade);
        this.velnadar = velnadar;
    }

    nadar(){
        console.log(`este ${this.nome} consegue nadar `)
        super.mover(this.velnadar)
    }
}
class Falcão extends Animal{
    constructor(nome, idade,velvoar){
        super(nome, idade);
        this.velvoar = velvoar;
    }
    voar(){
        console.log(`este ${this.nome} consegue correr `)
        super.mover(this.velvoar)
    }
}

const coelho = new Coelho("coelho", 1, 25);
const peixe = new Peixe("peixe", 2, 12);
const falcão = new Falcão("falcão", 3, 100);

coelho.correr()

// console.log(peixe.nome)
// console.log(peixe.idade)
// console.log(peixe.velnadar)
