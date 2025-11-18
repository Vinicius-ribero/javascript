//Error = erro = um objeto criado para representar um problema que ocorre. Ocorre frequentemente com entrada de dados do usuário ou ao estabelecer uma conexão.

//try{ } = envolve código que pode potencialmente causar um erro

//cath {} = captura e trata quaisquer erros lançados pelo bloco try { }

//finally { } = (opcional) Sempre executa. Usado principalmente para limpeza, por exemplo, fechar arquivos, fechar conexões, liberar recursos


/*try{
        console.log("hello");
        // ERROS DE REDE
        // REJEIÇÃO DE PROMESSA
       // ERROS DE SEGURANÇA
}
catch(error){
    console.error(error)
}
finally{
  //FECHAR ARQUIVOS 
  //FECHAR CONEXÕES
  //LIBERAR CONEXÕES
  console.log("isso sempre executa");
}


console.log("Você chegou ao fim!");*/

try{
    const dividendo = Number(window.prompt("inserir um dividendo:"));
    const divisor = Number(window.prompt("inserir um divisor:"));

    if(divisor == 0){
        throw new Error("Você não pode dividir por zero!");
    }
    if(isNaN(dividendo) || isNaN(divisor)){
        throw new Error("O valor deve ser um  Número");
    }

    const resultado = dividendo / divisor;
    console.log(resultado);
}

catch(error){
    console.error(error)
}

console.log("Você chegou ao fim");


