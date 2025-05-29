// 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
// cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
// a) O somatório entre todos os valores;
// b) Qual foi o menor valor digitado;
// c) A média entre todos os valores;
// d) Quantos valores são pares.

const prompt = require("prompt-sync")();

let soma = 0;
let menor = null;
let quantidade = 0;
let pares = 0;

let continuar;

do{
    let valor = Number(prompt("Digite um número:"));
    soma += valor;
    quantidade++;

    if(menor === null || valor < menor) {
        menor = valor;
    }

    if(valor % 2 === 0){
        pares++;
    }

    continuar = prompt("Deseja continuar? (s/n)").toLowerCase();
}while(continuar === "s");

let media = soma / quantidade;

console.log(`Somatório: ${soma}`);
console.log(`Menor valor: ${menor}`);
console.log(`Média: ${media}`);
console.log(`Quantidade de valores pares: ${pares}`);

