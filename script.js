function playSound(event) {
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);

  if (!sound) return;

  sound.currentTime = 0;
  sound.play();
  key.classList.add("playing");
  setTimeout(() => {
    key.classList.remove("playing");
  }, 70);
}

window.addEventListener("keydown", playSound);
