// 13. Crie um programa que preencha automaticamente (usando lógica, não apenas
// atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
// da sequência de Fibonacci.

let fabonacci = []


while(fabonacci.length < 15){

    const ultimoElemento = fabonacci[fabonacci.length - 1] || 1
    const anterior = fabonacci[fabonacci.length - 2] || 0
    fabonacci.push(ultimoElemento + anterior)


}

console.log(fabonacci)
