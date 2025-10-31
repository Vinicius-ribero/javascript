// checked = propriedade que determina o estado selecionado de um elemento de caixa de seleção ou botão de opção HTML

const checkbox = document.getElementById("checkbox")
const Visa = document.getElementById("Visa")
const mastercard = document.getElementById("mastercard")
const paypal = document.getElementById("paypal")
const enviar = document.getElementById("enviar")
const resultado = document.getElementById("resultado")
const pagamentoresultado = document.getElementById("pagamentoresultado")

enviar.onclick = function(){
        if(checkbox.checked){
            resultado.textContent = `Você está inscrito!`
        } 
        else{
            resultado.textContent = `Você ainda não se inscreveu!`
        } 
        if (Visa.checked){
            pagamentoresultado.textContent = `Você está pagando com Visa`

        }
        else if(mastercard.checked){
            pagamentoresultado.textContent = `Você está pagando com Mastercard`
        }
        else if(paypal.checked){
            pagamentoresultado.textContent = `Você está pagando com Paypal`
        }
        else{
            pagamentoresultado.textContent = `Selecione uma forma de pagamento`
        }
}