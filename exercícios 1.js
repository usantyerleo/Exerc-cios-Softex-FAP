// Questão 1//

/*
let saldoAtual = Number(prompt("digite seu saldo:"));

let cotacaoAtual = Number(prompt("Digite a cotação atual:"));

let valorConvertido;

let métodoConversão = Number(prompt(
  "Digite o método de conversão\n 1 -> Real para Dólar \n 2 -> Dólar para Real"
));

if ( métodoConversão == 1) {
  valorConvertido = saldoAtual / cotacaoAtual;
} else {
  valorConvertido =cotacaoAtual * saldoAtual;
}

console.log(`O valor convertido é:${valorConvertido}`);
alert(`O valor convertido é:${valorConvertido}`);
document.write(`O valor convertido é: ${valorConvertido}`);
*/

//Questão 2//

/*
let numero = Number(prompt('Informe um número: '));

if(numero % 2 == 0){

    alert('par')

}else{
    
    alert('Ímpar')};
*/

//Questão 3//

/*
let numero1 = 20
    let numero2 = 30

    if(numero1 > 30){

      alert('O número 1 é maior')

    }else{

      alert( 'O número 2 é maior')
    }; */

//Questão 4//

/*
 let prova1 = Number(prompt('Insira nota da prova 1'));
 let prova2 = Number(prompt('Insira nota da prova 2'));

 
 if(prova1 < 6){
    document.write("Aluno reprovado na prova 1 <br> a")
 }else{
  document.write("<br> Aluno aprovado na prova 1")
 };

 if(prova2 < 6){
  document.write("a <br> Aluno reprovado na prova 2")
 }else{
  document.write("Aluno aprovado na prova 2 ")
 }
  */

//Questão 5//

/*
Number(
  prompt(
    "Qual ingresso deseja: \n1 -> Ingresso Vip \n 2 -> Ingresso Standard"
  )
);

if(1){
  Number(prompt("\n1 -> Ingresso Vip com pipoca \n 2-> Ingresso Vip sem pipoca"))
  if(1){
    alert('Total = 110 Reais')
  }else{
    alert('Total = 80 Reais')
  }
}else{
  Number(prompt("\n1 -> Ingresso Standard com pipoca \n 2 -> Ingresso Standard sem pipoca"))
  if(1){
    alert('Total = 70 Reais')
  }else{
    alert('Total = 40 Reais')
  }
};
*/

//Questão 6//

/*
let marcação = Number(prompt("Bem-vindo ao sistema de marcação de consultas!\n\nEscolha uma opção:\n1. Marcar nova consulta\n2. Consultar consulta existente\n3. Cancelar consulta\n4. Sair"));

switch (marcação) {
  case '1':
    alert("Você escolheu marcar uma nova consulta.");
    let nome = prompt("Insira seu nome:");
    let data = prompt("Insira a data desejada (dd/mm/aaaa):");
    let horario = prompt("Insira o horário desejado (hh:mm):");
    let protocolo = 1234;
    alert(`Consulta marcada para ${data} às ${horario}, ${nome}.\nProtocolo: ${protocolo}`);
    break;

  case '2':
    alert("Você escolheu consultar uma consulta existente.");
    let consultaProtocolo = prompt("Insira o protocolo da consulta:");
    if (consultaProtocolo == 1234) {
      alert(`Consulta protocolo ${consultaProtocolo}:\n Lucas Leonardo, consulta agendada para 01/01/2025 às 12:30.`);
    } else {
      alert("Consulta não encontrada.");
    }
    break;

  case '3':
    alert("Você escolheu cancelar uma consulta.");
    let cancelamento = prompt("Insira o protocolo da consulta:");
    if (cancelamento == 1234) {
      alert("Consulta cancelada.");
    } else {
      alert("Consulta não encontrada.");
    }
    break;

  case '4':
    alert("Encerrando o sistema. Até logo!");
    break;

  default:
    alert("Opção inválida. Escolha uma opção válida.")
};
*/

//Questão 7//

/*
let horasTrabalhadas = prompt("Insira o número de horas trabalhadas no mês:");
let salarioPorHora = prompt("Insira o salário por hora:");
let salarioTotal;
const horasNormaisPorSemana = 40;
const semanasNoMes = 4;
const horasNormaisNoMes = horasNormaisPorSemana * semanasNoMes;
const valorHoraExtra = salarioPorHora * 0.5;

if (horasTrabalhadas > horasNormaisNoMes) {
    let horasExtras = horasTrabalhadas - horasNormaisNoMes;
    let pagamentoHorasNormais = horasNormaisNoMes * salarioPorHora;
    let pagamentoHorasExtras = horasExtras * valorHoraExtra;
    salarioTotal = pagamentoHorasNormais + pagamentoHorasExtras;
    alert(`Total: R$ ${salarioTotal.toFixed(2)}`);
} else {
    salarioTotal = horasTrabalhadas * salarioPorHora;
    alert(`Salario Total: R$ ${salarioTotal.toFixed(2)}`);
}
*/

//Questão 8//

/*
let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));
let operacao = prompt("Escolha a operação: soma, subtração, multiplicação ou divisão");
let resultado;

switch (operacao) {
    case 'soma':
        resultado = numero1 + numero2;
        alert(`A soma de ${numero1} e ${numero2} é ${resultado}`);
        break;

    case 'subtração':
        resultado = numero1 - numero2;
        alert(`A subtração de ${numero1} por ${numero2} é ${resultado}`);
        break;

    case 'multiplicação':
        resultado = numero1 * numero2;
        alert(`A multiplicação de ${numero1} por ${numero2} é ${resultado}`);
        break;

    case 'divisão':
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            alert(`A divisão de ${numero1} por ${numero2} é ${resultado}`);
        } else {
            alert("Não é possível dividir por zero.");
        }
        break;

    default:
      }
*/
