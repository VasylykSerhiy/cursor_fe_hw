export let audio = null;

export function playAudio() {
  audio = new Audio("../../src/10-work-with-event/fa.mp3");
  audio.play();
}