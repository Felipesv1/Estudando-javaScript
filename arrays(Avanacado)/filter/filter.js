// filter -> Sempre retonar um array ,com a mesma quantidade de elementos

// retorne os numeros maiores que 10

const numeros = [5, 7, 85, 6, 2, 1, 53, 45, 2, 5, 11, 8, 55, 4];

const numerosFiltrados = numeros.filter((valor) => {
  valor > 50;
});

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a



const pessoas = [
  { nome: "luiz", idade: 62 },
  { nome: "maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "wallace", idade: 47 },
];

const pessoasComNomeGrande = pessoas.filter((obj) => { return obj.nome.length >= 6;});
const MaioresDeCinquenta = pessoas.filter(obj => { return obj.idade >= 50 })
const nomeTerminaComA = pessoas.filter((obj) => {
  return obj.nome.toLowerCase().endsWith('a')
})
console.log(pessoasComNomeGrande)
console.log(MaioresDeCinquenta)
console.log(nomeTerminaComA)