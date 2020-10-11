const html = document.querySelector("html");
const keys = document.querySelectorAll(".key");

function playSound(event) {
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);

  if (!sound) return;

  sound.currentTime = 0;
  sound.play();
  key.classList.add("playing");
  html.classList.add("coloredFont");

  sound.addEventListener("ended", function () {
    setTimeout(() => {
      html.classList.remove("coloredFont");
    }, 2000);
  });
}

function removeTransition(e) {
  e.target.classList.remove("playing");
}

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
