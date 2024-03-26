const PagamentoBoleto = require("./PagamentoBoleto");
const PagamentoCartaoCredito = require("./PagamentoCartaoCredito");
const PagamentoPayPal = require("./PagamentoPayPal");
const ProcessadorPagamento = require("./ProcessadorPagamento");

const processadorPagamento = new ProcessadorPagamento(
  new PagamentoCartaoCredito()
);
processadorPagamento.processarPagamento(100);

processadorPagamento.setStrategy(new PagamentoPayPal());
processadorPagamento.processarPagamento(50);

processadorPagamento.setStrategy(new PagamentoBoleto());
processadorPagamento.processarPagamento(200);
