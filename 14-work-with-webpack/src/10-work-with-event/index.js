export let audio = null;

export function playAudio() {
  audio = new Audio("./fa.mp3");
  audio.play();
}