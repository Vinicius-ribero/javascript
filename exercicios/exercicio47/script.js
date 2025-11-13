//nested objects =     Objetos aninhados = Objetos dentro de outros objetos.

//Permite representar estruturas de dados mais complexas. Objeto filho envolto por um objeto pai.

//Pessoa {Endereço{ }, InformaçõesDeContato{ } }
//CarrinhoDeCompras{Teclado{ }, Mouse{ }, Monitor{ } } 

/*const pessoa = {
    Nomecompleto: "BobEsponja Calçaquadrada",
    idade: 30,
    Estudando: true,
    passatempos: ["karate", "pescar", "cozinhar"],
    endereço:{
        Rua: "124 Conch St.",
        cidade:"Fenda do Biquini",
        contry:"Aguas.internacionais"
    }
}

/*console.log(pessoa.Nomecompleto);
console.log(pessoa.idade);
console.log(pessoa.Estudando);
console.log(pessoa.passatempos[2]);//Para exibir um dos hobbies apenas coloque[0], [1], ou qual for selecionado
console.log(pessoa.endereço.Rua)*/


//EM LOOP
/*for(const property in pessoa.endereço){
    console.log(pessoa.endereço[property])
}*/

class Pessoa {
    constructor(nome, idade, ...endereço) {
        this.nome = nome;
        this.idade = idade;
        this.endereço = new Endereço(...endereço);
    }
}

class Endereço {
    constructor(rua, cidade, país) {
        this.rua = rua;
        this.cidade = cidade;
        this.país = país;
    }
}

const pessoa1 = new Pessoa("BobEsponja", 30, "124 Conch St.", "Fenda do Biquini", "Águas Internacionais");
const pessoa2 = new Pessoa("Patrick", 37, "128 Conch St.", "Fenda do Biquini", "Águas Internacionais");
const pessoa3 = new Pessoa("Lula Molusco", 45, "126 Conch St.", "Fenda do Biquini", "Águas Internacionais");

console.log(pessoa1.endereço); // ✅ "Fenda do Biquini"
console.log(pessoa2.endereço);    // ✅ "128 Conch St."
console.log(pessoa3.endereço);   // ✅ "Águas Internacionais"


/*Resumo do seu código (linha a linha — detalhado e fácil)

class Pessoa {
— Declara a classe Pessoa, que é um molde para criar objetos pessoa.

constructor(nome, idade, ...endereço) {
— O construtor recebe nome, idade e o resto dos parâmetros como um array chamado endereço (por causa do ...).

this.nome = nome;
— Atribui o nome passado para a propriedade nome da instância.

this.idade = idade;
— Atribui a idade para a instância.

this.endereço = new Endereço(...endereço);
— Cria um novo objeto Endereço passando os itens do array endereço (com spread ...) e atribui esse objeto à propriedade endereço da pessoa.
— Resultado: pessoa.endereço será um objeto (Endereço) contendo rua, cidade e país.

class Endereço {
— Declara a classe Endereço.

constructor(rua, cidade, país) {
— O construtor do endereço recebe rua, cidade e país.

this.rua = rua; this.cidade = cidade; this.país = país;
— Atribui essas informações à instância de Endereço.

const pessoa1 = new Pessoa("BobEsponja", 30, "124 Conch St.", "Fenda do Biquini", "Águas Internacionais");
— Cria uma instância pessoa1. Como a classe Pessoa passa os argumentos extras para Endereço, pessoa1.endereço.rua === "124 Conch St." e pessoa1.endereço.cidade === "Fenda do Biquini".

console.log(pessoa1.endereço);
— Mostra o objeto endereço completo no console.
— Importante: se você tentar console.log(pessoa1.cidade) — não funciona, porque cidade está dentro de endereço. O caminho correto é pessoa1.endereço.cidade.

Observação sobre duplicidade no seu trecho: você repetiu as declarações de const pessoa1, pessoa2, pessoa3 duas vezes — isso causa erro (não pode declarar duas vezes com const no mesmo escopo). Remova a repetição.

O que são nested objects (objetos aninhados) e por que usar

Objetos aninhados são objetos que possuem outras estruturas (objetos, arrays) dentro de si.
Exemplo:

const usuario = {
  nome: "Ana",
  perfil: {
    apelido: "ani",
    avatar: "a.png"
  }
}


/*Aqui perfil é um objeto dentro do objeto usuario.

Por que usar?

Modelam dados reais e complexos de forma natural (ex.: endereço dentro de pessoa).

Mantêm estrutura organizada (separando responsabilidades).

Facilitam representar relações (usuário → perfil → configurações).

Combinam bem com APIs (JSON aninhado é padrão).

Onde nested objects são úteis em sites — exemplos práticos

Perfil de usuário / Dashboard

user.profile, user.settings, user.history.

Ex.: user.settings.notifications.email = true.

Carrinho de e-commerce

cart.items = [{ product, qty, options }, ...] e cart.shipping.address.

Representa cada item com seus próprios dados aninhados.

Configurações / Preferências

site.config.theme.colors.primary, site.config.localization.locale.

Resposta de API / Backend

APIs retornam objetos aninhados (usuário → empresa → plano → limites).

Estado em aplicações SPA/React/Vue

state.user.profile.avatar ou state.products.byId[id].stock.

Conteúdo de CMS / Páginas dinâmicas

page.blocks[{ type: 'hero', content: {...} }, ...] para renderizar componentes.

Exemplos práticos e pequenos trechos de código
Acessar propriedades
console.log(pessoa1.endereço.cidade); // acessa cidade

Loop em objeto aninhado
for (const key in pessoa1.endereço) {
  console.log(key, pessoa1.endereço[key]);
}

Desestruturação de objeto aninhado
const { nome, endereço: { rua, cidade } } = pessoa1;
console.log(rua, cidade);

Acesso seguro com optional chaining (evita erro se faltar o nível)
console.log(pessoa1.endereço?.cidade); // se endereço for undefined, não quebra

Valores padrão ao desestruturar
const { endereço: { país = "Brasil" } = {} } = pessoa1;
console.log(país);

Exemplo de uso em função (parâmetros desestruturados)
function mostrarCidade({ endereço: { cidade } = {} }) {
  console.log(cidade || "Cidade não informada");
}
mostrarCidade(pessoa1);

Clonando profundamente (nota: shallow copy não basta)
const cloneProfundo = JSON.parse(JSON.stringify(pessoa1)); // simples, mas tem limitações

Boas práticas ao trabalhar com objetos aninhados

Evite níveis muito profundos — dificulta manutenção.

Use nomes claros para propriedades (ex.: endereco.rua em vez de e.r).

Optional chaining e valores padrões evitam muitos bugs.

Imutabilidade: quando alterar estado (ex.: React/Redux), use cópias (spread, libs como immer).

Valide dados vindos de APIs antes de usar.

Documente a forma do objeto (ex.: JSDoc ou TypeScript interfaces) para equipe.

Ideia final — como isso se conecta ao que você quer construir (plataforma de trabalho)

Em uma plataforma que revolucione o trabalho, objetos aninhados vão aparecer o tempo todo: perfis com histórico, portfólios, projetos com tarefas, avaliações, contratos e pagamentos — tudo naturalmente modelado com nested objects. Planejar a estrutura de dados desde cedo ajuda a criar APIs eficientes, interfaces claras e regras de negócio bem definidas.*/