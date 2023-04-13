const Container = document.querySelector('.container')

function Pessoa(nome, sobrenome) {
  (this.nome = nome), (this.sobrenome = sobrenome);
}

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};

const Pessoa1 = new Pessoa("alfredo", "A."); // <-- Pessoa = função construtora
const Pessoa2 = new Pessoa("berenice", "B."); // <-- Pessoa = função construtora






const data = new Date();


console.dir(Pessoa1.nomeCompleto());
console.dir(Pessoa2);
console.log(data.toLocaleDateString());

// manipulando prototype ----------------------------

// new Object -> object.prototype

const objA = {
  chaveA: "a",
  // _proto_ : Object.prototype
};

const objB = {
  chaveB: "b",
  // _proto_ : objA
};

const objC = new Object();
objC.chaveC = " c";

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

// -------------------------------------------------------

function Produto(nome, preco) {
  (this.nome = nome), (this.preco = preco);
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};
Produto.prototype.aumenta = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const p1 = new Produto("camiseta", 25);
p1.desconto(50)
console.log(p1);

const p2 = {
  nome: "caneca",
  preco: 15,
};

Object.setPrototypeOf(p2, Produto.prototype);
p2.desconto(45);
console.log(p2);

const p3 = Object.create(Produto.prototype,{
    preco:{
      writable:true,
      configurable:true,
      enumerable:true,
      value:99
    },
    tamanho:{
      writable:true,
      configurable:true,
      enumerable:true,
      value:42

    }
})
p3.desconto(50)
console.log(p3);
