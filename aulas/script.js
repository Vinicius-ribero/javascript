// script.js
document.getElementById("formServico").addEventListener("submit", enviarPedido);

async function enviarPedido(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const categoria = document.getElementById("categoria").value;
  const descricao = document.getElementById("descricao").value;

  const pedido = {
    nome,
    categoria,
    descricao,
    data: new Date().toLocaleString()
  };

  // 1️⃣ Salvar pedido no banco
  const pedidosRef = firebase.database().ref("pedidos");
  const novoPedido = await pedidosRef.push(pedido);
  const pedidoId = novoPedido.key;

  console.log("Pedido salvo com sucesso:", pedidoId);

  // 2️⃣ Procurar prestadores da mesma categoria
  const prestadoresRef = firebase.database().ref("prestadores");
  prestadoresRef.orderByChild("categoria").equalTo(categoria).once("value", snapshot => {
    const prestadores = snapshot.val();

    if (prestadores) {
      Object.values(prestadores).forEach(prestador => {
        // Enviar notificação simulada
        console.log(`🔔 Enviar para ${prestador.nome}: novo pedido em ${categoria}`);
      });
      alert("Seu pedido foi enviado para os prestadores da categoria!");
    } else {
      alert("Nenhum prestador disponível para esta categoria ainda.");
    }
  });
}
