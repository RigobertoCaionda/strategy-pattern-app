const PagamentoStrategy = require("./PagamentoStrategy");

class PagamentoBoleto extends PagamentoStrategy {
  processarPagamento(valor) {
    console.log(`Pagamento de R$${valor} realizado com boleto bancário.`);
  }
}
module.exports = PagamentoBoleto