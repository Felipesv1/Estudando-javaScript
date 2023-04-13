const pessoas = [
  { id: 3, nome: "beto" },
  { id: 2, nome: "carla" },
  { id: 1, nome: "jhouma" },
];

const novasPessoas = new Map()

for(const pessoa of pessoas){
    const {id}= pessoa
    novasPessoas.set(id,{...pessoa})
}
console.log(novasPessoas)