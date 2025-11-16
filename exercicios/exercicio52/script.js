//closure = Uma função definida dentro de outra função, onde a função interna tem acesso às variáveis ​​e ao escopo da função externa. Permite variáveis ​​privadas e manutenção de estado. Frequentemente usada em frameworks JavaScript como React, Vue e Angular


/*function createCounter(){
    let count = 0;

    function increment(){
        count++;
        console.log(`contagem aumentada para ${count}`);
    }

    function getCount(){
        return count;  
    }

    return{increment, getCount};
}

const counter = createCounter()

counter.increment();
counter.increment();
counter.increment();
counter.increment();


console.log(`A contagem atual é ${counter.getCount()}`);*/
function createGame(){
    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }   

    function getScore(){
        return score;
    }   

    return { increaseScore, decreaseScore, getScore };
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`A pontuação final é ${game.getScore()}`);




/*Passo a passo do que acontece (linha a linha)

function createGame(){ ... }
Você define uma função createGame. Ela é uma fábrica: quando chamada, cria um novo jogo com sua própria pontuação.

Dentro de createGame:

let score = 0; cria a variável score — privada dentro da execução de createGame.

São definidas três funções internas: increaseScore, decreaseScore e getScore. Cada uma acessa e/ou modifica score.

return { increaseScore, decreaseScore, getScore };
A função createGame retorna um objeto com referências para essas funções internas.

const game = createGame();
Ao executar createGame(), uma nova instância do ambiente léxico é criada: uma cópia de score (com valor inicial 0) e as funções que a referenciam. O objeto retornado (game) contém essas funções que ainda "conhecem" a variável score. Isso é closure (explico melhor abaixo).

game.increaseScore(5);
Executa a função increaseScore retornada. Ela acessa a variável privada score daquela instância e soma 5. score passa de 0 → 5. console.log('+5pts') é mostrado.

game.increaseScore(6);
score: 5 → 11. Mostra +6pts.

game.decreaseScore(3);
score: 11 → 8. Mostra -3pts.

console.log(\A pontuação final é ${game.getScore()}`); game.getScore()lê a variável privadascore(8) e imprime:A pontuação final é 8`.

O que é closure (em termos simples)

Uma closure é quando uma função lembra do ambiente léxico em que foi criada — ou seja, lembra das variáveis que existiam ao redor dela mesmo depois desse escopo ter terminado.

No exemplo acima, as funções increaseScore, decreaseScore e getScore lembram da variável score que foi criada dentro de createGame. Mesmo depois que createGame() terminou de rodar, essas funções ainda conseguem acessar e modificar score. Esse comportamento é a closure.

Para que serve uma closure? (usos práticos)

Encapsulamento / privacidade: criar variáveis privadas (como score) que só podem ser acessadas por funções específicas — evita acesso direto e manipulação indevida.

Fábricas / objetos: criar múltiplas instâncias independentes (vários jogos, contadores, conexões).

Partial application / currying: "pré-configurar" funções mantendo informação no ambiente.

Callbacks e event handlers: let handlers lembrarem estado local sem usar variáveis globais.

Memoization / caching: armazenar resultados calculados para reuse.

Iteradores: manter estado entre chamadas (ex.: função que retorna próximos valores).

Módulos: pattern de module onde se expõe só a API pública.

Exemplos pequenos de closure / usos

Contador simples:

function makeCounter() {
  let count = 0;
  return function() {
    count += 1;
    return count;
  };
}

const c = makeCounter();
console.log(c()); // 1
console.log(c()); // 2


Função com configuração (partial):

function multiplyBy(n){
  return function(x){
    return x * n; // lembra de n
  }
}
const double = multiplyBy(2);
console.log(double(5)); // 10


Memoization simples:

function memoize(fn){
  const cache = {};
  return function(arg){
    if (cache[arg] !== undefined) return cache[arg];
    cache[arg] = fn(arg);
    return cache[arg];
  }
}

Boas práticas e armadilhas

Vantagem: closures permitem encapsular estado sem poluir o escopo global.

Cuidado com memória: closures mantêm referências a variáveis; se você criar muitos objetos com grandes estruturas retidas, pode haver consumo de memória até que elas não sejam mais referenciadas.

Não confundir com this: closure trata do ambiente léxico (variáveis externas), não do this. São conceitos diferentes.

Evitar expor referências mutáveis diretamente (por exemplo, se score fosse um objeto retornado ao usuário, ele poderia alterar sem passar pelas funções — prefira expor cópias ou apenas funções de leitura/escrita controladas).*/