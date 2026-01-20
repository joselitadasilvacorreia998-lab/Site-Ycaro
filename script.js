/* TEXTO DIGITANDO */
const text = "Futuro programador 💻🚀";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").textContent += text[i];
    i++;
    setTimeout(typing, 100);
  }
}
typing();

/* MÚSICA */
const music = document.getElementById("music");
const btn = document.getElementById("musicBtn");
let playing = false;

btn.addEventListener("click", () => {
  if (!playing) {
    music.play();
    btn.textContent = "⏸️ Pausar música";
    playing = true;
  } else {
    music.pause();
    btn.textContent = "▶️ Tocar música";
    playing = false;
  }
});
