function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.leght == 0) {
        res.innerHTML= 'impossivel contar!'
        window.alert ('[ERRO] faltam dados!')
    }else {
       res.innerHTML = 'Contando: '
       var i = Number(ini.value)
       var f = Number (fim.value)
       var p = Number (passo.value)
       if (p <= 0) {
            window.alert('Passo inválido! Considerado PASSO 1')
            p=1
       }
       if ( i < f) {
        //Conatgem crescente
        for(var c = i; c <=f; c += p) {
        res.innerHTML += `${c} \u{1F603}`
       }
      
       } else {
        //contagem regressiva
        for (var c = i; c >= f; c -= p){
            res.innerHTML += ` ${c} \u{1f449}`
        }
       
       }
        res.innerHTML += `\u{1F3c1}`
    }
} 