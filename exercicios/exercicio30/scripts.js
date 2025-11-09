// gerador de senha aleatória

function geradordesenha(length, incluirMinu, incluirMaiu, incluirNumeros, incluirSimbolos) {

    const caracteresMinúsculos = "abcdefghijklmnopqrstuvwxyz"
    const caracteresMaiúsculos = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const caracteresNuméricos = "0123456789"
    const caracteresSímbolos = "!@#$%¨&*()_+-="

    let caracteresPermitidos = ""
    let senha = ""

    // Correções nas linhas abaixo:
    caracteresPermitidos += incluirMinu ? caracteresMinúsculos : ""
    caracteresPermitidos += incluirMaiu ? caracteresMaiúsculos : ""
    caracteresPermitidos += incluirNumeros ? caracteresNuméricos : ""
    caracteresPermitidos += incluirSimbolos ? caracteresSímbolos : ""

   if(length <= 0){
    return `(A senha deve ter pelo menos 1 caracteres)`
   }

   if(caracteresPermitidos.length === 0){
    return `(É necessário selecionar pelo menos um conjunto de caracteres)`
   }

   for(let i = 0; i < length, i++;){
    const randomIndex = Math.floor(Math.random() * length);
    senha += caracteresPermitidos [randomIndex]
   }

   return 'password'

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

console.log(`Gerador de senha: ${senha}`)

