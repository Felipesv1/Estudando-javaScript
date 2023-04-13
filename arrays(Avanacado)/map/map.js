// filter -> Sempre retonar um array ,com a mesma quantidade de elementos


// retorne os numeros maiores que 10

const numeros = [5, 7, 85, 6, 2, 1, 53, 45, 2, 5, 11, 8, 55, 4];

const numerosEmDobro = numeros.map((num)=> {
  return num * 2
})

console.log(numerosEmDobro)
// Para cada elemento : 



const pessoas = [
  { nome: "luiz", idade: 62 },
  { nome: "maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "wallace", idade: 47 },
];

// Retorne apenas uma string com nome da pessoa 
const nomes = pessoas.map(obj => {
  return obj.nome
})
// Remova apenas a chave 'nome' do objeto
const idades = pessoas.map((obj) => {
  delete obj.nome
  return obj 
})

// Adicione uma chave id em cada objeto
const comIds = pessoas.map((obj,indice) => {
// obj.id = indice
const newObj = {...obj}
newObj.id = indice;
return newObj
})
console.log(nomes)
console.log(idades)
console.log(comIds)