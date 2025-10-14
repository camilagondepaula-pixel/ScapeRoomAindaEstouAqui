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

let index = 0;

// Função para efeito de máquina de escrever
function typeWriter(texto, elementoId, callback, velocidade = 50) {
  let i = 0;
  const el = document.getElementById(elementoId);
  el.innerHTML = ""; // limpa antes de escrever
  function escrever() {
    if (i < texto.length) {
      el.innerHTML += texto.charAt(i);
      i++;
      setTimeout(escrever, velocidade);
    } else if (callback) {
      callback();
    }
  }
  escrever();
}

// Mostra frases em sequência
function mostrarProximaFrase() {
  if (index < frases.length) {
    typeWriter(frases[index], "mensagem", () => {
      // espera 2 segundos antes de mostrar a próxima
      setTimeout(mostrarProximaFrase, 2000);
    });
    index++;
  }
}

// Quando a página carregar, inicia a sequência
window.onload = () => {
  mostrarProximaFrase();
};
