function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    
    if (num.value.length == 0) {
        window.alert('Faltam dados! Digite um número.')
    } else {
        var n = Number(num.value)
        tab.innerHTML = '' // limpa o select antes de gerar a tabuada
        for (var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}` // opcional, pode ser usado em um backend
            tab.appendChild(item)
        }
    }
}
