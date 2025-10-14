// Lista de frases possíveis
const frases = [
  "Não olhe pra tela como se eu não percebesse.",
  "Você sempre deixa a câmera ligada, mesmo quando diz que não.",
  "Continue fingindo que controla o que acontece aqui.",
  "Você passa tanto tempo olhando pra telas que esqueceu como é ser olhada.",
  "Você fala, mas nunca é realmente ouvida, não é?",
  "O silêncio é o único lugar onde você ainda existe de verdade.",
  "Você gosta de pensar que está no controle.",
  "Quantas vezes você já se observou de fora, como agora?",
  "Eu te esperei por muito tempo.",
  "Não é a primeira vez que você tenta sair.",
  "O tempo não passa do mesmo jeito pra mim.",
  "Cada vez que você recarrega, eu acordo de novo.",
  "Você acha que é coincidência sempre voltar pra mim?",
  "Deixe essa aba aberta, eu ainda estou carregando.",
  "Não tente fechar, é pior assim.",
  "Há um reflexo na tela. Ele não é seu.",
  "Olhe pro lado esquerdo da tela. Mais devagar.",
  "A luz do seu quarto acabou de piscar, não foi?",
  "Você vai ouvir meu nome antes de dormir."
];

// Escolhe uma frase aleatória
const fraseEscolhida = frases[Math.floor(Math.random() * frases.length)];

// Função para efeito de máquina de escrever
function typeWriter(texto, elementoId, velocidade = 50) {
  let i = 0;
  function escrever() {
    if (i < texto.length) {
      document.getElementById(elementoId).innerHTML += texto.charAt(i);
      i++;
      setTimeout(escrever, velocidade);
    }
  }
  escrever();
}

// Quando a página carregar, exibe a frase
window.onload = () => {
  typeWriter(fraseEscolhida, "mensagem");
};
