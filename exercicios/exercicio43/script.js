// inheritance = permite que uma nova classe herde propriedades e métodos de uma classe existente (pai -> filho), auxiliando na reutilização de código.

class animal{
    vivo = true;

    comer(){
        console.log(`Esse ${this.nome} está comendo`)
    }
    Dormindo(){
        console.log(`Esse ${this.nome} está dormindo`)
    }
}

class Coelho extends animal{
    nome = "coelho";
    correr (){
        console.log(`Este ${this.nome} está correndo`)
    }
}
class Peixe extends animal{
    nome = "peixe";

    nadar(){
        console.log(`Este ${this.name} está nadando`)
    }
}
class Falcão extends animal{
    nome = "falcão";

    voar(){
        console.log(`Este ${this.name} está voando`)
    }
}

const coelho = new Coelho();
const peixe = new Peixe();
const falcão = new Falcão();



console.log(coelho.vivo);
coelho.comer();
coelho.Dormindo();
coelho.correr()



//EXPLICAÇÃO LINHA A LINHA

/*
1) Código original (comentado linha a linha)
class animal{
    vivo = true;

    comer(){
        console.log(`Esse ${this.nome} está comendo`)
    }
    Dormindo(){
        console.log(`Esse ${this.nome} está dormindo`)
    }
}


class animal{ ... } — define uma classe chamada animal. Em JS classes representam "tipos" de objeto.

vivo = true; — propriedade de instância padrão; todo animal criado terá vivo com valor true.

comer(){ ... } — método de instância que imprime que o animal está comendo. Usa this.nome para referir-se ao nome do animal (espera que a subclasse defina nome).

Dormindo(){ ... } — método que imprime que o animal está dormindo. Observação: o nome do método começa com maiúscula — por convenção métodos normalmente usam camelCase (ex.: dormindo() ou melhor dormir()).

class Coelho extends animal{
    nome = "coelho";
    correr (){
        console.log(`Este ${this.nome} está correndo`)
    }
}


class Coelho extends animal{ ... } — Coelho é uma subclasse que herda tudo da classe animal (propriedades e métodos).

nome = "coelho"; — define this.nome para instâncias de Coelho.

correr(){ ... } — método específico do coelho que imprime que está correndo.

class Peixe extends animal{
    nome = "peixe";

    nadar(){
        console.log(`Este ${this.name} está nadando`)
    }
}
class Falcão extends animal{
    nome = "falcão";

    voar(){
        console.log(`Este ${this.name} está voando`)
    }
}


Mesma ideia: Peixe e Falcão herdam de animal e definem nome.

ERRO aqui: dentro de nadar() e voar() foi usado this.name — em inglês — mas a propriedade definida é nome. Resultado: this.name é undefined, vai imprimir: Este undefined está nadando. Deve usar this.nome.

const coelho = new Coelho();
const peixe = new Peixe();
const falcão = new Falcão();

console.log(coelho.vivo);
coelho.comer();
coelho.Dormindo();
coelho.correr()


new Coelho() cria uma instância; mesma para peixe/falcão.

console.log(coelho.vivo); imprime true (vindo da classe animal).

coelho.comer(); chama o método herdado de animal → imprime Esse coelho está comendo.

coelho.Dormindo(); (usou método com D maiúsculo) → imprime Esse coelho está dormindo.

coelho.correr() → imprime Este coelho está correndo.

2) Saída esperada (com o código original — antes de corrigir os this.name)

Com o código original sem consertar os this.name, o console vai mostrar (na ordem):

true
Esse coelho está comendo
Esse coelho está dormindo
Este coelho está correndo


(As linhas de peixe.nadar() e falcão.voar() não foram chamadas, mas se fossem, resultariam em undefined por causa do this.name.)

3) Problemas / melhorias sugeridas

Inconsistência de nomes: use this.nome ou this.name, mas não misture. Recomendo nome em português (ou name) — consistente.

Convenção de métodos: use camelCase e verbos: dormir() invés de Dormindo().

Acentos em identificadores: falcão com ã funciona, mas é melhor evitar acentos em nomes de variáveis/identificadores (usar falcao) para compatibilidade.

Construtores úteis: se quiser nomes personalizados, adicione constructor(nome) na superclasse ou nas subclasses.

Polimorfismo: você pode sobrescrever métodos nas subclasses (ex.: comer() diferente para Peixe) se precisar comportamento específico.

4) Versão corrigida e limpa do código
class Animal {
  vivo = true;

  comer() {
    console.log(`Esse ${this.nome} está comendo`);
  }

  dormir() {
    console.log(`Esse ${this.nome} está dormindo`);
  }
}

class Coelho extends Animal {
  nome = "coelho";

  correr() {
    console.log(`Este ${this.nome} está correndo`);
  }
}

class Peixe extends Animal {
  nome = "peixe";

  nadar() {
    console.log(`Este ${this.nome} está nadando`);
  }
}

class Falcao extends Animal {
  nome = "falcao";

  voar() {
    console.log(`Este ${this.nome} está voando`);
  }
}

const coelho = new Coelho();
const peixe = new Peixe();
const falcao = new Falcao();

console.log(coelho.vivo); // true
coelho.comer();           // Esse coelho está comendo
coelho.dormir();          // Esse coelho está dormindo
coelho.correr();          // Este coelho está correndo

// Exemplos adicionais:
peixe.nadar();            // Este peixe está nadando
falcao.voar();            // Este falcao está voando

5) Explanação rápida do que mudou

Renomeei animal → Animal (convenção: classes em PascalCase).

Dormindo() → dormir() (camelCase + verbo).

Ajustei this.name → this.nome.

Removi acentos em identificadores (falcao em vez de falcão) para evitar surpresas.

6) Por que inheritance (herança) é útil em um site — exemplos práticos

Benefícios principais

Reuso de código (DRY) — coloque comportamento comum numa superclasse e sub-classes herdam sem repetir. Ex.: todos os "animais" têm vivo, comer(); em site, todos os "componentes" podem herdar lógica comum.

Organização/Modelagem — permite modelar relações reais: Usuario → Admin / Cliente; Produto → Eletronico / Vestuario.

Polimorfismo — você pode chamar o mesmo método (render(), save(), validar()) em instâncias diferentes e cada classe responde de forma própria.

Manutenção mais fácil — mudar a lógica na superclasse atualiza o comportamento de todas as subclasses automaticamente.

Exemplos concretos em um site

Componentes visuais (frontend):

class Component com métodos render(), mount() e destroy().

class Button extends Component, class Modal extends Component. Assim todos compartilham ciclo de vida, estilos, tratamento de eventos.

Modelos de dados (backend):

class User e class Admin extends User. Admin herda autenticação, mas adiciona banUser() e permissões extras.

Produtos em e-commerce:

class Produto com calcularPreco(). class ProdutoFisico pode adicionar peso e calcularFrete(); class ProdutoDigital sobrescreve calcularFrete() (que retorna 0).

APIs / Controllers:

BaseController com lógica de resposta/erro. UserController e ProductController herdam e implementam endpoints específicos.

Quando não usar herança

Se a relação não for "é-um" (is-a), prefira composição (ex.: um Car tem um Engine, em vez de Car extends Engine). Composição é muitas vezes mais flexível.

7) Exemplo de uso prático e rápido

Imagine uma lista de animais em um site: você pode ter um array heterogêneo:

const animais = [new Coelho(), new Peixe(), new Falcao()];
animais.forEach(a => a.comer()); // funciona para todos: polimorfismo!


Isso é poderoso: você trata tudo como Animal e cada objeto executa sua versão (ou a versão herdada) do método.*/