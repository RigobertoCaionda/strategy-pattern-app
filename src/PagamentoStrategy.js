class PagamentoStrategy {
  processarPagamento(valor) {
    throw new Error("Método processarPagamento() deve ser implementado.");
  }
}
module.exports = PagamentoStrategy