var a = 'Teste TS 22222';
// console.log(a);
var funcionario;
function baterPonto(hora) {
    if (hora > 8) {
        return 'Fora do horário';
    }
    return 'Ponto Normal';
}
funcionario = {
    supervisores: ['Paulo', 'Cláudio', 'Ana'],
    funcao: baterPonto
};
console.log(funcionario.supervisores);
console.log(funcionario.funcao(10));
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
