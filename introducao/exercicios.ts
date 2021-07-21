// var dobro = function(valor) {
//   return valor * 2
//   }
//   console.log(dobro(10))
const dobro = (valor: number) => valor * 2;
  console.log(dobro(10))


// var dizerOla = function (nome) {
//   if (nome === undefined) { nome = "Pessoa" }
//   console.log("Ola, " + nome)
//   }
//   dizerOla()
//   dizerOla("Anna")
const dizerOla = (nome: string = 'Pessoa') => console.log("Ola, " + nome)
dizerOla()
dizerOla("Anna")

// Imprimir o menor valor
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));

// Adicionar os elementos de numbers em array
var numbers = [-3, 33, 38, 5]
var array = [55, 20, ...numbers]
console.log(array)

// Destructuring
const notas: number[] = [8.5, 6.3, 9.4]
// var notas1 = notas[0]
// var notas2 = notas[1]
// var notas3 = notas[2]
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);

const cientista: { primeiroNome: string, experiencia: number } = { primeiroNome: "Will", experiencia: 12 }
// var primeiroNome = cientista.primeiroNome
// var experiencia = cientista.experiencia
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia)