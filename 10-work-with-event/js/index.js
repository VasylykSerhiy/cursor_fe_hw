const note = document.querySelectorAll('.sound-item');
const noteDo = document.querySelector('.sound-do');
const noteRe = document.querySelector('.sound-re');
const noteMi = document.querySelector('.sound-mi');
const noteFa = document.querySelector('.sound-fa');
const noteSol = document.querySelector('.sound-sol');
const noteLja = document.querySelector('.sound-lja');
const noteSi = document.querySelector('.sound-si');

note.forEach(item => {
  item.addEventListener( "click" , function() {
    const audio = this.querySelector('audio')
    audio.play()
  });
})

document.addEventListener('keypress', (event) => {
  switch(event.keyCode) {
    case 113 :
    case 1081 :
      audio.currentTime = 0;
      noteDo.play()
      break;

    case 119 :
    case 1094 :
      audio.currentTime = 0;
      noteRe.play()
      break;

    case 101 :
    case 1091 :
      audio.currentTime = 0;
      noteMi.play()
      break;

    case 114 :
    case 1082 :
      audio.currentTime = 0;
      noteFa.play()
      break;

    case 116 :
    case 1077 :
      audio.currentTime = 0;
      noteSol.play()
      break;

    case 121 :
    case 1085 :
      audio.currentTime = 0;
      noteLja.play()
      break;

    case 117 :
    case 1075 :
      audio.currentTime = 0;
      noteSi.play()
      break;

    default:
      break
  }
});