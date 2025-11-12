//this = Referência ao objeto onde ISTO/THIS é usado (o objeto depende do contexto imediato) person.name = this.name

const pessoa1 = {
    nome: "BobEsponja",
    comidaFavorita : "Hamburgueres",
    digaOlá: function(){console.log(`Olá! Eu sou ${this.comidaFavorita}`)},
    comer : function(){console.log(`${this.nome} está comendo ${this.comidaFavorita}`)}
}

const pessoa2 = {
    nome: "Patrick",
    comidaFavorita : "pizza",
    digaOlá: function(){console.log(`Olá! Eu sou ${this.comidaFavorita}`)},
    comer : function(){console.log(`${this.nome} está comendo ${this.comidaFavorita}`)}
}

pessoa1.comer();
pessoa2.comer()