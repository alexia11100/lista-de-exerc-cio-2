// 17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
// dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
// os dados das pessoas menores de idade.

const prompt = require("prompt-sync")(); 

let nomes = []
let idades = []

for(let i = 0; i < 9; i++){
    let pedirNomes = prompt("Diga o nome: ")
    let pedirIdade = Number(prompt("Diga idade: "))

    nomes.push(pedirNomes)
    idades.push(pedirIdade)
}

for(let indice = 0; indice < idades.length; indice++){
    let idade = idades[indice]
    if(idade < 18){
        console.log(`Nome: ${nomes[indice]} Idade: ${idade}`)
    }
}


