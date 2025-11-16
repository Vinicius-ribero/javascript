// gerador de senha aleatória

function geradordesenha(length, incluirMinu, incluirMaiu, incluirNumeros, incluirSimbolos)
 {

    const caracteresMinusculos = "abcdefghijklmnopqrstuvwxyz"
    const caracteresMaiusculos = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const caracteresNumericos = "0123456789"
    const caracteresSimbolos = "!@#$%¨&*()_+-="

    let caracteresPermitidos = ""
    let senha = ""

    // Montagem dos caracteres permitidos de acordo com os parâmetros
    if (incluirMinu) caracteresPermitidos += caracteresMinusculos
    if (incluirMaiu) caracteresPermitidos += caracteresMaiusculos
    if (incluirNumeros) caracteresPermitidos += caracteresNumericos
    if (incluirSimbolos) caracteresPermitidos += caracteresSimbolos

    if (length <= 0) {
        return "A senha deve ter pelo menos 1 caractere"
    }

    if (caracteresPermitidos.length === 0) {
        return "É necessário selecionar pelo menos um conjunto de caracteres"
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * caracteresPermitidos.length)
        senha += caracteresPermitidos[randomIndex]
    }

    return senha
}

const senhalenght = 10
const incluirMinu = true
const incluirMaiu = true
const incluirnumeros = true
const incluirsimbolos = true

const senha = geradordesenha(
    senhalenght, 
    incluirMinu, 
    incluirMaiu, 
    incluirnumeros, 
    incluirsimbolos
)

console.log(`Gerador de senha: ${senha}`);





/*1) Assinatura da função
function geradordesenha(length, incluirMinu, incluirMaiu, incluirNumeros, incluirSimbolos) {


Aqui você declara uma função chamada geradordesenha.

Ela recebe 5 parâmetros:

length → número de caracteres que a senha deve ter.

incluirMinu → true se quer letras minúsculas (a–z).

incluirMaiu → true se quer letras maiúsculas (A–Z).

incluirNumeros → true se quer dígitos (0–9).

incluirSimbolos → true se quer símbolos (por exemplo !@#).

2) Conjuntos de caracteres
const caracteresMinusculos = "abcdefghijklmnopqrstuvwxyz"
const caracteresMaiusculos = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const caracteresNumericos = "0123456789"
const caracteresSimbolos = "!@#$%¨&*()_+-="


Cada const é uma string com todos os caracteres possíveis daquele tipo.

Você vai usar essas strings para montar um conjunto único de caracteres permitidos.

3) Variáveis internas
let caracteresPermitidos = ""
let senha = ""


caracteresPermitidos: string vazia que vai receber (concatenar) os caracteres escolhidos pelo usuário.

senha: string vazia que será preenchida caractere por caractere para formar a senha final.

4) Montagem do conjunto de caracteres permitido
if (incluirMinu) caracteresPermitidos += caracteresMinusculos
if (incluirMaiu) caracteresPermitidos += caracteresMaiusculos
if (incluirNumeros) caracteresPermitidos += caracteresNumericos
if (incluirSimbolos) caracteresPermitidos += caracteresSimbolos


Para cada if: se o parâmetro for true, você adiciona (concatena) aquela string ao caracteresPermitidos.

Exemplo: se incluirMinu = true e incluirNumeros = true, caracteresPermitidos ficará "abcdefghijklmnopqrstuvwxyz0123456789".

5) Validação: tamanho mínimo
if (length <= 0) {
    return "A senha deve ter pelo menos 1 caractere"
}


Se length for zero ou negativo, a função termina imediatamente e devolve uma mensagem de erro.

return interrompe a execução da função.

6) Validação: pelo menos um tipo de caractere selecionado
if (caracteresPermitidos.length === 0) {
    return "É necessário selecionar pelo menos um conjunto de caracteres"
}


Se caracteresPermitidos ainda estiver vazio (ou seja, o usuário não marcou nenhum true), a função retorna uma mensagem de erro.

Evita tentar gerar senha com um conjunto vazio (o que causaria erro na lógica).

7) Laço que gera a senha
for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * caracteresPermitidos.length)
    senha += caracteresPermitidos[randomIndex]
}


Explicando cada parte:

for (let i = 0; i < length; i++) { ... } → repete o bloco length vezes (um caractere por iteração).

Math.random() gera um número pseudoaleatório >= 0 e < 1.

Math.random() * caracteresPermitidos.length dá um número entre 0 (inclusivo) e caracteresPermitidos.length (exclusivo).

Math.floor(...) transforma esse número em um inteiro válido de índice (0, 1, 2, ...).

caracteresPermitidos[randomIndex] pega o caractere naquele índice.

senha += ... concatena o caractere selecionado à string senha.

Resultado: após length iterações, senha tem length caracteres aleatórios escolhidos uniformemente do conjunto permitido.

8) Retorno da função
return senha


A função devolve a senha gerada (por exemplo "a9B!k3LmQ2").

9) Chamando a função (exemplo)
const senhalenght = 10
const incluirMinu = true
const incluirMaiu = true
const incluirnumeros = true
const incluirsimbolos = true

const senha = geradordesenha(
    senhalenght, 
    incluirMinu, 
    incluirMaiu, 
    incluirnumeros, 
    incluirsimbolos
)

console.log(`Gerador de senha: ${senha}`)


Você define as opções (no exemplo, todas true e comprimento 10).

Chama a função e armazena o resultado em senha.

Imprime no console a senha gerada.

Observação pequena: você escreveu senhalenght (com ght) em vez de senhalength (ou senhaLength). Isso não causa erro — é só o nome da variável — mas atenção à ortografia para evitar confusão.

10) Comportamento de segurança e aleatoriedade

Math.random() é suficiente para senhas simples, mas não é criptograficamente seguro. Para senhas que precisam de alta segurança (ex.: contas reais), em ambientes que suportem, prefira APIs seguras (ex.: crypto.getRandomValues() no navegador ou crypto.randomBytes() no Node).

O algoritmo atual não garante que pelo menos um caractere de cada tipo selecionado apareça na senha. Ele escolhe cada caractere independente e aleatoriamente. Se você quer garantir pelo menos 1 minúscula, 1 maiúscula etc., a função precisa de lógica extra (por exemplo, forçar a inclusão de um caractere de cada tipo e embaralhar o resultado).

11) Melhorias possíveis (opções)

Garantir pelo menos um caractere de cada tipo selecionado (mais seguro para políticas de senha).

Usar crypto.getRandomValues() para mais segurança.

Validar que length não exceda um máximo (por exemplo length > 128) para evitar problemas.

Fornecer uma interface (HTML + botão) com opção de copiar a senha.

Evitar símbolos ambíguos ('l', '1', 'O', '0') se necessário.*/


