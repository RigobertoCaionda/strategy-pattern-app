const PagamentoStrategy = require("./PagamentoStrategy");

class PagamentoCartaoCredito extends PagamentoStrategy {
  processarPagamento(valor) {
    console.log(`Pagamento de R$${valor} realizado com cartão de crédito.`);
  }
}
module.exports = PagamentoCartaoCredito