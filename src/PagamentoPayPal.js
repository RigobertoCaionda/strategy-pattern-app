const PagamentoStrategy = require("./PagamentoStrategy");

class PagamentoPayPal extends PagamentoStrategy {
  processarPagamento(valor) {
    console.log(`Pagamento de R$${valor} realizado com PayPal.`);
  }
}
module.exports = PagamentoPayPal