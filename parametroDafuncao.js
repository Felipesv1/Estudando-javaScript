// argumentos que sustenta todos os argumentos enviados

// function Funcao(a,b = 0){
//     // let total = 0

//     // for(argumento of arguments){
//     //     total += argumento
//     // }
// console.log(a + b)
// }

// Funcao(2)


const conta = function(operador,acumulador,...numeros){
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador)
};
conta('-',0,20,30,40,50)