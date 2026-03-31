const valorConta = 100.00;
const percentualGorjeta = 15.00;

const valorGorjeta = (valorConta * percentualGorjeta) / 100;
const valorTotal = valorConta + valorGorjeta;

console.log("Valor da Conta: R$" + valorConta.toFixed(2) + ", Gorjeta (" + percentualGorjeta.toFixed(2) + "%): R$" + valorGorjeta.toFixed(2) + ", Total a pagar: R$" + valorTotal.toFixed(2));