// 8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
// podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
// sistema funciona assim:
// - até 10 h de atividade no mês: ganha 2 pontos por hora
// - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
// - acima de 20 h de atividade no mês: ganha 10 pontos por hora
// - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
// Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
// Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.

let horasAtividadeNoMes = 21;
let pontos = 0;

function calcularPontos(horasAtividadeNoMes){
        if(horasAtividadeNoMes <= 10){
        pontos = horasAtividadeNoMes * 2;
        return pontos;
    }else if(horasAtividadeNoMes > 10 && horasAtividadeNoMes <= 20){
        pontos = horasAtividadeNoMes * 5;
        return pontos;
    }else if(horasAtividadeNoMes > 20){
        pontos = horasAtividadeNoMes * 10;
        return pontos;
    }
}

function calcularDinheiro(pontos){
    let dinheiro = pontos * 0.05;
    return dinheiro;
}

console.log(`Vc fez ${horasAtividadeNoMes} e ganhou ${calcularDinheiro(horasAtividadeNoMes)}`)
