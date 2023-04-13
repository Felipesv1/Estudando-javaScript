
const falar = {
    falar(){
        console.log(`${this.nome} está falando`)
    }
}
const bebendo = {
    bebendo(){
        console.log(`${this.nome} está bebendo`)
    }
}
const comendo = {
    comendo(){
        console.log(`${this.nome} está comendo`)
    }
}
const pessoaPrototype = Object.assign({},falar,bebendo,comendo)
function criaPessoa(nome, sobrenome){
    return Object.create(pessoaPrototype,{
        nome: {value:nome},
        sobrenome: {value:sobrenome},
    })
}

const p1 = criaPessoa('felipe','pereira')
const p2 = criaPessoa('herminia','carla')
console.log(p1)