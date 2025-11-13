// Getter = método especial que torna uma propriedade legível

// Setter = método especial que torna uma propriedade gravável

// Remove e modifica um valor ao ler/gravar uma propriedade

class Person{

    constructor(firstName, lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0 ){
            this._firstName = newFirstName
        }else{
            console.error(" o primeiro nome deve ser uma string não vazia ")
        }
    }

      set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0 ){
            this._lastName = newLastName
        }else{
            console.error(" O ultimo nome deve ser uma string não vazia ")
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >=0){
            this._age = newAge;
        }
        else{
            console.error("A idade deve ser um número não negativo.")
        }
    }

    get firstName(){
        return this._firstName
    }

    get lastName(){
        return this._lastName
    }

    get fullName(){
        return this._firstName + "" + this._lastName
    }

    get age(){
        return this._age;
    }
}


const person = new Person("Vinicius" ,"Soares", 19);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);


/*class Retangulo {
    constructor(height, width) {
        this.width = width;
        this.height = height;
    }

    set width(newwidth) {
        if (newwidth > 0) {
            this._width = newwidth;
        } else {
            console.error("A largura deve ser um número positivo");
        }
    }

    set height(newheight) {
        if (newheight > 0) {
            this._height = newheight;
        } else {
            console.error("A altura deve ser um número positivo");
        }
    }

    get width() {
        return `${this._width.toFixed(1)}cm`;
    }

    get height() {
        return `${this._height.toFixed(1)}cm`;
    }

    get area(){
        return `${(this._width * this._height).toFixed(1)}cm^2`
    }
}

const retangulo = new Retangulo(3, 4);


console.log(retangulo.width);  // 4
console.log(retangulo.height); // 3
console.log(retangulo.area)*/

