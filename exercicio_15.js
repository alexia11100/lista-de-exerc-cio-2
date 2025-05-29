// 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
// final, mostre quais são os números pares que foram digitados e em que posições eles
// estão armazenados.

const prompt = require('prompt-sync')();

let listaNumeros = []
let listaNumerosPares = []
let listaPosicoes = []

while(listaNumeros.length < 10){
    
    let numero = Number(prompt("Numero: "))
    if(Number.isInteger(numero)){
        listaNumeros.push(numero)
    }else{
        console.log("Não é inteiro")
    }
    
}

for(let i = 0; i < listaNumeros.length; i++){
    if(listaNumeros[i] % 2 === 0){ 
        listaNumerosPares.push(listaNumeros[i])
        listaPosicoes.push(i)
    }
}

console.log("Números pares:", listaNumerosPares);
console.log("Posições dos pares:", listaPosicoes);
