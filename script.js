/* TEXTO DIGITANDO */
const text = "Futuro programador 💻🚀";
const typingElement = document.getElementById("typing");

let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}

typeEffect();

/* MÚSICA */
const music = document.getElementById("music");
const btn = document.getElementById("musicBtn");
let playing = false;

function toggleMusic() {
  if (!playing) {
    music.play();
    btn.innerHTML = "⏸️ Pausar música";
    playing = true;
  } else {
    music.pause();
    btn.innerHTML = "▶️ Tocar música";
    playing = false;
  }
}
