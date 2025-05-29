// 14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
// mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
// que eles foram informados.

const prompt = require('prompt-sync')();

let listaNomes = []

while(listaNomes.length <= 7){
    let nome = prompt("Diga um nome: ")
    listaNomes.push(nome)

    let opcao = prompt("Quer continuar? ")

    if(opcao === "n"){
        break
    }
    
}
console.log(listaNomes)

listaNomes.reverse()

console.log(listaNomes)