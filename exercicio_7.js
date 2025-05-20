// 7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
// carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
// cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
// (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
// mostre o preço a ser pago de acordo com os dados a seguir:
// Carros populares
// - Até 100 Km percorridos: R$ 0,20 por Km
// - Acima de 100 Km percorridos: R$ 0,10 por Km
// Carros de luxo
// - Até 200 Km percorridos: R$ 0,30 por Km
// - Acima de 200 Km percorridos: R$ 0,25 por Km

const prompt = require('prompt-sync')();

let tipo = prompt("Tipo de carro (popular ou luxo): ").toLowerCase();
let dias = Number(prompt("Quantos dias de aluguel? "));
let km = Number(prompt("Quantos km foram percorridos? "));

let precoDia = 0;
let precoKm = 0;

if(tipo === "popular"){
    precoDia = 90;
    precoKm = km <= 100 ? 0.20 : 0.10;
}else if(tipo === "luxo"){
    precoDia = 150;
    precoKm = km <= 200 ? 0.30 : 0.25;
}else{
    console.log("Tipo inválido.");
    process.exit();
}

let total = (dias * precoDia) + (km * precoKm);

console.log(`Valor total a pagar: R$ ${total.toFixed(2)}`);