//JSON = (Javascript Object Notation) formato de intercâmbio de dados
//      Usado para trocar dados entre um servidor e uma aplicação web
//    Arquivos JSON {chave:valores} OU [valor1, valor2, valor3
//    JSON.stringify() = converte um objeto JS em uma string JSON
//    JSON.stringify(= converte um objeto JS em uma string JSON

/*const jsoNames = `["Bob Esponja", "Patrick", "LulaMolusco", "Sandy"]`;
const  jsonPerson =  `{"name": "Bob Esponja", "age": 30,"isEmployed": true,"hobbies":["Jellyfishing", "karatê", "Cooking"]}`
const jsonPessoas = `[{"name": "Bob Esponja", "age": 30,"isEmployed": true},
                { "name": "Patrick", "age": 34,"isEmployed": false},
                {"name": "Lula Molusco","age": 50,"isEmployed": false},
                { "name": "Sandy","age": 27,"isEmployed": false }]`

const parsedData = JSON.parse(jsonPerson);


console.log(parsedData);*/

fetch("pessoas.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value)))
    .catch(error => console.error(error))



    /*Perfeito — vamos com calma e linha a linha. Vou explicar primeiro o que é JSON de modo direto, e depois destrincho seu código (comentários + fetch) explicando cada parte e dando dicas práticas e uma versão com async/await. Liz aqui 💛

O que é JSON (resumo prático)

JSON = JavaScript Object Notation. É um formato leve para trocar dados entre sistemas (por exemplo: servidor ↔ cliente).

Estruturas básicas:

Objeto: { "chave": valor, "outra": 123 }

Array: [ valor1, valor2, {"obj": 1} ]

Regras importantes:

Strings e nomes de propriedades devem usar aspas duplas ("nome").

Não permite undefined, funções ou comentários.

Não pode ter vírgula final depois do último item (em JSON puro).

Uso prático: enviar respostas de APIs, salvar configurações, trocar dados entre front-end e back-end, armazenar testes, etc.

Conversão em JS:

JSON.parse(jsonString) → transforma string JSON em objetos/arrays JavaScript.

JSON.stringify(jsObject) → transforma objeto/array JS em string JSON (ideal para enviar ao servidor).

Segurança: nunca use eval em JSON. Sempre JSON.parse. Validar origem dos dados e evitar executar código vindo de fora.

Seu trecho comentado (explicação linha a linha)

Vou primeiro comentar os trechos que você deixou em comentário:

//JSON = (Javascript Object Notation) formato de intercâmbio de dados
//      Usado para trocar dados entre um servidor e uma aplicação web
//    Arquivos JSON {chave:valores} OU [valor1, valor2, valor3
//    JSON.stringify() = converte um objeto JS em uma string JSON
//    JSON.stringify(= converte um objeto JS em uma string JSON


Você já escreveu as ideias corretas: JSON é para trocar dados, e JSON.stringify() converte objeto JS para string JSON (útil para enviar no body de uma requisição).

Depois os exemplos (comentados no seu código):

const jsoNames = `["Bob Esponja", "Patrick", "LulaMolusco", "Sandy"]`;
const jsonPerson = `{"name": "Bob Esponja", "age": 30,"isEmployed": true,"hobbies":["Jellyfishing", "karatê", "Cooking"]}`
const jsonPessoas = `[{"name": "Bob Esponja", "age": 30,"isEmployed": true},
                { "name": "Patrick", "age": 34,"isEmployed": false},
                {"name": "Lula Molusco","age": 50,"isEmployed": false},
                { "name": "Sandy","age": 27,"isEmployed": false }]`


jsoNames é uma string que contém um array JSON de nomes. Para usar como objeto JS é preciso JSON.parse(jsoNames).

jsonPerson é uma string com um objeto JSON com tipos: string, number, boolean e um array (hobbies).

jsonPessoas é uma string com um array de objetos (útil para representar listas de usuários).

Observação: essas variáveis estão strings (entre crases). Para manipular os valores como objetos JS, use JSON.parse().

Exemplo:

const parsedData = JSON.parse(jsonPerson);
console.log(parsedData);


JSON.parse converte a string jsonPerson em um objeto JS:

parsedData.name === "Bob Esponja"

parsedData.hobbies[0] === "Jellyfishing"

Agora o bloco com fetch — explicação linha a linha
fetch("pessoas.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value)))
    .catch(error => console.error(error))


fetch("pessoas.json")

Faz uma requisição HTTP para o recurso "pessoas.json".

Retorna uma Promise que resolve para um objeto Response (o envelope da resposta HTTP).

Observação prática: "pessoas.json" deve estar disponível no mesmo domínio ou então o servidor deve permitir CORS; se estiver no mesmo projeto, normalmente funciona.

.then(response => response.json())

response.json() é um método do Response que lê o corpo da resposta e retorna outra Promise que resolve para o conteúdo já parseado (ou seja, um objeto/array JS).

Importante: response.json() também pode rejeitar se o corpo não for JSON válido.

.then(values => values.forEach(value => console.log(value)))

Aqui values é o resultado do response.json() — provavelmente um array (no seu exemplo jsonPessoas), então você chama .forEach() para iterar e console.log(value) cada item.

Se values for um objeto em vez de array, forEach dará erro; por isso é bom garantir/validar o tipo.

.catch(error => console.error(error))

Captura qualquer erro ocorrido em qualquer etapa da cadeia: falha do fetch (ex.: sem conexão), erro de CORS, response.json() falhando ao parsear, ou erro dentro do .then.

Boa prática: mostrar mensagem amigável ao usuário além de log no console.

Comportamento assíncrono (fluxo real)

fetch é assíncrono; seu código não bloqueia a thread. Enquanto o navegador espera a resposta, outras coisas continuam rodando.

As Promises garantem que você só manipule os dados quando eles estiverem disponíveis.

Erros e armadilhas comuns

CORS: se o JSON estiver em outro domínio, o servidor precisa permitir CORS via cabeçalhos. Caso contrário você verá erro de CORS no console.

response.ok: fetch resolve a Promise mesmo para respostas 404/500 — por isso é bom checar response.ok antes de response.json().

JSON inválido: response.json() lança se o corpo não for JSON válido.

Tipos inesperados: confirmar se a resposta é array quando você chama .forEach.

Exemplo de checagem simples:

fetch("pessoas.json")
  .then(response => {
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  })
  .then(values => {
    if (!Array.isArray(values)) throw new Error("Esperava um array de pessoas");
    values.forEach(v => console.log(v));
  })
  .catch(err => console.error("Algo deu errado:", err));

Versão equivalente usando async/await (mais legível)
async function carregarPessoas() {
  try {
    const response = await fetch("pessoas.json");
    if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
    const values = await response.json();
    if (!Array.isArray(values)) throw new Error("Resposta não é um array");
    values.forEach(v => console.log(v));
  } catch (error) {
    console.error("Falha ao carregar pessoas:", error);
  }
}

carregarPessoas();


await pausa aquela função async até a Promise resolver (sem travar a UI).

try/catch captura erros de qualquer await.

Boas práticas rápidas (resumão)

Sempre valide response.ok antes de usar o JSON.

Use JSON.parse() só em strings confiáveis; caso venha de usuário externo, valide.

Para enviar JSON ao servidor, use JSON.stringify(obj) e defina header Content-Type: application/json.

fetch("/api", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Vinicius" })
})


Evite comentários ou trailing commas nos arquivos .json (JSON puro não permite).

Em apps maiores, trate erros para mostrar feedback ao usuário (ex.: “não foi possível carregar dados”).*/