//`toLocalString()` = retorna uma string com uma representação de um número que se adapta ao idioma.

        //Intl.NumberFormat()

        // `number.toLocaleString("locale", {options})`

        // 'locale' = especifica o idioma (indefinido = padrão definido no navegador)
        //'options' = objeto com opções de formataçãolet 

let número = 123456.789;

//número = número.toLocaleString("en-US");
// número = número.toLocaleString("hi-IN");
//número = número.toLocaleString("de-De");

// número = número.toLocaleString("en-US", {style: "currency", currency:"USD"});
// número = número.toLocaleString("hi-IN", {style: "currency", currency:"INR"})
número = número.toLocaleString("de-DE", {style: "currency", currency:"EUR"});



console.log(número)
