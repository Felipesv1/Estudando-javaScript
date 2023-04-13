// for classico geralmelnte com iteraveis(array ou strings)
// for in -> retorna o indice ou chave(string , array ou ibjetos)
// for of -> vem o valor em si (iteraveis,array ou strings)
const nome = 'Felipe Pereira'

for(let valor of nome){
    console.log(valor)
}


const pessoa = {
    nome:'felipe',
    sobrenome:'Pereira',
    idade:30
}

for(let chave in     pessoa){
console.log(chave,pessoa[chave])
}