// 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
// Ex.: 1, 1, 2, 3, 5, 8, 13, 21.

let fabonacci = []


while(fabonacci.length < 10){

    const ultimoElemento = fabonacci[fabonacci.length - 1] || 1
    const anterior = fabonacci[fabonacci.length - 2] || 0
    fabonacci.push(ultimoElemento + anterior)
}

console.log(fabonacci)