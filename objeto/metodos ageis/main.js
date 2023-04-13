// Object.values
// Object.entries
// Object.getOwnPropertyDescriptor(o,'prop)
// Object.assign(des,any)
// ... (spread)


// ja vimos
// Object.keys (retorna as chaves)
// Object.freeze (congela o objeto)
// Object.defineProperties (define varias propriedades)
// Object.defineProperty (define uma propriedade)


const produto = { nome: 'Caneca',preco:1.9}


// const caneca = Object.assign({},produto,{material:'porcelana'}) (outra maneira de fazer uma copia do objeto)
const outraCaneca ={ 
    ...produto,
    material:'porcelana'
}

outraCaneca.nome = "outro nome"
outraCaneca.preco = 2.5

Object.defineProperty(produto, 'nome ', {
    writable:false,
    enumerable:true,
    configurable:true
})
console.log(Object.getOwnPropertyDescriptor(produto,"nome"))


for(let [chave,valor] of Object.entries(produto)){
    console.log(chave,valor)
}