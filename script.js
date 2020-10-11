const keys = document.querySelectorAll(".key");

function playSound(event) {
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (sound) {
    sound.play();
    key.classList.add("playing");
  }
}

window.addEventListener("keydown", playSound);
