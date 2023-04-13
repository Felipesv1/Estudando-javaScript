// IIFE -> immediately invoked function expression


(function(idade,peso,altura){
const sobreNome = 'Pereira'
function criaNome(nome){
    return nome + '' + sobreNome
}
function falaNome(){
 console.log(criaNome('Felipe'))  
}

falaNome()
console.log(idade,peso,altura)
})(19,72,1.73)
