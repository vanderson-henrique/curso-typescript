let a: string = 'Teste TS 22222';
// console.log(a);

let funcionario: { supervisores: string[], funcao: (hora: number) => string }

function baterPonto(hora: number): string {
  if (hora > 8) {
    return 'Fora do horário'
  }
  return 'Ponto Normal'
}

funcionario = {
  supervisores: ['Paulo', 'Cláudio', 'Ana'],
  funcao: baterPonto
}

console.log(funcionario.supervisores)
console.log(funcionario.funcao(10))