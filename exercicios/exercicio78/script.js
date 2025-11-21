//cookie = Um pequeno arquivo de texto armazenado no seu computador, usado para lembrar informações sobre o usuário, salvas em pares nome = valor.

// document.cookie = "firstName=Patrick; expires=Sun, 21 November 2030 12:00:00 UTC; path =/";
// document.cookie = "lastName=SquarePants, expires=Sun, 21 November 2030 12:00:00 UTC; path =/";

// console.log(document.cookie)

// deleteCookie("firstName")
// deleteCookie("lastName")
// deleteCookie("email")
//setCookie("email", "Sponge@.com", 365)

// console.log(document.cookie)

// setCookie("firstName", "SpongeBob", 365);
// setCookie("lastName", "SpongeBob", 365);

// console.log(getCookie("firstName"));
// console.log(getCookie("lastName"));


const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submit = document.querySelector("#submit");
const cookies =  document.querySelector("#cookies")

submit.addEventListener("click", () =>{
    setCookie("firstName", firstText.value, 365);
    setCookie("lasttName", lastText.value, 365);
})

cookies.addEventListener("click", () =>{
    firstText.value = getCookie("firstName")
    lastText.value = getCookie("lastName")
})


function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 *1000)
    let expires = "expires=" + date.toUTCString();
    document.cokie = `${name}=${value};${expires}; path=/`
}
function deleteCookie(name){
    setCookie(name, null, null)
}
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie)
    const cArray = cDecoded.split(";");
    let result;
    
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.lenght + 1)
        }
    })
    return result;
}


/*1) O que é um cookie (resumo prático)

Cookie é um pequeno arquivo / par nome=valor que o navegador armazena e envia automaticamente ao servidor nas requisições HTTP para o mesmo domínio.

Serve para lembrar informações entre páginas/sessões: sessão do usuário, preferências, carrinho, flags A/B, etc.

Limitações e segurança:

Tamanho ~4KB por cookie; limite de cookies por domínio (~20-50 dependendo do navegador).

Não é seguro para dados sensíveis (senha, token) se acessível via JavaScript — prefira HttpOnly cookies (só o servidor pode ler).

Use Secure (só em HTTPS) e SameSite para reduzir CSRF.

Cookies setados por JavaScript não podem ter HttpOnly.

2) Problemas no seu código (bugs e causas)

Vou listar os erros que podem impedir o funcionamento:

Nome de campo errado no setCookie

document.cokie = `...`


→ Deve ser document.cookie (typo).

Nome do campo lasttName com 2 t
No submit você escreveu lasttName ao setar o cookie, mas depois tenta ler lastName. Resultado: cookie diferente e getCookie("lastName") retorna undefined.

deleteCookie inválido

setCookie(name, null, null)


→ Passar null pra dias quebra o cálculo de expires. Para apagar cookie, defina expires pra uma data no passado (ou use max-age=0).

getCookie com erros de lógica/ortografia

element.indexOf(name) == 0 falha se existir espaço antes do cookie (o formato é "name=value; name2=value2" — após split por ; cada elemento geralmente começa com um espaço).

name.lenght → length (typo).

Não decodifica corretamente e não remove espaços.

Não está usando encodeURIComponent / decodeURIComponent no set/get (bom para valores com caracteres especiais).

3) Explicação linha-a-linha (do seu código original)

Vou explicar as partes que importam (omitindo os comentários já entendidos):

const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submit = document.querySelector("#submit");
const cookies =  document.querySelector("#cookies")


Seleciona elementos do DOM: inputs e botões.

submit.addEventListener("click", () =>{
    setCookie("firstName", firstText.value, 365);
    setCookie("lasttName", lastText.value, 365);
})


Ao clicar, chama setCookie para criar 2 cookies (mas lasttName está com typo — cria cookie com nome errado).

cookies.addEventListener("click", () =>{
    firstText.value = getCookie("firstName")
    lastText.value = getCookie("lastName")
})


Ao clicar, preenche inputs com valores lidos dos cookies. Se o cookie não existir, retorna undefined.

Funções:

function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 *1000)
    let expires = "expires=" + date.toUTCString();
    document.cokie = `${name}=${value};${expires}; path=/`
}


Objetivo: criar cookie com expires. Problemas: typo document.cokie, não usa encodeURIComponent, não inclui SameSite/Secure.

function deleteCookie(name){
    setCookie(name, null, null)
}


Tenta deletar, mas passa null e faz mal o cálculo. Método incorreto.

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie)
    const cArray = cDecoded.split(";");
    let result;
    
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.lenght + 1)
        }
    })
    return result;
}


Lê document.cookie, divide por ;, tenta achar o cookie que começa com name, e extrai valor. Erros: indexOf(name) == 0 falha com espaços; name.lenght typo; pode deixar espaços no começo; não usa trim(); não quebra se cookie não existir.

4) Versão corrigida e melhorada (copie e cole — já pronta para uso)
// Função para criar/atualizar cookie
function setCookie(name, value, daysToLive = 365, options = {}) {
  // encode value
  const encodedValue = encodeURIComponent(value);

  let cookie = `${name}=${encodedValue}; path=/`;

  if (typeof daysToLive === "number") {
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
    cookie += `; expires=${date.toUTCString()}`;
  }

  // Opções extras (secure, sameSite, domain)
  if (options.domain) cookie += `; domain=${options.domain}`;
  if (options.secure) cookie += `; Secure`;            // só HTTPS
  if (options.httpOnly) {
    // NOTE: HttpOnly só pode ser setado pelo servidor (não tem efeito via JS)
    console.warn("httpOnly só funciona quando o cookie é setado pelo servidor.");
  }
  if (options.sameSite) cookie += `; SameSite=${options.sameSite}`; // Lax | Strict | None

  document.cookie = cookie;
}

// Função para ler cookie
function getCookie(name) {
  const cookies = document.cookie ? document.cookie.split(";") : [];
  for (let i = 0; i < cookies.length; i++) {
    const c = cookies[i].trim();               // remove espaços
    if (c.startsWith(name + "=")) {
      return decodeURIComponent(c.substring(name.length + 1));
    }
  }
  return null; // não encontrado
}

// Deletar cookie (definindo expirada no passado)
function deleteCookie(name, options = {}) {
  // Para deletar também considerar domain/path se foram usados ao criar
  setCookie(name, "", -1, options);
}

Uso no seu HTML (corrigido)
submit.addEventListener("click", () => {
  setCookie("firstName", firstText.value, 365);
  setCookie("lastName", lastText.value, 365);
});

cookies.addEventListener("click", () => {
  firstText.value = getCookie("firstName") || "";
  lastText.value = getCookie("lastName") || "";
});

5) Exemplos práticos (passo a passo)
A) Guardar um valor simples
setCookie("theme", "dark", 30); // expira em 30 dias

B) Guardar um objeto (JSON)
const user = { id: 123, name: "Vinicius" };
setCookie("user", JSON.stringify(user), 7);


Ao ler:

const userCookie = getCookie("user");
const userObj = userCookie ? JSON.parse(userCookie) : null;

C) Deletar cookie
deleteCookie("user");

D) Cookie com opções de segurança (quando aplicável)
// Atenção: HttpOnly só pode ser setado pelo servidor; Secure exige HTTPS.
setCookie("pref", "x", 365, { secure: true, sameSite: "Lax" });

E) Ler todos os cookies (mostrar em console)
console.log(document.cookie); // string "k1=v1; k2=v2"

6) Boas práticas / recomendações

Dados sensíveis → não em cookies acessíveis via JS. Use HttpOnly cookie enviado pelo servidor para tokens de sessão.

Preferir localStorage para grandes quantidades de dados que só frontend precisa (não será enviado em todas requisições HTTP).

Use SameSite=Lax ou Strict para reduzir CSRF, ou SameSite=None; Secure para cross-site cookies (mas só em HTTPS).

Sempre encodeURIComponent ao salvar e decodeURIComponent ao ler.

Considere max-age em vez de expires para controle em segundos (document.cookie = "k=v; max-age=3600").

Limite o uso de cookies (cada cookie vai no header em todas requisições para o domínio — overhead).

7) Exemplo do lado do servidor (básico) — Set-Cookie

Se você quiser que o servidor crie um cookie HttpOnly seguro (não acessível por JS), por exemplo em Node/Express:

res.cookie('sessionId', 'abc123', {
  httpOnly: true,
  secure: true,      // só via HTTPS
  sameSite: 'Lax',
  maxAge: 24 * 60 * 60 * 1000
});


Esse cookie o navegador envia automaticamente em requisições, e não pode ser lido por document.cookie.

8) Debugging rápido quando algo não funciona

Abra DevTools → Application (ou Storage) → Cookies → veja cookies do domínio, path, expires, flags.

Se cookie não aparece: verifique path, domain, secure (precisa HTTPS), e se o navegador bloqueou 3rd-party cookies.

Se leitura em JS retorna null: verifique se nome está correto e se cookie foi criado com HttpOnly (nesse caso JS não verá).*/


//🍪 /*O que é um cookie?

/*Um cookie é um pequeno arquivo que o navegador salva no computador do usuário.
Ele guarda informações importantes para o site, como:

Preferências do usuário

Dados de login

Itens do carrinho

Histórico de navegação dentro daquele site

Informações para anúncios

Configurações que o usuário escolheu

Ele é pequeno, geralmente só texto, e o tamanho máximo é por volta de 4KB.

📌 Para que servem os cookies?
✔️ 1) Lembrar o usuário

Guardar login, tema escuro, idioma, fonte, cor, etc.

✔️ 2) Manter carrinhos de compra

Se você coloca algo no carrinho e fecha o site, ele volta depois—isso é um cookie.

✔️ 3) Analytics / Métricas

Saber quantos visitantes voltaram ao site.

✔️ 4) Publicidade

Mostrar anúncios personalizados com base no que você pesquisou.

✔️ 5) Sessões

Controlar se o usuário está logado ou não.

📦 Exemplos práticos de cookies
🔸 Exemplo 1: Site lembrando o tema escolhido
document.cookie = "tema=escuro; expires=Fri, 31 Dec 2027 23:59:59 GMT;";


Isso cria um cookie chamado tema com valor escuro.

🔸 Exemplo 2: Salvando o nome do usuário
document.cookie = "usuario=Vinicius; path=/;";

🔸 Exemplo 3: Lendo cookies
console.log(document.cookie);


Saída típica:

usuario=Vinicius; tema=escuro

🔸 Exemplo 4: Remover cookie
document.cookie = "tema=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

🎯 Resumo simples
Conceito	Explicação
🍪 Cookie	Dado salvo pelo navegador para lembrar algo
💡 Serve para	Login, preferências, anúncios, carrinhos
🗃️ Tamanho	Máx. ~4KB
📅 Expira	Você define quando ele deixa de existir*/