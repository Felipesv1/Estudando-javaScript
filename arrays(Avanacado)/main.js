
// metodo splice

//               -5      -4       -3         -2         -1
//                0       1        2          3          4
const nomes = ["joão", "kauê", "daniel", "ezequiel , nicolas"];
// o metodo splice tem 3 argumentos
// nome.splice(indice,delete,elem1,elem2,elem3)

// pop
// const removidos = nomes.splice(-1,1)

// shift
// const removidos = nomes.splice(0,1)

// unshift 

// nomes.splice(2,0,'mirrela , alfreda')


// -----------------------------------------------

// concatenando arrays

const a1 = [1,2,3]
const a2 = [4,5,6]

const a3 = [...a1,...a2]

console.log(a3)

// filter + map + reduce

const numbers = [5, 7, 85, 6, 2, 1, 53, 45, 2, 5, 11, 8, 55, 4];

// filtrar pares
// dobrar os valores
//  reduzir (somar tudo)


const numbersPares = numbers.filter(valor => (valor % 2 ===0)).map(valor => valor * 2).reduce((ac , valor) => ac + valor)

console.log(numbersPares)
