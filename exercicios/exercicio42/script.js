//Static = Palavra-chave que define propriedades ou métodos que pertencem a uma classe (classe significa qualquer coisa estática, não os objetos).

    class Usuá{
        static contagemdeusuários = 0;

        constructor(Usuário){
            this.Usuário = Usuário
            Usuá.contagemdeusuários++
        }

        static obterContagemUsuario(){
            console.log(`Tem ${Usuá.contagemdeusuários} Usuários online`)
        }

        DigaOlá(){
            console.log(`Olá, meu nome de Usuário é ${this.Usuário}`)
        }
        
    }
    

    const user1 = new Usuá("BobEsponja");
    const user2 = new Usuá("Patrick");
    const user3 = new Usuá("Sandy");


    // console.log(user1.Usuário)
    // console.log(user2.Usuário)
    // console.log(user3.Usuário)
    user1.DigaOlá()
    user2.DigaOlá()
    user3.DigaOlá()
    Usuá.obterContagemUsuario('')



/*class matemáticautil{
    static PI = 3.14159;

    static obterDiâmetro(radius){
        return radius * 2;
    }

    static obterCircunferência(radius){
        return 2 * this.PI * radius;
    }

    static obterArea(radius){
        return this.PI * radius * radius;
    }

}

console.log(matemáticautil.PI);
console.log(matemáticautil.obterDiâmetro(10))
console.log(matemáticautil.obterCircunferência(10));
console.log(matemáticautil.obterArea(10))*/





//Explicação 

/*1) Declaração da classe Usuá
class Usuá{
    static contagemdeusuários = 0;

    constructor(Usuário){
        this.Usuário = Usuário
        Usuá.contagemdeusuários++
    }

    static obterContagemUsuario(){
        console.log(`Tem ${Usuá.contagemdeusuários} Usuários online`)
    }

    DigaOlá(){
        console.log(`Olá, meu nome de Usuário é ${this.Usuário}`)
    }
}


Explicação linha a linha:

class Usuá{ ... }
— Cria uma classe chamada Usuá. Em JavaScript classes são "sintactic sugar" sobre funções construtoras.

static contagemdeusuários = 0;
— Propriedade estática da classe. Existe apenas uma cópia dela ligada à própria classe Usuá, não aos objetos/instâncias. Inicializa a contagem com 0.

constructor(Usuário){ ... }
— Função que é executada quando você cria uma nova instância com new Usuá(...). Ela recebe o parâmetro Usuário.

this.Usuário = Usuário
— Armazena o valor do parâmetro no atributo da instância Usuário. Cada instância terá seu próprio this.Usuário.

Usuá.contagemdeusuários++
— Incrementa a propriedade estática da classe toda vez que um novo objeto é criado. Assim você contabiliza quantos usuários foram instanciados.

static obterContagemUsuario(){ console.log(...) }
— Método estático. Só pode ser chamado na classe (Usuá.obterContagemUsuario()), não em instâncias (user1.obterContagemUsuario() gera erro). Ele imprime quantos usuários existem conforme Usuá.contagemdeusuários.

DigaOlá(){ console.log(...) }
— Método de instância. Cada objeto criado por new Usuá(...) tem esse método; ao chamá-lo, this refere-se à instância atual e this.Usuário mostra o nome do usuário.

2) Criação de instâncias e chamadas
const user1 = new Usuá("BobEsponja");
const user2 = new Usuá("Patrick");
const user3 = new Usuá("Sandy");

user1.DigaOlá()
user2.DigaOlá()
user3.DigaOlá()
Usuá.obterContagemUsuario('')


O que acontece, passo a passo:

const user1 = new Usuá("BobEsponja");
— Chama o constructor: define user1.Usuário = "BobEsponja" e executa Usuá.contagemdeusuários++ (0 → 1).

const user2 = new Usuá("Patrick");
— Define user2.Usuário = "Patrick" e incrementa a contagem (1 → 2).

const user3 = new Usuá("Sandy");
— Define user3.Usuário = "Sandy" e incrementa a contagem (2 → 3).

user1.DigaOlá()
— Chama o método de instância: imprime

Olá, meu nome de Usuário é BobEsponja


user2.DigaOlá() → imprime

Olá, meu nome de Usuário é Patrick


user3.DigaOlá() → imprime

Olá, meu nome de Usuário é Sandy


Usuá.obterContagemUsuario('')
— Chama o método estático da classe. O argumento '' é ignorado (o método não espera parâmetros). Imprime:

Tem 3 Usuários online


Resumo das saídas no console (na ordem):

Olá, meu nome de Usuário é BobEsponja
Olá, meu nome de Usuário é Patrick
Olá, meu nome de Usuário é Sandy
Tem 3 Usuários online

3) Observações importantes / comportamento de this e static

this.Usuário dentro de DigaOlá() refere-se à instância que chamou o método (ex.: user1).

Usuá.contagemdeusuários é o acesso correto à propriedade estática dentro da classe; usar this.contagemdeusuários dentro do constructor funcionaria somente se this fosse a própria classe (o que não é o caso), então usar Usuá.contagemdeusuários é a forma correta.

Métodos estáticos (com static) são chamados pela classe: Usuá.obterContagemUsuario(). Se você tentar user1.obterContagemUsuario(), vai obter TypeError: user1.obterContagemUsuario is not a function.

Chamar Usuá.obterContagemUsuario('') com um argumento extra não causa erro — o argumento simplesmente não é utilizado.

4) Comentário sobre nomes / estilo

Usar acentos e caracteres especiais (Usuá, Usuário) funciona em JavaScript, mas é incomum e pode causar confusão. Recomendo nomes sem acento, ex.: Usuario, usuario, User.

Convenções comuns: Classe com PascalCase (Usuario), propriedades e métodos em camelCase (contagemDeUsuarios, digaOla).

5) A classe matemática comentada (resumo + resultados)

Trecho comentado:

class matemáticautil{
    static PI = 3.14159;

    static obterDiâmetro(radius){
        return radius * 2;
    }

    static obterCircunferência(radius){
        return 2 * this.PI * radius;
    }

    static obterArea(radius){
        return this.PI * radius * radius;
    }
}

console.log(matemáticautil.PI);
console.log(matemáticautil.obterDiâmetro(10))
console.log(matemáticautil.obterCircunferência(10));
console.log(matemáticautil.obterArea(10))


O que cada console.log imprimiria — com as contas:

matemáticautil.PI → 3.14159

obterDiâmetro(10) → radius * 2 = 10 * 2 = 20

obterCircunferência(10) → 2 * PI * radius
— PI * 10 = 3.14159 * 10 = 31.4159
— 2 * 31.4159 = 62.8318
→ imprime 62.8318

obterArea(10) → PI * radius * radius
— radius * radius = 10 * 10 = 100
— PI * 100 = 3.14159 * 100 = 314.159
→ imprime 314.159

6) Sugestões rápidas (se quiser melhorar o código)

Remover acentos dos identificadores: class Usuario { static contagemDeUsuarios = 0 ... }

Nomear métodos em camelCase: digaOla(), obterContagemUsuarios()

Para métodos que só lêem a contagem, você poderia retornar a string em vez de fazer console.log dentro do método (mais testável).

Se quiser permitir decrementar quando um usuário sair, poderia adicionar um método estático removerUsuario() que decrementa a contagem com segurança (sem ficar negativo).*/