/*
Beleza — vou explicar linha a linha e também fazer um fluxo de execução mostrando o que aparece no console quando você roda o código. Vou apontar pequenos detalhes (como o fullName sem espaço) para você entender melhor. 😄

1) Classe Person — código e explicação
class Person{

    constructor(firstName, lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0 ){
            this._firstName = newFirstName
        }else{
            console.error(" o primeiro nome deve ser uma string não vazia ")
        }
    }

      set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0 ){
            this._lastName = newLastName
        }else{
            console.error(" O ultimo nome deve ser uma string não vazia ")
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >=0){
            this._age = newAge;
        }
        else{
            console.error("A idade deve ser um número não negativo.")
        }
    }

    get firstName(){
        return this._firstName
    }

    get lastName(){
        return this._lastName
    }

    get fullName(){
        return this._firstName + "" + this._lastName
    }

    get age(){
        return this._age;
    }
}

O que cada parte faz

class Person { ... }
— Define uma classe chamada Person.

constructor(firstName, lastName, age) { ... }
— Quando você cria new Person(...), esse método é chamado.
— Importante: dentro do construtor você atribui this.firstName = firstName etc. — isso chama os setters set firstName(...), set lastName(...) e set age(...) (não cria diretamente _firstName). Ou seja, o construtor passa pelos validadores.

set firstName(newFirstName) { ... }
— Valida que newFirstName é uma string e não vazia.
— Se válido, salva em this._firstName. Caso contrário imprime um erro no console.
— Uso de _firstName: convenção para "propriedade interna" — evita chamar o setter recursivamente.

set lastName(newLastName) { ... }
— Mesmo comportamento para sobrenome, grava em _lastName.

set age(newAge) { ... }
— Verifica que newAge é number e >= 0. Se OK grava em _age, senão imprime erro.

get firstName() { return this._firstName }
— Retorna o valor armazenado internamente.

get lastName() { return this._lastName }
— Retorna o sobrenome.

get fullName() { return this._firstName + "" + this._lastName }
— Concatena primeiro e último nome. Observação: você usou "" (string vazia) entre eles — isso não adiciona espaço, então o resultado será "ViniciusSoares". Se quiser "Vinicius Soares", substitua por " ".

get age() { return this._age }
— Retorna a idade.

2) Criação da instância e saída no console
const person = new Person("Vinicius" ,"Soares", 19);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);

Fluxo de execução (passo a passo)

new Person("Vinicius", "Soares", 19) chama o constructor.

Dentro do constructor:

this.firstName = "Vinicius" → chama set firstName("Vinicius"):

"Vinicius" é string e length > 0 → define this._firstName = "Vinicius".

this.lastName = "Soares" → chama set lastName("Soares"):

válido → define this._lastName = "Soares".

this.age = 19 → chama set age(19):

19 é number e >= 0 → define this._age = 19.

console.log(person.firstName) → chama get firstName() → retorna "Vinicius" → imprime:

Vinicius


console.log(person.lastName) → imprime:

Soares


console.log(person.fullName) → chama get fullName() → retorna "Vinicius" + "" + "Soares" → "ViniciusSoares" → imprime:

ViniciusSoares


(lembre que falta o espaço entre os nomes)

console.log(person.age) → imprime:

19

3) Observações, boas práticas e pequenas sugestões (sem alterar seu design)

Por que usar _firstName, _age etc.?
— Para evitar recursão: se o setter fizesse this.firstName = ... iria chamar o próprio setter de novo (loop). Usando _firstName você armazena diretamente.

Validações nos setters: ótimo — evita criar objetos com dados inválidos. Se os valores forem inválidos, a propriedade interna (_...) não é criada e o getter retornará undefined.

Mensagem de erro: as mensagens têm espaços no começo (" o primeiro...") — funciona, mas fica visualmente estranho. Você pode limpar a string para saída mais bonita.

fullName: como mencionado, falta um espaço entre nome e sobrenome. Trocar "" por " " resolve:

get fullName() {
  return this._firstName + " " + this._lastName;
}


Tipo de age: hoje você exige number. Se vier de um formulário HTML (string), talvez queira converter (Number(value)) ou validar melhor.

4) Trecho Retangulo comentado — o que ele faz (resumo)

O trecho comentado define um Retangulo com getters formatados:

set width/height validam e guardam _width/_height.

get width() retorna ${this._width.toFixed(1)}cm — formata com uma casa decimal e acrescenta cm.

get height() retorna ${this._height.toFixed(1)}cm.

get area() calcula a área e retorna ${(this._width * this._height).toFixed(1)}cm^2.

Para const retangulo = new Retangulo(3, 4):

retangulo.width → "4.0cm"

retangulo.height → "3.0cm"

retangulo.area → "12.0cm^2"

(Repare que no constructor(height, width) você passa (3,4) — height=3, width=4 — e depois os getters formatam números com toFixed(1) e unidades.)*/


