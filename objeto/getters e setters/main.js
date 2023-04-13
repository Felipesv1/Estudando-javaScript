// Getter e Setter
// funcao constructor

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  let estoquePrivado = estoque;
  Object.defineProperty(this, "estoque", {
    enumerable: true, //mostra a chave
    configurable: false, //configurável
    get: function () {
      return estoquePrivado;
    },
    set: function (valor) {
      if (typeof valor !== "number") {
        // throw new TypeError("deu ruim ai ")
        console.log("bad value");
        return;
      }
      estoquePrivado = valor;
    },
  });
}
// const p1 = new Produto("camiseta", 20, 3);

// p1.estoque = '500'
// console.log(p1.estoque)

// funcao factory
function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace('ababua', '')
      nome = valor;
    },
  };
}


const p2 = criaProduto("camiseta");
p2.nome = ' ali ababua'
console.log(p2.nome)