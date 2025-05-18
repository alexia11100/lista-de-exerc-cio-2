// 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
// comprimentos e diga se é possível formar um triângulo com essas retas.
// Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
// lado deve ser menor que a soma dos outros dois.

const prompt = require('prompt-sync')();

let lados = [prompt("Lado A: "), prompt("Lado B: "), prompt("Lado C: ")]
lados = lados.map((value) => Number(value))
let ehTriangulo = true

for(indice in lados){
    const lado = lados[indice]
    const outrosLados = lados.filter((_,indiceAtual) => indiceAtual !== indice)
    const soma = outrosLados.reduce((soma, lado) => soma += lado, 0)

    if(lado >= soma){
        ehTriangulo = false
    }
}

console.log(
    ehTriangulo === true ?
    "Forma um triangulo" : 
    "Não forma um triangulo"
)
