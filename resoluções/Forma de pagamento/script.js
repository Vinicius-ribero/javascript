const checkbox = document.getElementById("checkbox");
const visa = document.getElementById("visa");
const mastercard = document.getElementById("mastercard");
const paypal = document.getElementById("paypal");
const enviar = document.getElementById("enviar");
const resultado = document.getElementById("resultado");
const pagamentoresultado = document.getElementById("pagamentoresultado");

enviar.onclick = function() {
  if (checkbox.checked) {
    resultado.textContent = "Você está inscrito!";
  } else {
    resultado.textContent = "Você ainda não se inscreveu!";
  }

  if (visa.checked) {
    pagamentoresultado.textContent = "Você está pagando com Visa.";
  } else if (mastercard.checked) {
    pagamentoresultado.textContent = "Você está pagando com MasterCard.";
  } else if (paypal.checked) {
    pagamentoresultado.textContent = "Você está pagando com PayPal.";
  } else {
    pagamentoresultado.textContent = "Selecione uma forma de pagamento.";
  }
};