/*
🧠 O que são get e set

Em JavaScript, get e set são acessores de propriedades (também chamados de getters e setters).
Eles controlam como os dados de um objeto são lidos e modificados.

👉 Em vez de acessar uma variável diretamente (obj.valor = 10), você pode criar uma camada de proteção e lógica entre o código e o dado real.

🎯 Finalidade
🔹 set (definir valor)

O set é chamado quando você tenta atribuir um valor a uma propriedade.
Ele serve para:

Validar dados (ex: não aceitar números negativos);

Converter valores (ex: transformar string em número);

Executar ações automáticas (ex: atualizar outro campo);

Proteger variáveis internas.

🔹 get (obter valor)

O get é chamado quando você tenta ler uma propriedade.
Ele serve para:

Retornar o valor armazenado;

Calcular algo antes de devolver;

Formatar a saída (ex: acrescentar "R$" no preço);

Criar propriedades “virtuais” (que não existem de verdade, mas parecem existir).

⚙️ Estrutura geral
class Exemplo {
  set valor(novoValor) {
    this._valor = novoValor; // guarda internamente
  }

  get valor() {
    return this._valor; // lê o valor guardado
  }
}


Uso:

const e = new Exemplo();
e.valor = 10;          // chama o setter
console.log(e.valor);  // chama o getter


Saída:

10

🧱 Exemplo 1 — Controle de temperatura
class Temperatura {
  constructor(celsius) {
    this.celsius = celsius; // chama o setter
  }

  get fahrenheit() {
    return this._celsius * 1.8 + 32;
  }

  get celsius() {
    return this._celsius;
  }

  set celsius(valor) {
    if (typeof valor === "number") {
      this._celsius = valor;
    } else {
      console.error("Temperatura inválida");
    }
  }
}

const t = new Temperatura(25);
console.log(t.celsius);     // 25
console.log(t.fahrenheit);  // 77


🧩 O que acontece:

Quando você faz new Temperatura(25), ele chama o set celsius.

O get fahrenheit converte automaticamente o valor para Fahrenheit, sem precisar guardar outro atributo.

💸 Exemplo 2 — Sistema de preços com formatação
class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  set preco(valor) {
    if (valor >= 0) {
      this._preco = valor;
    } else {
      console.error("Preço inválido");
    }
  }

  get preco() {
    return `R$${this._preco.toFixed(2).replace('.', ',')}`;
  }
}

const p = new Produto("Shampoo", 29.9);
console.log(p.nome);   // Shampoo
console.log(p.preco);  // R$29,90


🧩 Aqui, o getter formata automaticamente o número em reais — sem precisar criar uma função extra.

🧮 Exemplo 3 — Pessoa com nome completo
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }

  set nomeCompleto(valor) {
    const partes = valor.split(" ");
    this.nome = partes[0];
    this.sobrenome = partes.slice(1).join(" ");
  }
}

const pessoa = new Pessoa("Vinicius", "Ribeiro");
console.log(pessoa.nomeCompleto); // Vinicius Ribeiro

pessoa.nomeCompleto = "Maria Oliveira Soares";
console.log(pessoa.nome);       // Maria
console.log(pessoa.sobrenome);  // Oliveira Soares


🧩 Aqui temos bidirecionalidade:

get monta o nome completo.

set divide o nome completo e atualiza nome e sobrenome.

🔒 Exemplo 4 — Sistema de senha com segurança
class Usuario {
  set senha(valor) {
    if (valor.length >= 6) {
      this._senha = valor;
    } else {
      console.error("A senha deve ter pelo menos 6 caracteres.");
    }
  }

  get senha() {
    return "******"; // Nunca mostra a senha real!
  }
}

const u = new Usuario();
u.senha = "12345";  // erro
u.senha = "segura123";
console.log(u.senha); // ******


🧩 Vantagem:
Mesmo que alguém acesse o objeto, o getter impede que a senha verdadeira seja exibida.

🚗 Exemplo 5 — Velocidade de um carro (com limites)
class Carro {
  constructor(modelo, velocidadeMax) {
    this.modelo = modelo;
    this.velocidadeMax = velocidadeMax;
    this.velocidadeAtual = 0;
  }

  set velocidadeAtual(valor) {
    if (valor >= 0 && valor <= this.velocidadeMax) {
      this._velocidadeAtual = valor;
    } else {
      console.error("Velocidade fora do limite!");
    }
  }

  get velocidadeAtual() {
    return `${this._velocidadeAtual} km/h`;
  }
}

const c = new Carro("Fusca", 120);
c.velocidadeAtual = 80;
console.log(c.velocidadeAtual); // 80 km/h

c.velocidadeAtual = 150; // erro


🧩 Uso típico: controlar limites, validar valores, e formatar saída.

🧠 Resumo rápido
Ação	Palavra-chave	Exemplo	Serve para
Ler valor	get	obj.propriedade	Retornar valor processado, formatado ou calculado
Definir valor	set	obj.propriedade = valor	Validar, converter ou impedir valores incorretos
Armazenar internamente	_variavel	this._idade	Evitar loop infinito dentro do set
Chamados automaticamente	sim	quando lê ou atribui	Simplifica o código externo
💡 Em sites reais (usos comuns)

Calcular preço total de um produto automaticamente (ex: preço * quantidade).

Formatar valores de data, dinheiro, medidas.

Validar campos de formulários (nome, idade, e-mail).

Evitar que dados sensíveis sejam acessados diretamente (senha, token).

Criar propriedades dinâmicas sem precisar de métodos extras (ex: .nomeCompleto).*/