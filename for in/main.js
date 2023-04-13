// for in -> lê os indices ou chaves do objeto
const frutas = ['Pera','Maçã' , 'Uva']

for(let indice in frutas){
    console.log(frutas[indice])
}


const pessoa = {
    nome:'felipe',
    sobrenome:'Pereira',
    idade:30
}
// console.log(pessoa.nome)
// console.log(pessoa['nome'])

for(let chave in pessoa){
    console.log(chave,pessoa[chave])
}