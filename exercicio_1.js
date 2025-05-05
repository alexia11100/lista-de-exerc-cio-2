// 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
// Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
// Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
// vida um fumante perderá e exiba o total em dias.

const prompt = require('prompt-sync')();

const cigarrosPorDia = Number(prompt("Cigarros por dia: "))
const anosDeFumante = Number(prompt("Anos de Fumante: "))

function calcularTempoPerdido(){
    const minutosPerdidioPorCigarro = 10
    const diasDoAno = 365
    const minutosPorAno = 525600
    const diasDoMes = 30
    
    const minutosperdidosPorDia = cigarrosPorDia * minutosPerdidioPorCigarro
    const minutosFumandoPorAno = minutosperdidosPorDia * diasDoAno 
    const anosFumando = (minutosFumandoPorAno * anosDeFumante) / minutosPorAno
    const diasFumados = anosFumando * diasDoAno
    const mesesPerdidos = diasFumados / diasDoMes

    if(anosDeFumante > 0 && cigarrosPorDia > 0){
        if(diasFumados < diasDoAno){
            console.log(`Vc perdeu ${diasFumados.toFixed(2)} dias`)
            if(diasFumados >= diasDoMes){
                console.log(`Que são ${mesesPerdidos.toFixed(2)} meses`)
            }
        }else{
            console.log(`Vc perdeu ${diasFumados.toFixed(2)} dias que são ${anosFumando.toFixed(2)} Anos`)
        }
    }else if(anosDeFumante === 0 && cigarrosPorDia === 0){
        console.log("Parabens não perdeu nenhum ano")
    }else{
        console.log("Dados inválidos")
    }
}

calcularTempoPerdido();