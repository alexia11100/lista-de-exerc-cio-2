// 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
// tentar descobrir qual foi o valor sorteado.

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeroSorteado = Math.floor(Math.random() * 5) + 1;

readline.question("Tente adivinhar o número entre 1 e 5: ", (input) => {
  const palpite = parseInt(input);
  
  if (palpite === numeroSorteado) {
    console.log("Parabéns! Você acertou!");
  } else {
    console.log(`Você errou. O número era ${numeroSorteado}.`);
  }
  readline.close();
});
