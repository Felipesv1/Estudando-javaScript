// função construtora -> objetos
// função fabrica -> objetos
// construtora -> Pessoa (new)

function Pessoa(nome,sobrenome){
// atributos de metodos privados
    const ID = 123456;
    const metodoInterno = function(){};

// Atributos ou metodos publicos

this.nome = nome;
this.sobrenome = sobrenome;

this.metodo = function(){
    console.log(this.nome +': sou um método');

};

}

const p1 = new Pessoa('felipe','pereira')
const p2 = new Pessoa('betani','ruiz')