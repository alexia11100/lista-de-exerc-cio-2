//5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

function jogarJoKenPo(jogador) {
  const opcoes = ['pedra', 'papel', 'tesoura'];
  const pc = opcoes[Math.floor(Math.random() * 3)];

  console.log(`Você escolheu: ${jogador}`);
  console.log(`Computador escolheu: ${pc}`);

  if (jogador === pc) {
    console.log("Empate!");
  } else if (
    (jogador === 'pedra' && pc === 'tesoura') ||
    (jogador === 'papel' && pc === 'pedra') ||
    (jogador === 'tesoura' && pc === 'papel')
  ) {
    console.log("Você venceu!");
  } else {
    console.log("Você perdeu!");
  }
}

jogarJoKenPo('pedra'); 
