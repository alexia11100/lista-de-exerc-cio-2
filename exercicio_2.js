// 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
// h 1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
// multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

const prompt = require('prompt-sync')();

let velocidadeUsuario = Number(prompt("Qual a velocidade? "))
let velocidadeLimite = 80
let multaPorKm = 5
let velocidadeUltrapassada = velocidadeUsuario - velocidadeLimite

if(velocidadeUltrapassada > 0){
    let multaAplicada = velocidadeUltrapassada * multaPorKm

    console.log(`Vc foi multado em R$ ${multaAplicada} , sua velocidade foi ${velocidadeUsuario} km e vc ultrapassou ${velocidadeUltrapassada} km`)
}else{
    console.log(`Vc não foi multado, sua velocidade ${velocidadeUsuario} km não passou do limite`)
}