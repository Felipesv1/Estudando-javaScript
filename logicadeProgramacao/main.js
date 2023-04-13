// escreva uma função que recebe 2 numeros e retorne o maior deles

const max = (x, y) => (x > y ? x : y);

// console.log(max(2, 10));

// escreva um função chamada ePaisagem que recebe dois argumentos , largura e altura de uma imagem (number).
// retorne true  se a imagem estiver no modo paisagem

const ePaisagem = (largura, altura) => largura >= altura;

// console.log(ePaisagem(1920,1080))

// Escreva uma função que recebe um numero e retorne o seguinte :
//Número é divisivel por 3 = Fizz
//Número é divisivel por 5 = Buzz
//Número é divisivel por 3 e 5 = fizzBuzz
//Número NÃO é divisivel por 3 e 5 = Retorne o proprio número
//Checar se o número é realmente um número = Retorne o proprio número
// use a função com numeros de 0 a 100

function fizzBuzz(n) {
  if (typeof n !== "number") return n;
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n;
}

for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));
}
