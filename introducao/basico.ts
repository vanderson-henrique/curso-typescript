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

// Desafio - Atribuir tipos
type tipoConta = { saldo: number, depositar: (valor: number) => void };
let contaBancaria: tipoConta
 = {
  saldo: 3456,
  depositar(valor: number) {
      this.saldo += valor
  }
}

let correntista: { nome: string, contaBancaria: tipoConta, contatos: string[] }
 = {
  nome: 'Ana Silva',
  contaBancaria: contaBancaria,
  contatos: ['34567890', '98765432']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)