//EXPLICAÇÃO SOBRE ERROR
/*1) Execução passo a passo (o que ocorre na prática)

Entra no bloco try { ... }.
O try delimita um bloco cujo conteúdo será executado normalmente, mas se alguma linha lançar (throw) uma exceção, a execução pula imediatamente para o catch.

const dividendo = Number(window.prompt("inserir um dividendo:"));

window.prompt(...) abre uma caixa de diálogo no browser e retorna:

uma string com o texto digitado, se o usuário confirmar;

"" (string vazia) se o usuário confirmar sem digitar nada;

null se o usuário clicar em “Cancelar”.

Number(...) converte esse retorno para número:

Number("42") → 42

Number("") → 0

Number(null) → 0

Number("abc") → NaN (Not-a-Number)

Resultado: dividendo será um number, possivelmente NaN.

const divisor = Number(window.prompt("inserir um divisor:")); — análogo ao acima para o divisor.

if(divisor == 0){ throw new Error("Você não pode dividir por zero!"); }

Aqui você verifica se divisor == 0 (note: == faz coerção, mas para números é ok).

Se divisor for exatamente 0, você cria (lança) um novo Error com a mensagem "Você não pode dividir por zero!".

throw interrompe imediatamente o bloco try e envia o objeto Error para o catch. O resto do try não é executado.

Sutileza importante: Se o usuário clicou em “Cancelar” no prompt, Number(null) -> 0, então o código vai tratar o cancelar como 0 e lançar o erro de divisão por zero — talvez isso não seja o comportamento desejado. Outra sutileza: se o usuário digitou algo inválido (e.g. "abc"), divisor será NaN, e divisor == 0 é false (porque NaN não é igual a nada), então o primeiro if não pejava, e o controle só detectará NaN no próximo if.

if(isNaN(dividendo) || isNaN(divisor)){ throw new Error("O valor deve ser um Número"); }

isNaN(x) testa se x é NaN. Se qualquer um dos valores for NaN, lança um erro com a mensagem apropriada.

Observação: Number('') e Number(null) produzem 0, então não são NaN. Assim, um cancelamento pode levar ao erro de divisão por zero antes de cair aqui.

const resultado = dividendo / divisor;

Se chegou aqui, ambos são números válidos e divisor !== 0. Assim a divisão é feita.

console.log(resultado); — imprime o resultado.

Se algum throw aconteceu, o bloco catch(error){ ... } é executado:

error é o objeto lançado (por você ou pelo motor JS).

console.error(error) imprime o erro no console (muitas vezes imprime Error: mensagem e uma stack trace).

Por fim, fora do try/catch, console.log("Você chegou ao fim"); sempre será executado (a menos que o código tenha feito throw fora do try sem captura ou que o ambiente feche). O try/catch impede que o erro que você lançou interrompa toda a execução.

2) O que é um Error em JS? (e o objeto error no catch)

Error é uma classe nativa. new Error("mensagem") cria um objeto com propriedades típicas:

error.name — normalmente "Error" (ou "TypeError", "ReferenceError", etc. para erros nativos)

error.message — a mensagem que você passou

error.stack — stack trace (útil para debugging)

Quando você throw errorObj, esse objeto é capturado no catch(...).

Ex.:

const e = new Error("ops");
console.log(e.name);    // "Error"
console.log(e.message); // "ops"
console.log(e.stack);   // stack trace

3) try / catch / finally — propósito e comportamento

try — código que pode lançar exceções.

catch(error) — bloco que recebe o erro lançado dentro do try.

finally — opcional, executa SEMPRE após try (e após catch se houver). É ideal para limpeza (fechar recursos, restaurar estado), e roda mesmo se você retornar ou relançar dentro do try/catch.

Exemplo:

try {
  // código
} catch (err) {
  // trata ou loga err
} finally {
  // roda sempre (fechamento/limpeza)
}


Comportamentos chave:

Se try terminar sem throw, catch é ignorado e finally (se existir) é executado.

Se try lançar, catch roda; depois finally roda.

Se catch fizer return ou throw, o finally ainda roda antes do retorno/lançamento final.

Exemplo mostrando finally com return:

function f(){
  try {
    return 1;
  } finally {
    console.log("finally");
  }
}
console.log(f()); // imprime "finally" e depois "1"

4) Problemas e observações sobre seu código + melhoria sugerida
Problemas notáveis

Ordem das checagens: você checa divisor == 0 antes de checar isNaN. Se o usuário cancelar (prompt → null) ou enviar string vazia, Number(null) => 0, então o cancelamento é interpretado como 0 e o erro de divisão por zero é lançado. Provavelmente você prefere tratar null/cancela/entrada vazia antes.

Number converte "" e null para 0 — talvez parseFloat/parseInt ou checagens explícitas de null/"" sejam melhores.

Usar == em vez de ===: não é um bug crítico aqui, mas === evita coerções inesperadas.

Versão melhorada (com finally, validações e mensagens amigáveis)
try {
  const rawDividendo = window.prompt("Inserir um dividendo:");
  const rawDivisor = window.prompt("Inserir um divisor:");

  // usuário apertou cancelar?
  if (rawDividendo === null || rawDivisor === null) {
    throw new Error("Operação cancelada pelo usuário.");
  }

  // vazio?
  if (rawDividendo.trim() === "" || rawDivisor.trim() === "") {
    throw new Error("Entrada vazia não é aceita.");
  }

  const dividendo = Number(rawDividendo);
  const divisor = Number(rawDivisor);

  if (Number.isNaN(dividendo) || Number.isNaN(divisor)) {
    throw new Error("Os valores devem ser números válidos.");
  }

  if (divisor === 0) {
    throw new Error("Você não pode dividir por zero!");
  }

  const resultado = dividendo / divisor;
  console.log("Resultado:", resultado);
} catch (error) {
  // Mensagem amigável + debugging
  console.error("Erro:", error.message);
  // se quiser ver stack: console.error(error.stack);
} finally {
  console.log("Você chegou ao fim");
}


Note que aqui finally garante que a mensagem final seja exibida sempre, mesmo em caso de erro.

5) Tipos de erros comuns em JS (nativos)

ReferenceError — acessar variável não declarada.

TypeError — operação inválida para o tipo (ex.: chamar algo que não é função).

SyntaxError — erro de sintaxe (detectado em parsing; não é capturado por try/catch em runtime do mesmo script).

RangeError — valor fora do intervalo permitido.

URIError — problemas com decodeURIComponent, etc.

EvalError — relacionado a eval (raramente usado hoje).

Você pode lançar qualquer coisa com throw (string, objeto, Error), mas é recomendável lançar instâncias de Error para manter message e stack.

6) Criando erros personalizados (subclassing)
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

throw new ValidationError("Valor inválido");


No catch você pode checar if (error instanceof ValidationError) { ... }.

7) Erros síncronos vs assíncronos — e try/catch com async/await

try/catch captura erros lançados sincronamente dentro do bloco.

Para erros assíncronos, se você usa Promises, deve usar .catch() ou try/catch dentro de uma função async com await.

Exemplo com Promise errado (não pega com try/catch fora do async):

try {
  setTimeout(() => { throw new Error("erro"); }, 1000);
} catch (e) {
  // NÃO pega o erro lançado dentro do callback async
}


O erro acima é lançado em outro tick e não será capturado pelo catch externo.

Correto com Promise / async:

async function run() {
  try {
    await Promise.reject(new Error("erro assíncrono"));
  } catch (e) {
    console.error("Peguei o erro:", e.message);
  }
}
run();

8) Boas práticas em tratamento de erro

Valide entradas antes de operar (ex.: checar null, "", NaN).

Não use exceções para fluxo normal — use validação e retornos controlados quando apropriado.

Lance Error (ou subclass) com mensagens claras.

Registre stack traces em logs de servidor (úteis para depuração).

Rethrow quando for necessário que o chamador trate também:

try {
  // ...
} catch (err) {
  log(err);
  throw err; // re-lança
}


Não sufoque erros silenciosamente (não fazer catch {} vazio) — pelo menos logue.

9) Exemplos rápidos e úteis
Exemplo: validação sem exceptions (opção)
function divide(dividendo, divisor) {
  if (divisor === 0) return { ok: false, error: "divisao_por_zero" };
  if (Number.isNaN(dividendo) || Number.isNaN(divisor)) {
    return { ok: false, error: "entrada_invalida" };
  }
  return { ok: true, result: dividendo / divisor };
}

const r = divide(10, 0);
if (!r.ok) console.warn(r.error);
else console.log(r.result);

Exemplo: async + try/catch
async function fetchData() {
  try {
    const res = await fetch("/alguma-api");
    if (!res.ok) throw new Error("Erro na requisição");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Falha ao buscar dados:", err.message);
    throw err; // reposiciona para quem chamou tratar
  }
}

10) Resumo em poucas linhas (o que você precisa levar)

try executa; catch pega exceções lançadas dentro do try; finally roda sempre.

throw new Error("msg") cria e lança um erro; catch(error) recebe o objeto Error.

Valide prompt antes de converter com Number(), pois null e "" se tornam 0 e podem causar comportamento inesperado.

Para código assíncrono use Promises / async+await e trate erros com try/catch dentro da função async ou com .catch() na Promise.

Prefira lançar instâncias de Error e, se necessário, criar subclasses (ValidationError) para distinguir tipos de erro.*/