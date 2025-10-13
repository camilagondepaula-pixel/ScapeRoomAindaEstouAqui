function enterGame() {
  const name = document.getElementById('playerName').value;
  if (name) {
    localStorage.setItem('playerName', name);
    window.location.href = 'room.html';
  }
}

function typeWriter(text, elementId, delay = 100) {
  let i = 0;
  const element = document.getElementById(elementId);
  element.innerHTML = '';
  const interval = setInterval(() => {
    element.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, delay);
}

function dynamicTitle(messages, interval = 3000) {
  let i = 0;
  setInterval(() => {
    document.title = messages[i % messages.length];
    i++;
  }, interval);
}
