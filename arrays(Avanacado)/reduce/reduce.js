

const numbers = [5, 7, 85, 6, 2, 1, 53, 45, 2, 5, 11, 8, 55, 4];
// some todos os numeros (reduce)
const total = numbers.reduce((acumulador,valor)=> {
    acumulador += valor;
    return acumulador
},0)
// se não tiver o "0" o acumulador é o primeiro valor
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)

const dobro = numbers.map((valor) => {
   return valor * 2
})
console.log(`o dobro : ${dobro}`)

console.log(`o total : ${total}`)

const pares = numbers.filter((valor) => {
if(valor % 2 !== 0){
    return valor
}
})
console.log(pares)

// retorne a pessoa mais velha
const pessoas = [
  { nome: "luiz ", idade: 62 ,tag:'h2'},
  { nome: "maria ", idade: 23 ,tag:'h2'},
  { nome: "Eduardo ", idade: 55 ,tag:'h2'},
  { nome: "Leticia ", idade: 19 ,tag:'h2'},
  { nome: "Rosana ", idade: 32 ,tag:'h2'},
  { nome: "wallace ", idade: 47 ,tag:'h2'},
];

const container = document.querySelector('.container')
const div = document.createElement('div')

for (let i of pessoas){
  const {nome,idade,tag} = i

  let nomeCriado = document.createTextNode(` nome : ${nome}`)
  let idadeCriado = document.createTextNode(idade)
let tagCriada = document.createElement(tag)
console.log(idadeCriado)
tagCriada.appendChild(nomeCriado)
tagCriada.appendChild(idadeCriado )

div.appendChild(tagCriada)
}

container.appendChild(div)


const maisVelha = pessoas.reduce((acumulador,valor)=> {
  
  if(acumulador.idade > valor.idade) return acumulador
  return `<div>${valor}</div>`
    
})


container.appendChild(maisVelha)