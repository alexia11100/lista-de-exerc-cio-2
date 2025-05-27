//9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
//mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai 
// perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
//funcionário.

const prompt = require('prompt-sync')();

let funcionarios = []

while(true){
    const genero = prompt("Genero: ")
    const salario = Number(prompt("Salario: "))

    const funcionario = {
        genero: genero,
        salario: salario
    }

    funcionarios.push(funcionario)

    const continuar = prompt("Continuar? ")

    if(continuar === "N"){
        break
    }
}

let salarioFeminino = 0
let salarioMasculino = 0

for(let i = 0; i < funcionarios.length; i++){
    const funcionario = funcionarios[i]

    if(funcionario.genero === "F"){
        salarioFeminino += funcionario.salario
    }

    if(funcionario.genero === "M"){
        salarioMasculino += funcionario.salario 
    }
}

console.log(`Salario Feminino: ${salarioFeminino}`)
console.log(`Salario Masculino: ${salarioMasculino}`)
