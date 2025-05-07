// 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
// Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
// R$ 0.45 para viagens mais longas.

const prompt = require('prompt-sync')();

let distanciaPassageiro = Number(prompt("Qual a distância? "))
let distanciaLimite = 200
let valorSemDesconto = 0.50
let valorComDesconto = 0.45

if (distanciaPassageiro <= distanciaLimite){
    let valorDaPassagemSemDesconto = distanciaPassageiro * valorSemDesconto

    console.log(`Valor da passagem: ${valorDaPassagemSemDesconto}`)
}else{
    let valorDaPassagemComDesconto = distanciaPassageiro * valorComDesconto

    console.log(`Valor da passagem: ${valorDaPassagemComDesconto}`)
}