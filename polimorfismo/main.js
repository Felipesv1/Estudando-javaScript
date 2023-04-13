const { Console } = require("console");


function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};
Conta.prototype.verSaldo = function () {
  console.log(
    `ag/c: ${this.agencia} / ${this.conta} | R$${this.saldo.toFixed(2)}`
  );
};
Conta.prototype.sacar = function (valor) {
  if (valor > this.saldo) {
    console.log(`saldo insuficiente : ${this.saldo}`);
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

const conta1 = new Conta(24, 66, 10);



function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);

ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
  if (valor > this.saldo + this.limite) {
    console.log(`saldo insuficiente : ${this.saldo}`);
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);

ContaPoupanca.prototype.constructor = ContaPoupanca;

const cc = new ContaCorrente(22, 11, 0, 100);

cc.depositar(200)
cc.sacar(300)
cc.sacar(1)

console.log()

const cp = new ContaPoupanca(11,44,0)

cp.depositar(10)
cp.sacar(11)
