class ProcessadorPagamento {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  processarPagamento(valor) {
    this.strategy.processarPagamento(valor);
  }
}
module.exports = ProcessadorPagamento