//EXPLICAÇÃO GERAL 

/*✅ 1) Assinatura da função
function geradordesenha(length, incluirMinu, incluirMaiu, incluirNumeros, incluirSimbolos) {


Resumo:
Define uma função chamada geradordesenha e informa quais valores ela vai receber ao ser usada.

Função disso:
Permitir que você escolha o tamanho da senha e quais tipos de caracteres incluir (minúsculos, maiúsculos, números e símbolos).

✅ 2) Conjuntos de caracteres
const caracteresMinusculos = "abcdefghijklmnopqrstuvwxyz"
const caracteresMaiusculos = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const caracteresNumericos = "0123456789"
const caracteresSimbolos = "!@#$%¨&*()_+-="


Resumo:
São listas de caracteres organizadas por categoria.

Função disso:
Servem como “caixas de letras” que serão usadas para montar a senha.
Cada string representa um tipo de caractere.

✅ 3) Variáveis internas
let caracteresPermitidos = ""
let senha = ""


Resumo:
Criação de duas variáveis vazias.

Função disso:

caracteresPermitidos: será preenchida com os tipos de caracteres escolhidos pelo usuário.

senha: acumulará os caracteres sorteados até formar a senha final.

✅ 4) Montagem do conjunto de caracteres permitidos
if (incluirMinu) caracteresPermitidos += caracteresMinusculos
if (incluirMaiu) caracteresPermitidos += caracteresMaiusculos
if (incluirNumeros) caracteresPermitidos += caracteresNumericos
if (incluirSimbolos) caracteresPermitidos += caracteresSimbolos


Resumo:
Adiciona os caracteres ao conjunto permitido, conforme as escolhas do usuário (true/false).

Função disso:
Criar a “piscina de caracteres” da qual o gerador irá sortear.
Quanto mais opções estiverem true, mais variado será o conjunto final.

✅ 5) Validação do tamanho
if (length <= 0) {
    return "A senha deve ter pelo menos 1 caractere"
}


Resumo:
Verifica se o tamanho da senha é válido.

Função disso:
Evitar erros e impedir que o usuário tente gerar uma senha com tamanho inválido (0 ou negativo).

✅ 6) Validação do conjunto de caracteres
if (caracteresPermitidos.length === 0) {
    return "É necessário selecionar pelo menos um conjunto de caracteres"
}


Resumo:
Checa se pelo menos um tipo de caractere foi selecionado.

Função disso:
Evita tentar gerar senha sem ter nenhum caractere disponível para sortear, o que geraria erro.

✅ 7) Laço que gera a senha
for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * caracteresPermitidos.length)
    senha += caracteresPermitidos[randomIndex]
}


Resumo:
Repete várias vezes para montar a senha caractere por caractere.

Função disso:

Executar o processo de:

escolher um caractere aleatório

adicionar à senha

Repetir até completar o tamanho desejado (length).

Em detalhes:

Math.random() → gera um número aleatório

Math.floor() → transforma esse número em um índice inteiro

Seleciona um caractere dentro dos permitidos

Junta na variável senha

✅ 8) Retorno da senha
return senha


Resumo:
Devolve o resultado final.

Função disso:
Mandar a senha pronta de volta para quem chamou a função.

✅ 9) Definição dos parâmetros para o uso
const senhalenght = 10
const incluirMinu = true
const incluirMaiu = true
const incluirnumeros = true
const incluirsimbolos = true


Resumo:
Configurações que o usuário escolhe.

Função disso:
Definir quais opções serão passadas para a função geradora.

✅ 10) Chamada da função
const senha = geradordesenha(
    senhalenght, 
    incluirMinu, 
    incluirMaiu, 
    incluirnumeros, 
    incluirsimbolos
)


Resumo:
Aqui a função é realmente executada.

Função disso:
Enviar os valores escolhidos para dentro da função e receber a senha pronta.

✅ 11) Exibição da senha
console.log(`Gerador de senha: ${senha}`)


Resumo:
Mostra o resultado no console.

Função disso:
Permitir que o usuário visualize a senha gerada.*/