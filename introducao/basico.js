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
