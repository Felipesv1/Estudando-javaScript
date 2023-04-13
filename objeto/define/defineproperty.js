// defineProrperty - defineProperties

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true,  //mostra a chave
    value:estoque, // valor
    writable:false, //pode alterar
    configurable:false //configurável 
  });

  Object.defineProperties(this, {
    nome:{
        enumerable: true,  //mostra a chave
        value:nome, // valor
        writable:true, //pode alterar
        configurable:true //configurável 
    },
    preco:{
        enumerable: true,  //mostra a chave
        value:preco, // valor
        writable:true, //pode alterar
        configurable:true //configurável 
    },
  })
}

const p1 = new Produto("camiseta", 20, 3);
